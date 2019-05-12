<template>
  <div>
    <router-view />
    <footer-nav :menu="menu" :size=20 />
  </div>
</template>

<script>
import FooterNav from '@/components/footerNav'
export default {
  components: {
    FooterNav
  },
  data () {
    return {
      menu: [
        {
          name: '首页',
          path: '/index',
          icon: '\ue615'
        },
        {
          name: '购物车',
          path: '/toolbox',
          icon: '\ue690'
        },
        {
          name: '我的',
          path: '/mine',
          icon: '\ue666'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
