<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div></div>
  <router-link to='/'>First</router-link>|
  <router-link to='/hello'>HelloWorld</router-link>
  <hr/>
  <router-view ></router-view>
</template>

<script>

export default {
  name: 'App'
}
</script>
