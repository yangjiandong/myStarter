<template>
  <div id="loginForm">
    <div id="loginLogo"> 
      <img src="./assets/logo.png" /> 
    </div>
    <el-form ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit">
      <el-form-item label="账号">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.region"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:98%">立即登陆</el-button>
      </el-form-item>
    </el-form>      
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        name: '',
        region: '',
        desc: ''
      }
    }
  },
  methods: {
    startHacking () {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 6000
      })
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}

  #loginForm{
    margin:0px auto;
    margin-top: 10%;
    width: 40%;
  }

  #loginLogo img{
    display: block;
    margin: 0 auto;
  }

</style>
