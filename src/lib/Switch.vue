<template>
  <button
      @click="toggleSwitch"
      :class="{'hots-checked':value}"
      class="hots-switch"
  ><span></span></button>
</template>

<script>
export default {
  name: "Switch",
  props: {value: Boolean},
  setup(props, context) {
    const toggleSwitch = () => {
      context.emit('update:value', !props.value)
    }
    return {toggleSwitch}
  }
}
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
$padding: 2px;
.hots-switch {
  height: $h;
  width: $h*2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;
  >span{
    position: absolute;
    top: $padding;
    left: $padding;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 250ms;
  }
  &.hots-checked {
    background-color: #1890ff;
    > span {
      left: calc(100% - #{$h2} - #{$padding});
    }
  }
  &:focus {
    outline: none
  }
  /*动画椭圆效果*/
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.hots-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>