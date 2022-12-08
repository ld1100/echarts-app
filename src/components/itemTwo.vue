<template>
  <h2>产品销量</h2>
  <div id="chartTwo">
  </div>
</template>

<script>
import { inject, onMounted, reactive } from 'vue'

export default {
  name: 'itemTwo',
  setup() {
    let $echarts = inject('echarts')
    let $axios = inject('axios')
    let chartData = reactive({})

    async function getState() {
      chartData = await $axios('/two')
      // console.log(chartData)
    }

    onMounted(() => {
      getState().then(() => {
        let myChart = $echarts.init(document.getElementById('chartTwo'))
        myChart.setOption({
          color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            data: ['服饰', '数码', '家电', '家居', '日化']
          },
          grid: {
            left: '3%',
            right: '5%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
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
            }
          ],
          yAxis: [
            {
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
            }
          ],
          series: [
            {
              name: '服饰',
              type: 'line',
              stack: 'Total',
              smooth: true,
              lineStyle: {
                width: 0
              },
              showSymbol: false,
              areaStyle: {
                opacity: 0.8,
                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgb(128, 255, 165)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(1, 191, 236)'
                  }
                ])
              },
              emphasis: {
                focus: 'series'
              },
              data: chartData.data.chartData.chartData.num.Clothes
            },
            {
              name: '数码',
              type: 'line',
              stack: 'Total',
              smooth: true,
              lineStyle: {
                width: 0
              },
              showSymbol: false,
              areaStyle: {
                opacity: 0.8,
                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgb(0, 221, 255)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(77, 119, 255)'
                  }
                ])
              },
              emphasis: {
                focus: 'series'
              },
              data: chartData.data.chartData.chartData.num.digit
            },
            {
              name: '家电',
              type: 'line',
              stack: 'Total',
              smooth: true,
              lineStyle: {
                width: 0
              },
              showSymbol: false,
              areaStyle: {
                opacity: 0.8,
                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgb(55, 162, 255)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(116, 21, 219)'
                  }
                ])
              },
              emphasis: {
                focus: 'series'
              },
              data: chartData.data.chartData.chartData.num.Electrical
            },
            {
              name: '家居',
              type: 'line',
              stack: 'Total',
              smooth: true,
              lineStyle: {
                width: 0
              },
              showSymbol: false,
              areaStyle: {
                opacity: 0.8,
                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgb(255, 0, 135)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(135, 0, 157)'
                  }
                ])
              },
              emphasis: {
                focus: 'series'
              },
              data: chartData.data.chartData.chartData.num.gear
            },
            {
              name: '日化',
              type: 'line',
              stack: 'Total',
              smooth: true,
              lineStyle: {
                width: 0
              },
              showSymbol: false,
              label: {
                show: true,
                position: 'top'
              },
              areaStyle: {
                opacity: 0.8,
                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgb(255, 191, 0)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(224, 62, 76)'
                  }
                ])
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
#chartTwo {
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
