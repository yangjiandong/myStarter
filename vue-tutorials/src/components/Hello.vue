<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <input type="text" v-model="msg">
    <h1 v-if="yes">Yes!</h1>
    <h1 v-if="no">No!</h1>
    <h1 v-if="age >= 25">Age: {{ age }}</h1>
    <h1 v-if="name.indexOf('jack') >= 0">Name: {{ name }}</h1>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Sex</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in people">
          <td>{{ person.name  }}</td>
          <td>{{ person.age  }}</td>
          <td>{{ person.sex  }}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'springboot && vue 前后端分离开发',
      yes: true,
      no: false,
      age: 28,
      name: 'keepfool',
      people: [{
        name: 'jack',
        age: 30,
        sex: 'Male'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  color: #42b983;
}
</style>
