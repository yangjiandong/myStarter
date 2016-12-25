<template>
  <div>
    <h1>{{ msg }}</h1>

    <div id="demo">
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="text">文字按钮</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '首页'
    }
  }
}
</script>
<style>
</style>
