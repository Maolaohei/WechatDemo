// 底部导航栏
<template>
       <div class="footer" >
    <div class="wx" v-for="(item,i) in menu_list " :key="i" @click="goto(item.path)">
      <img v-show="!item.show" :src=item.def  />
           <img v-show="item.show" :src=item.actions  />
      <span class="text" style="">{{item.title}}</span>
    </div>

  </div>
</template>

<script>
export default {
     name: "FooterView",
data() {
    return {
       index:0,
       title:"",
        menu_list:[
            {show:1,path:'index',def:require('../assets/wx-1.png'),actions:require('../assets/wx-2.png'),title:"微信"},
            {show:0,path:'contacts',def:require('../assets/tx-1.png'),actions:require('../assets/tx-2.png'),title:"通讯录"},
            {show:0,path:'found',def:require('../assets/fx-1.png'),actions:require('../assets/fx-2.png'),title:"发现"},
            {show:0,path:'me',def:require('../assets/w-1.png'),actions:require('../assets/w-2.png'),title:"我"},]
    }
},methods: {
     goto(text) {
      //刷新页面
    this.title=text;
      // 拼接跳转路径

      if(text == "index"){
        this.title = "微信";
      this.menu_list[0].show=1;
      this.menu_list[1].show=0;
      this.menu_list[2].show=0;
      this.menu_list[3].show=0;
            }
      else if(text == "contacts"){
        this.title = "通讯录";
   this.menu_list[0].show=0;
      this.menu_list[1].show=1;
      this.menu_list[2].show=0;
      this.menu_list[3].show=0;
        }
      else if(text == "found"){
        this.title = "发现";
           this.menu_list[0].show=0;
      this.menu_list[1].show=0;
      this.menu_list[2].show=1;
      this.menu_list[3].show=0;

        }
      else if(text == "me"){
        this.title = "我";
     this.menu_list[0].show=0;
      this.menu_list[1].show=0;
      this.menu_list[2].show=0;
      this.menu_list[3].show=1;
 
        }

          this.path = "/" + text;
      this.$router.push({ path: this.path});

    },created() {
     
    },
},
}
</script>

<style scoped>
/* 头部 */
header {
  display: flex;
  background: #ededed;

  height: 3rem;
}
.one {
  flex: 1;
}
header p {
  flex: 1;
  text-align: center;
  color: #cbcbcb;
}
header .icon {
  flex: 1;
  text-align: center;
}
.icon img {
  margin-top: 17px;
  height: 1.2rem;
padding-left: 2.8rem;
}
/* 尾部 */
.footer {
     position: fixed;
  
    display: flex;
    width: 100%;
    height: 4rem;
    text-align: center;
    background: #f7f7f7;
    border-top: 1px solid #ccc;
    padding-top: 0.3rem;
    TOP: 37.4rem;
    z-index: 999;
}
.footer .text {
  display: block;
  color: #484848;
}
.wx,
.tz,
.fx,
.wd {
  margin-top: 0.1rem;
  flex: 1;
  height: 4rem;
}
.wx img {
  width: 2rem;
  height: 2rem;
}
.tz img {
  width: 2rem;
  height: 2rem;
}
.fx img {
  width: 2rem;
  height: 2rem;
}
.wd img {
  width: 2rem;
  height: 2rem;
}
</style>