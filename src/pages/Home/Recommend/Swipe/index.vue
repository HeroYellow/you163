<template>
  <div class="swipe">
    <van-swipe class="my-swipe" :autoplay="3000">
      <van-swipe-item v-for="focus in focusList" :key="focus.id">
        <img :src="focus.picUrl" alt />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'Swipe',
  props: ['focusList']
}
</script>

<style></style>
