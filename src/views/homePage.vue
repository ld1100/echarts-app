<template>
  <div>
    <header>
      <h1>echarts大数据可视化</h1>
    </header>
    <section class="container">
      <div class="itemLeft">
        <item-page>
          <item-one/>
        </item-page>
        <item-page>
          <item-two/>
        </item-page>
      </div>
      <div class="itemCenter">
        <map-page/>
      </div>
      <div class="itemRight">
        <item-page>
          <item-three/>
        </item-page>
        <item-page>
          <item-four/>
        </item-page>
      </div>
    </section>
  </div>
</template>

<script>
import ItemPage from '@/components/itemPage'
import ItemOne from '@/components/itemOne'
import ItemTwo from '@/components/itemTwo'
import ItemThree from '@/components/itemThree'
import ItemFour from '@/components/itemFour'
import MapPage from '@/components/mapPage'
// import {inject} from 'vue'

export default {
  name: 'homePage',
  components: {
    ItemPage,
    ItemOne,
    ItemTwo,
    ItemThree,
    ItemFour,
    MapPage
  },
  setup(){
    // 测试echarts、axios
    // let $echarts=inject('echarts')
    // let $axios=inject('axios')
    // console.log($echarts)
    // console.log($axios)

  }
}
</script>

<style lang="less" scoped>

header {
  height: 1rem;
  width: 100%;
  background-color: rgba(0, 0, 255, 0.2);

  h1 {
    font-size: 0.357rem;
    color: #fff;
    text-align: center;
    line-height: 1rem;
  }

}

.container {
  max-width: 2048px;
  min-width: 1200px;
  margin: 0 auto;
  padding: .125rem .125rem 0;
  display: flex;

  .itemLeft, .itemRight {
    flex: 3;
  }

  .itemCenter {
    flex: 5;
    height: 10.5rem;
    border: 1px solid blue;
    padding: .125rem;
    margin: .25rem;
  }
}
</style>
