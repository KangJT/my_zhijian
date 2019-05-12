<template>
  <div class="component-list">
     <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'List',
  props: {

  }
}
</script>
<style scoped lang="scss">
 .component-list{
   margin-bottom:44px;
   a{
     width: 100%;
     display: inline-block;
   }
   .list-item{
     @include border1px(bottom);
     overflow: hidden;
     &:after{
       left: 10px;
     }
   }
 }
 </style>
