<template>

  <!-- <header v-show="head_show">

    <div class="one"> </div>
       
    <p style="color: #484848; font-weight: 600; margin-top: 0.8rem">{{title}}</p>
    <div class="icon">
      <img src="./assets/serch.png" /><img src="./assets/jiahao.png" style="padding-left: 1rem;" />
    </div>
   
  </header> -->
  <router-view />
  <!-- <div class="footer" v-show="footer_show">
    <div class="wx" @click="goto('index')">
      <img src="./assets/wx-1.png" />
      <sapn class="text">微信</sapn>
    </div>
    <div class="tz" @click="goto('contacts')">
      <img src="./assets/tx-1.png" /> <sapn class="text">通讯录</sapn>
    </div>
    <div class="fx" @click="goto('found')">
      <img src="./assets/fx-1.png" /> <sapn class="text">发现</sapn>
    </div>
    <div class="wd" @click="goto('me')">
      <img src="./assets/w-1.png" /> <sapn class="text">我</sapn>
    </div>
  </div> -->
</template>
<script>
export default {
//   data() {
//     return {
     
//       path: "",
//       head_show:true,
//       footer_show:true
//     };
//   },
//   methods: {
//     goto(text) {
//       // 获取头部对象
  
//       this.path = "/" + text;
//       // 更改标题
//       this.head_show=true;
//        this.footer_show=true;
//       if(text == "index"){
//         this.title = "微信";}
//       else if(text == "contacts"){
//         this.title = "通讯录";}
//       else if(text == "found"){
//         this.title = "发现";}
//       else if(text == "me"){
//         this.title = "我";
//        //隐藏头部
//         this.head_show=false;
//         console.log('头部V-IF'+this.head_show);
//         }
        
//       this.$router.push({ path: this.path });
//     },
//   },//钩子函数mounted实例已挂载
// mounted() {
//     this.head_show=true;
//      this.footer_show=true;
//     console.log( window.location.href);//获取路径
//     if( window.location.href == "http://localhost:8080/me"){
//      this.head_show=false;
//     }
//   }

};
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
