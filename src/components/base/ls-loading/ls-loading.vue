<template>
  <div class="ls-loading">
    <img width="24" height="24" src="./loading.gif">
    <p class="desc">{{title}}</p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '正在载入...'
    }
  }
}
</script>
<style scoped lang="stylus">
@import '~common/css/variable'

.ls-loading
  display: flex
  align-items: center
  justify-content: center
  padding: 16px 0
  width: 100%
  text-align: center

  .desc
    margin-left: 4px
    line-height: 20px
    font-size: $font-size-small
    color: $color-text-l
</style>
