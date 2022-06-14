//发现
<template>
<HeaderView :title="title"></HeaderView>
  <div class="found">
    <div class="me-body" style="margin-top:0;border-bottom:1px solid #ccc" v-for="(item,i) in menu_list" :key='i' >
        <div class="me-body-img">
  <img :src="item.path" style="height: 1.8rem;
    margin-left: 1rem;
    margin-top: 0.5rem;" >
  </div>
  <div class="me-body-text" style="padding-top: 0.7rem;">
  <span>{{item.name}}</span></div>
  <div class="jt" style="margin:0;"><img :src="arrow" style="    margin-left: 3rem;     margin-top: 0.6rem;   height: 1.8rem;"></div>
       </div>
  </div>
  <FooterView></FooterView>
</template>

<script>
import HeaderView from './HeaderView.vue';
import FooterView from './FooterView.vue';
export default {
components: {
 HeaderView,FooterView
},
data() {
  return {
    title: '发现',
      menu_list:[{
        name:'收藏',
        path:require('../assets/sc.png')
      },
      {
        name:'朋友圈',
        path:require('../assets/pyq.png')
      },
      {
        name:'卡包',
        path:require('../assets/kb.png')
      },
      {
        name:'表情',
        path:require('../assets/bq.png')
      }]
  }
},
}
</script>

<style scoped>
.me-body{
display: flex;
 background: #ffffff;
 height: 3rem;
}
.me-body-img{
  flex: 1;
  }
  .me-body-text{
    flex: 3;
  }
  .jt{
    flex: 1;
  }

</style>