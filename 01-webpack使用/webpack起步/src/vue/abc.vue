<template>
  <div>
    <h2>{{message}}</h2>
    <button @click="ontap">ClickMe!!</button>
  </div>
</template>

<script>
export default {
name: "app",
  components:{

  },
  data(){
    return {
      message:"hello,vue"
    }
  },
  methods:{
    ontap(){
      console.log("clickMe!!");
    }
  }
}
</script>

<style scoped>

</style>