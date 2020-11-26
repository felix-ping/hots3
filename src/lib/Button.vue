<template>
  <div>
    <button class="hots-button"
            :class="classes"
    >
      <slot/>
    </button>
  </div>
</template>

<script lang="ts">
import {computed} from 'vue'

export default {
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  setup(props) {
    const {size, theme} = props
    const classes = computed(() => {
      console.log({
        [`hots-theme-${theme}`]: theme,
        [`hots-size-${size}`]: size,
      })
      return {
        [`hots-theme-${theme}`]: theme,
        [`hots-size-${size}`]: size,
      }
    })
    return {classes};
  },
};
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
.hots-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.hots-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;

    &:hover, &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.hots-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover, &:focus {
      background: darken(white, 5%);;
    }
  }
  &.hots-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.hots-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
}
</style>