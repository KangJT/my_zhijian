<template>
  <div>
      <Swiper class="swiper"/>
      <div class="detailtitle">
         -ui相求额内容
      </div>
  </div>
</template>
<script>
export default {
  props: {

  },
  components: {
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped lang="scss">
.swiper{
  @include wh(100%,300px);
  background: $color-warning;
}
.detailtitle{
 @include wh(100%,210px);
 background: yellow;
}
</style>
