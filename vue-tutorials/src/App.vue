<template>
     
  <div>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  data () {
  },
  created () {
    console.log(this.$router)
  }
}
</script>
