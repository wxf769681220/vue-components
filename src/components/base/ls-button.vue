<template>
  <button
    class="ls-button"
    :class="[
      type ? 'ls-button--' + type : '',
      size ? 'ls-button--' + size : '',
      {
        'ls-button--round': round,
        'ls-button--block': block
      }
    ]"
    :type="nativeType"
    @click="handleClick"
  >
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'LsButton',
  props: {
    nativeType: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'medium'
    },
    type: String,
    round: Boolean,
    block: Boolean
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~common/css/variable'

.ls-button
  display: inline-block
  font-weight: 500
  line-height: 1
  text-align: center
  white-space: nowrap
  color: $text-color
  background: #fff
  border: 1px solid $border-color-base
  border-radius: 0
  outline: 0
  cursor: pointer
  transition: 0.1s
  -webkit-appearance: none

  // 类型
  &.ls-button--text
    background-color: transparent
    border-color: transparent

  &.ls-button--primary, &.ls-button--danger, &.ls-button--success, &.ls-button--warning, &.ls-button--info
    color: #fff

  &.ls-button--primary
    background-color: $primary-color
    border-color: $primary-color

  &.ls-button--danger
    background-color: $danger-color
    border-color:  $danger-color

  &.ls-button--success
    background-color: $success-color
    border-color:  $success-color

  &.ls-button--warning
    background-color: $warning-color
    border-color:  $warning-color

  &.ls-button--info
    background-color: $info-color
    border-color:  $info-color

  // 大小
  &.ls-button--small
    padding: 6px 12px
    font-size: 12px

  &.ls-button--medium
    padding: 8px 16px
    font-size: 14px

  &.ls-button--large
    padding: 12px 20px
    font-size: 16px

  // 圆角
  &.ls-button--round
    border-radius: 4px

  // 块级
  &.ls-button--block
    display: block
    width: 100%
</style>
