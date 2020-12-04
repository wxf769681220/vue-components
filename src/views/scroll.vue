<template>
  <ls-scroll
    class="ls-scroll"
    ref="lsScrollHook"
    :probeType="probeType"
    :listenScroll="listenScroll"
    :pullup="pullup"
    :data="list"
    @scroll="scrollPos"
    @scrollToEnd="scrollToEnd"
  >
    <div class="ls-scroll-content">
      <div class="paper-card" v-for="(item,index) in list" :key="index">
        <p>{{index + 1}} - {{item.journal}}</p>
        <a>{{item.title}}</a>
        <p>{{item.last_commented_datetime}}</p>
        <p>{{item.pubpeer_id}}</p>
        <p>{{item.doi}}</p>
      </div>
      <ls-loading v-show="hasMore" :title="`拼命加载中（${pageNo}/${Math.ceil(total/pageSize)}）...`"></ls-loading>
    </div>

    <template #outside>
      <div ref="aa" class="fixed-bottom" @click="testClick">click</div>
    </template>
  </ls-scroll>
</template>

<script>
import LsScroll from 'components/base/ls-scroll/ls-scroll'
import LsLoading from 'components/base/ls-loading/ls-loading'
import { getPubpeerPaperList } from 'network/api'

export default {
  name: 'page1',
  props: {},
  data() {
    return {
      pageNo: 1,
      pageSize: 10,
      total: 0,
      hasMore: false,
      searchQuery: {
        province_city: '',
        affiliations: '',
        keyword: '',
        doi_pmid: ''
      },
      // data
      list: []
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {
    this._initScroll()
    this._getData()
  },
  methods: {
    _initScroll() {
      this.probeType = 3
      this.listenScroll = true
      this.pullup = true
    },
    scrollPos(pos) {
      console.log(pos.y)
    },
    scrollToEnd() {
      if (this.hasMore) {
        this.pageNo++
        getPubpeerPaperList({
          page_no: this.pageNo,
          page_size: this.pageSize,
          language: 'en',
          query: this.searchQuery
        }).then(res => {
          // console.log(res)
          this.list = this.list.concat(res.data.paper_rows)
          this._checkMore(res.data)
        })
      }
    },
    testClick() {
      console.log('click')
      this.$refs.lsScrollHook.scrollTo(0, -200, 1000)
      // const el = this.$refs.aa
      // this.$refs.lsScrollHook.scrollToElement(el, 1000)
    },
    _getData() {
      getPubpeerPaperList({
        page_no: this.pageNo,
        page_size: this.pageSize,
        language: 'en',
        query: this.searchQuery
      }).then(res => {
        // console.log(res)
        this.list = res.data.paper_rows
        this.total = res.data.paper_total
        this._checkMore(res.data)
      })
    },
    // Status Or Non-business logic
    _checkMore(data) {
      const pageCount = Math.ceil(data.paper_total / data.page_size)
      if (data.page_no < pageCount) {
        this.hasMore = true
      } else {
        this.hasMore = false
      }
      // 另一种算法
      // if ((data.paper_rows.length + (data.page_no - 1) * data.page_size) >= data.paper_total) {
      //   this.hasMore = false
      // } else {
      //   this.hasMore = true
      // }
    }
  },
  components: {
    LsScroll,
    LsLoading
  }
}
</script>

<style scoped lang="stylus">
.ls-scroll
  position: fixed
  top: 50px
  right: 0
  bottom: 50px
  left: 0
  background: #f5f5f5
  overflow: hidden

  .paper-card
    margin-bottom: 10px
    padding: 10px 8px
    background: #fff

    p
      line-height: 1.5

  .fixed-bottom
    position: fixed
    right: 10px
    bottom: 10px
    height: 20px
</style>
