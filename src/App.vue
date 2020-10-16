<template>
  <div id="app">
    <ls-button type="text">文本</ls-button>
    <ls-button class="" type="primary">主要</ls-button>
    <ls-button type="danger">危险</ls-button>
    <ls-button type="success">成功</ls-button>
    <ls-button type="warning">等等</ls-button>
    <ls-button type="info">信息</ls-button>
  </div>
</template>

<script>
import lsButton from 'components/base/ls-button'

export default {
  name: 'app',
  components: {
    lsButton
  }
}
</script>

<style scoped lang="stylus"></style>
