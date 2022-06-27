<template>
  <router-view/>
</template>
<script>
import { provide } from 'vue'
import * as echarts from 'echarts'
import axios from 'axios'
export default {
  setup(){
    provide("echarts",echarts)
    provide("axios",axios)
  }
}
</script>
<style lang="less">
body {
  background: url("~@/assets/bg.jpg") top center no-repeat;
  background-size: 100%;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
