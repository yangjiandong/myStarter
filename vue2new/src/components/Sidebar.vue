<template>
  <div class="card">
    <div class="card-header" align="center">
      <img src="../assets/logo.png"
           class="avatar img-circle img-responsive"/>
      <p><strong> 非梦</strong></p>
      <p class="card-title">订阅列表</p>
    </div>
    <div class="card-block">
      <p v-for="(mp, idx) in subscribeList" @mouseover="showRemove(idx)" @mouseout="hideRemove(idx)">
        <small>
          <a class="nav-link" :href="mp.encGzhUrl" target="_blank">
            <img :src="mp.image" class="mpavatar img-circle img-responsive"/> {{ mp.mpName }} </a>
          <a href="javascript:" @click="unsubscribeMp(mp.weixinhao)">
            <i class="fa fa-lg float-xs-right text-danger sidebar-remove"
               :class="{'fa-minus-circle': mp.showRemoveBtn}"></i></a></small>

      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name : 'Sidebar',
        data() {
            return {}
        },
        created: function () {
            // 从LocalStorage中取出数据
            return this.$store.dispatch('initFromLS', 'init from LS');
        },
        computed : {
            subscribeList () {
                // 从store中取出数据
                return this.$store.state.subscribeList
            }
        },
        methods : {
            unsubscribeMp(weixinhao) {
                // 删除该公众号
                return this.$store.dispatch('unsubscribeMp',weixinhao);
            },
            showRemove(idx) {
                return this.subscribeList[idx]['showRemoveBtn']= true;
            },
            hideRemove(idx) {
                return this.subscribeList[idx]['showRemoveBtn']= false;
            }
        }
    }

</script>

<style>
    .avatar {
        height: 75px;
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .mpavatar {
        height: 30px;
        margin: 0 auto;
        margin-top: 2px;
        margin-bottom: 2px;
    }
    .img-circle {
        border-radius: 50%;
    }
    .sidebar-remove {
        margin-top: 8px;
    }



</style>