<template>
  <footer class="footer-nav">
    <router-link v-for="(item, index) in menu" :key="index" :to="item.path" active-class="active">
      <i :style="`fontSize:${size}px`" class="iconfont">{{item.icon}}</i>
      <span>{{item.name}}</span>
    </router-link>
  </footer>
</template>
<script>
export default {
  name: 'FooterNav',
  props: {
    menu: {
      type: Array,
      required: true
    },
    size: {
      type: Number,
      default: 15
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
.footer-nav {
  @include wh(100%,80px);
  background:$color-bg-ffff;
  display: flex;
  @include absolute(fixed);
  bottom:0;
  padding: 5px 0;
  box-sizing: border-box;
  box-shadow: 0 0 10px rgba(100, 100, 100, 0.1);
  a {
    @include flex(column);
    flex: 1;
    font-size: $font-size-m;
    padding: 10px 0;
    color: $color-text-secondary;
    line-height:$font-size-xxxxxl;
    &.active {
      color: $color-base;
    }
  }
}
</style>
