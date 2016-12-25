<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <p>
      Welcome to your Vue.js app! <span style="color:red">[{{serverInfo.name}}]</span>
    </p>
    <p>
    巴拉巴拉一大堆。。。
    </p>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  data () {
    return {
      serverInfo: {name: ''}
    }
  },
  components: {
    Hello
  },
  created () {
    this.$http.get('./api/info').then((resp) => {
      console.info(resp.body)
      this.$set(this, 'serverInfo', resp.data)
    }).catch(function (resp) {
      console.error('error...')
      console.error(resp)
    })
  }
}
</script>

<style>
  html {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  #app {
    color: #2c3e50;
    margin-top: -100px;
    max-width: 600px;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
  }

  #app a {
    color: #42b983;
    text-decoration: none;
  }

  .logo {
    width: 100px;
    height: 100px
  }
</style>
