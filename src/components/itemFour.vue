<template>
  <div>
    <h2>产品销量</h2>
    <div id="chartFour">
      图表容器
    </div>
  </div>
</template>

<script>
import { inject, onMounted,reactive } from 'vue'

export default {
  name: 'itemOne',
  setup() {
    let $echarts = inject('echarts')
    let $axios = inject('axios')
    let chartData = reactive({})

    async function getState() {
      chartData = await $axios('/four')
      console.log(chartData)
    }

    onMounted(() => {
      getState().then(() => {
        let myChart = $echarts.init(document.getElementById('chartFour'))
        myChart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              // Use axis to trigger tooltip
              type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
            }
          },
          legend: {},
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            },
            axisLine:{
              show: true,
              lineStyle: {
                color: '#fff'
              }
            }
          },
          xAxis: {
            type: 'category',
            data: chartData.data.chartData.chartData.day,
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            },
            axisLine:{
              show: true,
              lineStyle: {
                color: '#fff'
              }
            }
          },
          series: [
            {
              name: '服饰',
              type: 'bar',
              stack: 'total',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: chartData.data.chartData.chartData.num.Clothes
            },
            {
              name: '数码',
              type: 'bar',
              stack: 'total',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: chartData.data.chartData.chartData.num.digit
            },
            {
              name: '家电',
              type: 'bar',
              stack: 'total',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: chartData.data.chartData.chartData.num.Electrical
            },
            {
              name: '家居',
              type: 'bar',
              stack: 'total',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: chartData.data.chartData.chartData.num.gear
            },
            {
              name: '日化',
              type: 'bar',
              stack: 'total',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: chartData.data.chartData.chartData.num.Chemicals
            }
          ]
        })
      })
    })
    return {
      getState, chartData
    }
  }
}
</script>

<style lang="less" scoped>
#chartFour {
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
