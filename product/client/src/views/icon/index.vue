<template>
  <div>
    <a v-for="(item, index) in icons" :key="index" href="javascript:;" @click="copy(item)">
      <svg-icon :name="item" />
      <span>{{item}}</span>
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      icons: []
    }
  },
  created () {
    this.getIcons()
  },
  methods: {
    getIcons () {
      const req = require.context('@/assets/icons', false, /\.svg$/)
      this.icons = req.keys().map((path) => {
        return path.substr(2).replace('.svg', '')
      })
      console.log(this.icons, 'iii')
    },
    copy (name) {
      // window.clipboardData.setData('Text', name)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
