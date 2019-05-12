<template>
  <div class="artile-list">
    <list>
      <list-item
        v-for="(item, index) in list"
        :key="index"
        :title="item[titleName]"
        :subTitle="item[contentName]"
        :desc="item.created_at"
        :linkUrl="item[linkName]"
      >
        <img :src="item[coverName]" :style="{width: '120px', height: '120px', marginRight: '10px'}" slot="left" />
      </list-item>
    </list>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    titleName: {
      type: String,
      default: 'title'
    },
    contentName: {
      type: String,
      default: 'description'
    },
    coverName: {
      type: String,
      default: 'cover'
    },
    linkName: {
      type: String,
      default: 'link'
    }
  }
}
</script>

<style lang="scss" scoped>
.artile-list {
  width: 100%;
  overflow: hidden;
}
</style>
