<template>
    <i
    class="iconfont"
    :style="{'height':size+'px','width':size+'px','color':color,'fontSize':size+'px'}">
        {{item}}
    </i>
</template>
<script>
export default {
  name: 'nut-icon',
  props: {
    item: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 30
    },
    color: {
      type: String,
      default: '#ffffff'
    }
  },
  data () {
    return {

    }
  },
  created () {
  },
  methods: {

  }
}
</script>
<style lang='scss'>
.nut-icon {
    list-style: none;
    display:inline-block;
    width: 20px;
    height: 20px;
    color: yellowgreen;
    svg {
        width:100%;
        height:100%;
        fill: currentColor;
    }
}
</style>
