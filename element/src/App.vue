<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <el-button @click.native="startHacking">Let's do it</el-button>
    <el-button @click="dialogVisible = true">click show dialog</el-button>

    <el-dialog title="show" v-model="dialogVisible" size="tiny">
      <span>this is a message</span>
      <sapn slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible=false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">ok</el-button>
      </span>
    </el-dialog>

    <el-button @>

  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Use Vue 2.0 Today!',
      dialogVisible: false
    }
  },
  methods: {
    startHacking () {
      this.$notify({
        title: '正常工作',
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
</style>
