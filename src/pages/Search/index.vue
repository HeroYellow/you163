<template>
  <div class="search-container">
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
        @touchstart="cancelBubble"
      />
    </form>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: 'Search',
  data() {
    return {
      value: ''
    }
  },
  methods: {
    cancelBubble(e) {
      e.stopPropagation()
    },
    onSearch(val) {
      Toast(val)
    },
    onCancel() {
      Toast('取消')
    }
  }
}
</script>

<style lang="stylus" scoped>
// .search-container
</style>
