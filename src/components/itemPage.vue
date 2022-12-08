<template>
<div class="item">
<!--  设置插槽-->
  <slot/>
</div>
</template>

<script>
export default {
  name: 'itemPage'
}
</script>

<style lang="less" scoped>
.item{
  height: 5.125rem;
  border: 1px solid blue;
  margin: 0.25rem;
  background-color: rgba(12,130,255,.8);
}
</style>
