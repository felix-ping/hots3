

<template>
  <div>
    <Switch v-model:value="switchDefault" ></Switch>
  </div>
</template>

<script>
import Switch from '../lib/Switch.vue'
import {ref} from 'vue'
export default {
  name: "switchDemo",
  components: {Switch},
  setup(){
    const switchDefault =ref(true)
    return {switchDefault: switchDefault}
  }
}
</script>

<style scoped>


















</style>