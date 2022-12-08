<template>
  <h2>月产销量</h2>
  <div id="chartThree">
    图表容器
  </div>
</template>

<script>
import { inject, onMounted, reactive } from 'vue'

export default {
  name: 'itemOne',
  setup() {
    let $echarts = inject('echarts')
    let $axios = inject('axios')

    let chartData = reactive({})

    async function getState() {
      chartData = await $axios('/three')
    }

    onMounted(() => {
      getState().then(()=>{
        let myChart = $echarts.init(document.getElementById('chartThree'))
        myChart.setOption({
          legend: {
            top: 'bottom'
          },
          series: [
            {
              type: 'pie',
              radius: [20, 100],
              center: ['50%', '45%'],
              roseType: 'area',
              itemStyle: {
                borderRadius: 5
              },
              data:chartData.data.chartData.chartData
            }
          ],
          tooltip:{
            show:true,
            borderRadius:10
          }
        })
      })
    })
    return{
      getState,chartData
    }
  }
}
</script>

<style lang="less" scoped>
#chartThree {
  height: 4.5rem;
}
h2 {
  height: .6rem;
  color: #fff;
  line-height: .6rem;
  text-align: center;
  font-size: .25rem;
}
</style>
