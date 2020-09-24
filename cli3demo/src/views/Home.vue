<template>
  <div class="home">
    <p>首页</p>
    <router-link to="/home/news">新闻</router-link> |
    <router-link to="/home/message">消息</router-link>

    <router-view>

    </router-view>
  </div>


</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

console.log("bb")
export default {
  name: 'Home',

}
</script>
