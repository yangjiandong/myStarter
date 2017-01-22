<template>
  <div class="container">
    <md-sidenav class="main-sidebar md-left md-fixed" ref="main-sidebar">
      <md-toolbar class="vue-material-logo" md-theme="white">
        <router-link exact to="/">
          <img :src="logo" alt="Vue">
          <span>Vue Material 示例</span>
        </router-link>
      </md-toolbar>

      <div class="main-sidebar-links">
        <md-list class="md-dense">
          <md-list-item>
            <router-link exact to="/">简介</router-link>
          </md-list-item>

          <md-list-item>
            <router-link exact to="/getting-started">起步</router-link>
          </md-list-item>

          <md-list-item>
            <span>Themes</span>

            <md-list-expand>
              <md-list>
                <md-list-item class="md-inset">
                  <router-link exact to="/themes/configuration">Configuration</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/themes/dynamic-themes">Dynamic Theme</router-link>
                </md-list-item>
              </md-list>
            </md-list-expand>
          </md-list-item>

          <md-list-item>
            <span>Components</span>

            <md-list-expand>
              <md-list>
                <md-list-item class="md-inset">
                  <router-link exact to="/components/avatar">Avatar</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/bottom-bar">Bottom Bar</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/button">Button</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/button-toggle">Button Toggle</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/card">Card</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/checkbox">Checkbox</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/chips">Chips</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/dialog">Dialog</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/file">File</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/icon">Icon</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/image-loader">Image Loader</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/ink-ripple">Ink Ripple</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/input">Input</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/list">List</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/menu">Menu</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/progress">Progress</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/radio">Radio</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/select">Select</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/sidenav">Sidenav</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/snackbar">Snackbar</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/spinner">Spinner</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/subheader">Subheader</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/switch">Switch</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/tabs">Tabs</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/table">Table</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/toolbar">Toolbar</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/tooltip">Tooltip</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/whiteframe">Whiteframe</router-link>
                </md-list-item>
              </md-list>
            </md-list-expand>
          </md-list-item>

          <md-list-item>
            <span>UI Elements</span>
            <md-list-expand>
              <md-list>
                <md-list-item class="md-inset">
                  <router-link exact to="/ui-elements/layout">Layout</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/ui-elements/typography">Typography</router-link>
                </md-list-item>
              </md-list>
            </md-list-expand>
          </md-list-item>

          <md-list-item>
            <router-link exact to="/changelog">更新历史</router-link>
          </md-list-item>

          <md-list-item>
            <router-link exact to="/about">关于</router-link>
          </md-list-item>
        </md-list>
      </div>

      <release-version></release-version>
    </md-sidenav>

    <transition name="md-router" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="scss">
  @import 'app.scss';
</style>

<script>
  import Vue from 'vue';

  export default {
    data () {
      return {
        toolbar: true,
        theme: 'default',
        pageTitle: ''
      };
    },
    computed: {
      logo () {
        let theme = Vue.material.currentTheme;

        if (theme) {
          return `static/logo-vue-material-${theme}.png`;
        }

        return 'static/logo-vue-material-default.png';
      }
    },
    methods: {
      toggleSidenav () {
        this.$refs['main-sidebar'].toggle();
      },
      closeSidenav () {
        this.$refs['main-sidebar'].close();
      }
    }
  };
</script>
