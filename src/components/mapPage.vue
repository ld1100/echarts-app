<template>
  <div id="map">

  </div>
</template>

<script>
import axios from 'axios'
import { onMounted, reactive, inject } from 'vue'

export default {
  name: 'mapPage',
  setup() {
    let $echarts = inject('echarts')

    let mapData = reactive({})

    async function getState() {
      mapData = await axios.get('http://localhost:8080/map/china-cities.json')
    }

    onMounted(() => {
      getState().then(() => {
        $echarts.registerMap('china', mapData.data)
        let myCharts = $echarts.init(document.getElementById('map'))
        myCharts.setOption({

          geo: {
            map: 'china',
            itemStyle: {
              areaColor: '#0099ff',
              borderColor: '#00ffff',
              shadowColor: 'rgba(230,130,70,0.5)',
              shadowBlur: 30,
              emphasis: {
                focus: 'self'
              }
            }
          },
          title:{
            text:'城市销量',
            left:'45%',
            textStyle:{
              color:'#fff',
              fontSize:20,
              textShadowBlur:10,
              textShadowColor:'#33ffff'
            }
          },
          tooltip:{
            trigger:'item'
          },
          visualMap:{
            type:'continuous',
            min:100,
            max:5000,
            calculable:true,
            inRange:{
              color:['#50a3ba','#eac736','#d94e5d']
            },
            textStyle:{
              color:"#fff"
            }
          },
          series: [{
            type: 'scatter',
            itemStyle: {
              color: 'red'
            },
            coordinateSystem: 'geo',
            data: [
              { name: "北京", value: [116.46, 39.92, 4367] },
              { name: "上海", value: [121.48, 31.22, 8675] },
              { name: "深圳", value: [114.07, 22.62, 2461] },
              { name: "广州", value: [113.23, 23.16, 4187] },
              { name: "西安", value: [108.45, 34, 3421] },
            ]
          }]
        })
      })
    })
    return {
      getState, mapData
    }
  }
}
</script>

<style lang="less" scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
