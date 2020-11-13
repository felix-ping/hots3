<template>
  <button @click="toggleSwitch" :class="{checked:value}"><span></span></button>
</template>

<script>
export default {
  name: "Switch",
  props:{value:Boolean},
  setup(props,context) {
    const toggleSwitch = () => {
      context.emit('update:value',!props.value)
    }
    return { toggleSwitch}
  }
}
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
$padding: 2px;
button {
  height: $h;
  width: $h*2;
  border: none;
  background: grey;
  border-radius: $h/2;
  position: relative;

}

span {
  position: absolute;
  top: $padding;
  left: $padding;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2 / 2;
  transition: left 250ms;
}

button.checked{
  background-color: blue;
  &>span {
    left: calc(100% - #{$h2} - #{$padding});
  }
}
button:hover{
  outline:none
}
</style>