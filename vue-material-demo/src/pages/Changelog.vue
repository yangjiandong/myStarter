<template>
  <page-content page-title="更新历史">
    <div class="main-content changelog" v-html="content"></div>
  </page-content>
</template>

<style lang="scss">
  .changelog section {
    max-width: 960px;

    + section {
      margin-top: 56px;
    }

    .md-headline a {
      color: inherit;
    }

    ul a {
      font-weight: 700;
    }
  }
</style>

<script>
  export default {
    data: () => ({
      content: ''
    }),
    mounted () {
      let vm = this;

      vm.$http.get('/static/changelog.html')
        .then((response) => {
          let data = response.body;
          // console.log(data);

          // vm.$set('content', data);
          vm.content = data;
        })
        .catch(function (response) {
          console.log(response);
        });
    }
  };
</script>
