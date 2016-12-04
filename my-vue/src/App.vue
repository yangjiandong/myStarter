<template>
  <div>
    <h1>Hello, {{message}}</h1>
  </div>
</template>

<script>
export default {
  data(){
    return {
      message: 'cooking, 开始吧'
    };
  }
};
</script>

<style lang='css' scoped>
h1 {
  color: blue;
}
</style>
