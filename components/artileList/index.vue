<template>
  <div class="artile-list">
     <list>
      <list-item
        v-for="(item, index) in list"
        :key="index"
        :items="item"
      >
      </list-item>
    </list>
  </div>
</template>
<script>
import {List, ListItem} from '../list/index.js'
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  components: {
    List, ListItem
  },
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {
    gotopage () {
      this.$router.push({
        path: '/goosd/detail'
      })
    }
  },
  created () {

  },
  mounted () {

  }
}
</script>
<style scoped lang="scss">
.artile-list {
  width: 100%;
  @include hidden
}

</style>
