<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <input type="text" v-model="msg">
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'springboot && vue 前后端分离开发'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  color: #42b983;
}
</style>
