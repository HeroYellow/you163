<template>
  <div class="recommend-container">
    <!-- 轮播图 -->
    <Swipe />
  </div>
</template>

<script>
// ~ 引入轮播图组件
import Swipe from '../../../components/Swipe'
export default {
  name: 'Recommend',
  components: {
    Swipe
  }
}
</script>

<style lang="stylus" scoped></style>
