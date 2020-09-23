<template>
  <div class="home">
    <p>首页</p>
    <router-link to="/home/news">hahah</router-link>
    <router-view></router-view>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',

}
</script>
