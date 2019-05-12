<template>
  <div class="box">
    <header>
       <addTitle/>
    </header>
    <main>
      <div class="detail">
          <dl>
            <dt>
              <span>
                <img src="../../assets/images/logo.jpg" alt="">
              </span>
            </dt>
            <dd>
              <div class="left">
                <h2>喵掌柜杂货店<em>（已打烊）</em></h2>
                <p>
                  <span>包邮</span>
                  <em>满49包邮</em>
                </p>
              </div>
              <span class="right">
                 <nut-icon :item="item" :size="40" :style="{height:'40px',width:'40px',color:'#f00',fontSize:'40px'}"></nut-icon>
                 <b>已关注</b>
              </span>
            </dd>
          </dl>
      </div>
      <div class="swiper">
        <Swiper/>
      </div>
     <tabs @change="tabChange" class="active-list">
        <tab-pane label="热卖商品">
          <ArtileList :list="list" />
        </tab-pane>
        <tab-pane label="店家推荐">
            <nut-button type="actived"  color="red"
            >
              去结算ScAuC🍑
            </nut-button>
          <!-- <ArtileList/> -->
        </tab-pane>
        <tab-pane label="跳楼促销">
          <!-- <ArtileList/> -->
        </tab-pane>
      </tabs>
    </main>
  </div>
</template>
<script>
import NutIcon from '@/components/icon'
import ArtileList from '@/components/artileList'
import {Tabs, TabPane} from '@/components/tabbar'
import addTitle from '@/components/ptitle'
import NutButton from '@/components/button/button'
export default {
  components: {
    addTitle,
    Tabs,
    ArtileList,
    TabPane,
    NutButton,
    NutIcon
  },
  props: {

  },
  methods: {
    tabChange (index) {
      console.log(index)
    }
  },
  data () {
    return {
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
  dl{
    @include wh(100%,100%);
    padding: 0 30px;
    box-sizing: border-box;
    display: flex;
   dt{
     @include wh(100px,100px);
     margin: 30px 0;
     span{
       @include wh(100%,100%);
       img{
          @include wh(100%,100%);
       }
     }
    }
    dd{
      flex:1;
      display: flex;
      margin-left: 30px;
      line-height:80px;
      align-items: center;
      justify-content: space-between;
      .left{
        h2{
          font-family: PingFangSC-Regular;
          font-size:36px;
          color: #333333;
          line-height: 36px;
          margin-top:$font-size-xxl;
        }
        p{
          span{
             @include wh(30px,60px);
            background: rgba(90,218,208,0.06);
            border: 1px solid #5ADAD0;
            border-radius:3px;
            font-family: PingFangSC-Regular;
            font-size: $font-size-xxl;
            color: #5ADAD0;
            line-height: $font-size-xxl;
          }
          em{
            font-family: PingFangSC-Regular;
            font-size:$font-size-xxxl;
            color: #999999;
            line-height:$font-size-xxxl;
          }
        }
      }
      .right{
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-bottom:$font-size-l;
        i{
         font-size: 56px;
        }
        b{
          font-family: PingFangSC-Regular;
          font-size: 22px;
          color: #999999;
          line-height: 22px;
        }
      }
    }
  }
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
