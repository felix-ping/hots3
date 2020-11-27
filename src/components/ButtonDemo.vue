<template>
  <div>Button 示例</div>
  <h1>theme示例</h1>
  <div>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
  <h1>size 示例</h1>
    <div>
      <Button size="big">你好</Button>
      <Button size="middle">你好</Button>
      <Button size="small">你好</Button>
    </div>
  <h1>level示例</h1>
  <div>
    <Button level="main">你好</Button>
    <Button level="normal">你好</Button>
    <Button level="danger">你好</Button>
  </div>
  <h1>disabled示例</h1>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用按钮</Button>
  </div>
  <h1>loading示例</h1>
  <Button loading>加载中</Button>
	<Button @click="num+=1">{{num}}</Button>
	<div @click="num+=1">{{num}}</div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
import {ref} from 'vue'
export default {
  components: {Button},
  setup() {
  	const num = ref(0)
    const onClick = () => {
      console.log('hi')
    }
    return {onClick,num}
  }
}

</script>