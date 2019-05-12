<template>
  <p>
      <nut-icon :item="item" :size="20" ></nut-icon>
      请选择配送地址
  </p>
</template>
<script>
import NutIcon from '@/components/icon'
export default {
  components: {
    NutIcon
  },
  data () {
    return {
      item: '\ue62e'
    }
  }
}
</script>
<style scoped lang="scss">
p{
   @include wh (100%,88px);
    display: flex;
    align-items: center;
    padding: 11px 30px;
    box-sizing: border-box;
    background: #333333;
    color: #ffffff;
    font-size: $font-size-xxxxl;
    i{
     font-size:$font-size-xxxl;
    }
  }
</style>
