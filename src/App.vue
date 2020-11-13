<template>
<router-view></router-view>
</template>

<script>
import {provide,ref} from 'vue'
export default {
  name: 'App',
  setup(){
    const clientWidth = document.documentElement.clientWidth
    const asideVisible = ref(clientWidth>=500?true:false)
    provide('asideVisible',asideVisible)
  }
}
</script>
