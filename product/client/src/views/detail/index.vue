<template>
  <div>
      <Swiper/>
      <div class="detailtitle">
         -ui相求额内容
      </div>
  </div>
</template>
<script>
import Swiper from '@/components/swiper'
export default {
  props: {

  },
  components: {
    Swiper
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
