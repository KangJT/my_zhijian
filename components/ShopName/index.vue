<template>
  <dl>
    <dt>
      <span>
        <img src="../../static/logo.jpg" alt="">
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
          <nut-icon  :item="item" :size="40" :style="{height:'40px',width:'40px',color:'#f00',fontSize:'40px'}"></nut-icon>
          <b>已关注</b>
      </span>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    item: {
      type: String,
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
<style scoped lang="scss">

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

</style>
