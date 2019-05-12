<template>
<!-- <a href="javascript:;" class="list-item" @click="gotopage">
  <div>
    <div class="slot-left">
      <slot name="left"></slot>
    </div>
    <div class="left">
      <div>
        <span class="item-title" v-if="title">
          {{title}}
          <slot name="title"></slot>
        </span>
        <span class="item-sub-title" v-if="title">
          {{subTitle}}
          <slot name="sub-title"></slot>
        </span>
      </div>
      <p v-if="desc">{{desc}}</p>
    </div>
    <div class="right">
      <slot name="right"></slot>
      <span></span>
    </div>
  </div>
</a> -->
<a href="javascript:;" class="list-item">
      <div class='list-list'>
        <ul>
          <li>
            <!-- // @click="gotopage" -->
            <div class="list-img"></div>
            <div class="list-content">
              <h3>猫掌柜梅花软糖包邮糖果混合口味喜糖批发零食果汁qq糖1000g</h3>
              <p>规格：1000G</p>
              <div class="add-specifications">
                <em>{{items.price}}</em>
                <span>+</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
  </a>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    items: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    gotopage () {

    }
  }

}
</script>

<style lang="scss" scoped>
.list-list{
   font-size: $font-size-xxxxl;
  ul li{
    @include wh (100%,auto);
    padding: 10px 15px;
    box-sizing: border-box;
    display: flex;
    margin-top: 10px;
    .list-img{
      @include wh (180px,180px);
      background: orange;
    }
    .list-content{
      flex: 1;
      padding-left: 15px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h3{
        color:#000;
         line-height: $font-size-xxxxxl;
      }
      p{
        color: #333333;
         font-size:$font-size-xxxxl;
      }
      .add-specifications{
        display: flex;
        justify-content: space-between;
        em{
           color: $color-warning;
          font-size:$font-size-xxxxxl;
        }
        span{
          // react-native naturte
         @include wh (50px,50px);
          text-align: center;
          line-height:$font-size-xxxxxxl;
          background: $color-success;
          color: #fff;
          border-radius:3px;
        }
      }
    }
  }
}

.list-style{
  background: #000;
  font-size:$font-size-m;
  height: auto;
  ul{
    background: yellow;
    li{
      @include wh (50%,250px);
      padding: 10px 15px;
      box-sizing: border-box;
      .list-img{
        @include wh (100%,130px);
        margin: 0 auto;
        background: red;
      }
      .list-content{
        padding: 0;
        line-height:$font-size-s;
        h3{
          font-size:  $font-size-m;
          line-height:$font-size-xxl;
        }
      }
    }
  }
}
.list-content{
  flex: 1;
  padding-left:7.5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3{
    color:#000;
    line-height: 20px;
  }
  p{
    color:#cdcdcd;
    display: flex;
    align-items: center;
    // font-size: $font-size-m;
    font-size: 16px;
    line-height:24px;
  }
  .add-specifications{
    display: flex;
    justify-content: space-between;
    em{
      // color:$color-success;
      color: red;
      // font-size: $font-size-l;
      font-size: 16px;
    }
    span{
      width: 25px;
      height: 25px;
      text-align: center;
      line-height: 25px;
      // background: $color-success;
      background: forestgreen;
      color: #fff;
      border-radius:3px;
    }
  }
}
// .list-item {
//   @include wh(100%, auto);
//   padding: 10px;
//   background: #fff;
//   & > div {
//     @include wh(100%, auto);
//     @include flex();
//     overflow: hidden;
//     justify-content: space-between;
//     align-items: inherit;
//     .left {
//       flex: 1;
//       @include flex(column);
//       justify-content: space-between;
//       align-items: inherit;
//       .item-title {
//         line-height: 1.5;
//         font-size: $font-size-m;
//         color: #2d2d2d;
//       }
//       .item-sub-title {
//         @include line-ellipsis(2);
//         line-height: 1.5;
//         font-size: $font-size-s;
//         color: #848484;
//         margin-top: 5px;
//       }
//       p {
//         @include line-ellipsis(2);
//         line-height: 1.5;
//         font-size: $font-size-s;
//         color: #848484;
//         margin-top: 5px;
//       }
//     }
//   }
// }
</style>
