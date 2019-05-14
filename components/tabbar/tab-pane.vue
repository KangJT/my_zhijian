<template>
  <div v-show="isShow">
     <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'TabPane',
  props: {
    label: {

    }
  },
  components: {

  },
  data () {
    return {
      isShow: false
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
