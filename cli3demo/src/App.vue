<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
  </div>
  <router-link to="/first">First</router-link>
  |
  <router-link :to="'/user/'+userId">User</router-link>
  <button @click="getData">Profile</button>
  <router-view>

  </router-view>

</template>

<script>
export default {
  name: 'App',
  methods: {
    getData() {
      this.$router.push({
        path: '/profile', query: {
          name: "cze", pass: "123",
        }
      })
      console.log(this.$router);
    }
  },
  data() {
    return {
      userId: 'lisi',
    }
  }
}
</script>

<!--//css只在当前组件起作用 在style标签中写入scoped-->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
