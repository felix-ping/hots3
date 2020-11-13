<template>
<router-view></router-view>
</template>

<script>
import {provide,ref} from 'vue'
import {router} from './router'
export default {
  name: 'App',
  setup(){
    const clientWidth = document.documentElement.clientWidth
    const asideVisible = ref(clientWidth >= 500)
    provide('asideVisible',asideVisible)
    router.afterEach(()=>{
      if(clientWidth<=500){
        asideVisible.value = false;
      }
    })
  }
}
</script>
