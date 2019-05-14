<template>
  <div class="box">
    <header>
       <addTitle :title="title"/>
    </header>
    <main>
      <div class="detail">
          <ShopName  :item="item" />
      </div>
      <div class="swiper">
        <Swiper/>
      </div>
     <nut-button type="actived"  color="red"  @click="clickHandler">切换 </nut-button>
     <tabs @change="tabChange" class="active-list">
        <tab-pane label="热卖商品">
          <ArtileList :list="list" :isStyleControl="isStyleControl" />
        </tab-pane>
        <tab-pane label="店家推荐">
          <ArtileList :list="list"/>
        </tab-pane>
        <tab-pane label="跳楼促销">
          <ArtileList :list="list"/>
        </tab-pane>
      </tabs>
    </main>
  </div>
</template>
<script>
export default {
  components: {
  },
  props: {

  },
  methods: {
    tabChange (index) {
      console.log(index)
    },
    clickHandler () {
      this.isStyleControl = !this.isStyleControl
    }
  },
  data () {
    return {
      isStyleControl: true,
      title: ' 请选择配送地址',
      item: '\ue619',
      list: [
        {
          title: '11111',
          price: '12.001',
          content: 'conend222333'
        },
        {
          title: '222ssss',
          price: '12.002',
          content: 'conend222'
        },
        {
          title: '333ssss',
          price: '12.33',
          content: 'conend33'
        },
        {
          title: '222ssss',
          price: '12.002',
          content: 'conend222'
        },
        {
          title: '333ssss',
          price: '12.33',
          content: 'conend33'
        },
        {
          title: '222ssss',
          price: '12.002',
          content: 'conend222'
        },
        {
          title: '333ssss',
          price: '12.33',
          content: 'conend33'
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.box{
  display: flex;
  flex-direction: column;
}
header{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.detail{
    @include wh(100%,160px);
  box-shadow: inset 0 -1px 0 0 #EBEBEB;
  }
.swiper{
   @include wh(100%,300px);
   background: $color-warning;
}
.active-list{
  display: flex;
  flex-direction: column;
}
main{
  display: flex;
  flex-direction: column;
}
</style>
