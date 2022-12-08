<template>
  <h2>图表1</h2>
  <div class="chart" id="oneChart">
  </div>
</template>

<script>
import { inject, onMounted, reactive } from 'vue'

export default {
  name: 'itemOne',
  setup() {
    let $axios = inject('axios')
    let $echarts = inject('echarts')

    async function getState() {
      data = await $axios({ url: 'one' })
    }

    let data = reactive([])
    let dataX = reactive([])
    let dataY = reactive([])
    const setData = () => {
      dataX = data.data.chartData.chartData.map(v => v.title)
      dataY = data.data.chartData.chartData.map(v => v.num)
    }
    onMounted(() => {
      getState().then(() => {
        setData()
        let myChart = $echarts.init(document.getElementById('oneChart'))
        myChart.setOption({
          grid:{
            top:'3%',
            left:'1%',
            bottom:'3%',
            right:'6%',
            containLabel:true //包含坐标轴中的文字
          },
          yAxis: {
            type: 'category',
            data: dataX,
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
          series: [
            {
              data: dataY,
              type: 'bar',
              itemStyle: {
                  barBorderRadius: [0,20,20,0],
                  color: new $echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#005eaa'
                  }, {
                    offset: 0.5,
                    color: '#339ca8'
                  },
                    {
                      offset: 1,
                      color: '#cda819'
                    }])

              }

            }
          ]
        })
        window.onresize = function() {
          myChart.resize()
        }
      })

    })
    return {
      getState, setData,
      data, dataX, dataY
    }
  }
}
</script>

<style lang="less" scoped>
h2 {
  height: .6rem;
  color: #fff;
  line-height: .6rem;
  text-align: center;
  font-size: .25rem;
}

.chart {
  height: 4.5rem;
}
</style>
