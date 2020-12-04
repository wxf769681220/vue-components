<template>
  <div class="scroll" ref="scrollHook">
    <div class="scroll-content">
      <slot></slot>
    </div>
    <slot name="outside"></slot>
  </div>
</template>

<script>
import { debounce } from 'common/js/utils'
import BScroll from 'better-scroll'

const DIRECTION_H = 'horizontal'
const DIRECTION_V = 'vertical'

export default {
  props: {
    direction: {
      type: String,
      default: DIRECTION_V
    },
    probeType: {
      type: Number,
      default: 3
    },
    click: {
      type: Boolean,
      default: true
    },
    scrollX: { // 横向滚动
      type: Boolean,
      default: false
    },
    scrollY: { // 纵向滚动
      type: Boolean,
      default: false
    },
    bounce: { // 开启边缘回弹效果
      type: Boolean,
      default: true
    },
    bounceTime: { // 边缘回弹的时间
      type: Number,
      default: 600
    },
    swipeTime: { // momentum 动画的动画时长
      type: Number,
      default: 1000
    },
    swipeBounceTime: { // 运行 momentum 动画时，超过边缘后的回弹整个动画时间
      type: Number,
      default: 1000
    },
    // scroll event
    listenScroll: {
      type: Boolean,
      default: false
    },
    pullup: {
      type: Boolean,
      default: false
    },
    pulldown: {
      type: Boolean,
      default: false
    },
    beforeScroll: {
      type: Boolean,
      default: false
    },
    refreshDelay: {
      type: Number,
      default: 20
    },
    data: {
      type: Array,
      default: null
    }
  },
  watch: {
    data() {
      setTimeout(() => {
        this.refresh()
      }, this.refreshDelay)
    }
  },
  mounted() {
    setTimeout(() => {
      console.log('11111111111111')
      this._initScroll()
    }, 20)
  },
  methods: {
    _initScroll() {
      if (!this.$refs.scrollHook) {
        return
      }

      // init scroll
      this.scroll = new BScroll(this.$refs.scrollHook, {
        eventPassthrough: this.direction === DIRECTION_V ? DIRECTION_H : DIRECTION_V,
        probeType: this.probeType,
        click: this.click,
        bounce: this.bounce,
        bounceTime: this.bounceTime,
        swipeTime: this.swipeTime,
        swipeBounceTime: this.swipeBounceTime
      })

      // listen scroll
      if (this.listenScroll) {
        this.scroll.on('scroll', (pos) => {
          this.$emit('scroll', pos)
        })
      }

      // pullup and load more data
      if (this.pullup) {
        this.scroll.on('scrollEnd', debounce(() => {
          if (this.scroll.y <= (this.scroll.maxScrollY + 150)) {
            this.$emit('scrollToEnd')
          }
        }, 1000))
      }

      // pulldown and refresh data
      // if (this.pulldown) {
      //   this.scroll.on('scroll', (pos) => {
      //     if (pos.y > 80) {
      //       this.$emit('pulldownToRefresh')
      //     }
      //   })
      // }

      // before scroll
      if (this.beforeScroll) {
        this.scroll.on('beforeScrollStart', () => {
          this.$emit('beforeScroll')
        })
      }
    },
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    },
    stop() {
      this.scroll && this.scroll.stop()
    },
    enable() {
      this.scroll && this.scroll.enable()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    disable() {
      this.scroll && this.scroll.disable()
    },
    destroy() {
      this.scroll && this.scroll.destroy()
    }
  }
}
</script>
