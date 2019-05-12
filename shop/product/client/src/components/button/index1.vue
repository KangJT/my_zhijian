<template>
  <button>
     <!-- <i :style="`fontSize:${size}px`" class="iconfont">{{item.icon}}</i> -->
     <span :style="{color:this.color}">
       <slot></slot>
     </span>
  </button>
</template>
<script>
export default {
  name: 'nut-button',
  props: {
    color: {
      type: String, // 颜色
      default: ''
    },
    shape: {
      type: String, // 圆角
      default: ''
    },
    disabled: {
      type: String, // 禁用
      default: ''
    }
  },
  components: {

  },
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {

  },
  created () {

  },
  mounted () {

  }
}
</script>
<style scoped lang="">

</style>
