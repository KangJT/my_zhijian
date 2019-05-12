<template>
  <div class="hello">
      HelloWorld
      <h2>身份:{{ idCard | sexIdcardFilter()}}</h2>
      <h2>姓名: {{ name | nameHide()}}</h2>
      <h2>价格:{{content | addZero}}</h2>
      <!-- <h2>时间：<span>{{createTime | formatDate(createTime)}}</span></h2> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: '怅惘慰问',
      idCard: '331082199708094687',
      moneyCard: '1234456478944512',
      content: '1212.0'
    }
  }
}
</script>

<style scoped>

</style>
