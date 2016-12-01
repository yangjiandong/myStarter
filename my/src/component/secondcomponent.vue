<template>
  <div id="secondcomponent">
   <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h1 style="line-height: 36px; color: #20A0FF">douban movies</h1>
      <div>

      <div v-for="article in articles" class="text item">
        {{article.title}}
      </div>
    </el-card>
  </div>
</template>

<script>
export default{
  data(){
    return{
      author:'weixin,..xo',
      articles:[],
       
    }
  },
  mounted: function(){
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10',{},{
        headers:{},
        emulateJSON: true}).
      then(function(response){
        //success
        this.articles = response.data.subjects;},
        function(response){
          //error
          console.log(response)
        });
  }
}
</script>

<style>
</style>
