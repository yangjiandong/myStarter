<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div class="block">
    <el-input v-model="msg"/>

    <h1 v-if="yes">Yes!</h1>
    <h1 v-if="no">No!</h1>
    <h1 v-if="age >= 25">Age: {{ age }}</h1>
    <h1 v-if="name.indexOf('jack') >= 0">Name: {{ name }}</h1>
    </div>

    <el-form ref="form" :model="newPerson" label-width="80px">
      <el-form-item label="Name">
        <el-input v-model="newPerson.name"/>
      </el-form-item>
      <el-form-item label="Age">
        <el-input v-model="newPerson.age"/>
      </el-form-item>
      <el-form-item label="Sex">
        <el-select v-model="newPerson.sex" placeholder="请选择Sex">
          <el-option label="M" value="Male"></el-option>
          <el-option label="F" value="FM"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="people" style="width: 100%">
    <el-table-column prop="name" label="姓名"/>
    <el-table-column prop="age" label="Age"/>
    <el-table-column prop="sex" label="Sex"/> 
    </el-table>

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
      newPerson: {
        name: '',
        age: 0,
        sex: 'Male'
      },
      people: [{
        name: 'jack',
        age: 30,
        sex: 'Male'
      }, {
        name: 'lenon',
        age: 40,
        sex: 'Male'
      }, {
        name: 'fox',
        age: 40,
        sex: 'Male'
      }]
    }
  },
  methods: {
    say: function (msg) {
      console.log(msg)
    },
    onSubmit: function () {
      this.people.push(this.newPerson)
      this.newPerson = {
        name: '',
        age: 0,
        sex: 'Male'
      }
    }
  }
}
</script>

<style>
.demo-block {
  border: solid 1px #eaeefb;
  border-radius: 4px;
  transition: .2s;
}
</style>
