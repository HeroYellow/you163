<template>
  <div class="swipe">
    <!--  :autoplay="3000" -->
    <van-swipe class="my-swipe">
      <van-swipe-item>
        <img
          src="https://yanxuan.nosdn.127.net/7406334eaca021f7316b86ee21c3f320.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
          alt=""
        />
      </van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'Swipe'
}
</script>

<style lang="stylus" scoped>
.swipe
  height 3.94667rem
  overflow hidden
  img
    width 100%
</style>
