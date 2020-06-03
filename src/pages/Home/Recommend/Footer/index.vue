<template>
  <div class="footer-wrap">
    <div class="footer">
      <div class="bd">
        <a href="javascript:;">下载APP</a>
        <a href="javascript:;">电脑版</a>
      </div>
      <p class="copyright">
        网易公司版权所有 © 1997-
        <br />
        食品经营许可证：JY13301080111719
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="stylus" scoped>
.footer-wrap
  border-top: 1px solid rgba(0,0,0,.15);
  background-color: #414141;
  .footer
    text-align: center;
    padding: .72rem .26667rem .37333rem;
    width: 10rem;
    margin-right: auto;
    margin-left: auto;
    .bd
      margin-bottom: .48rem;
      a
        width: 2.29333rem;
        font-size: .32rem;
        color: #fff;
        height: .82667rem;
        line-height: .82667rem;
        border: 1px solid #999;
        background-color: transparent;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        border-radius: 4px;
        overflow: hidden;
        &:first-child
          margin-right: .66667rem;
    .copyright
      font-size: .32rem;
      line-height: .42667rem;
      color: #999;
</style>
