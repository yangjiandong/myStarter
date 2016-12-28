<template>
  <div>
    <myComponent/>

    <my-component/>
    <my-component-2/>
  </div>

</template>
<script>
import Vue from 'vue'

Vue.component('my-component-2', {
  template: '<div> This is other my-2</div>'
})

import myComponent from '../components/myComponent'
export default {
  name: 'test',
  components: {
    myComponent
  }
}
</script>
