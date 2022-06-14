// 封装的头部View
<template>
    <header >

    <div class="one"> </div>

    <p style="color: #484848; font-weight: 600; margin-top: 0.8rem">{{title}}</p>
    <div class="icon">
      <img src="../assets/serch.png"  @click="serch" /><img src="../assets/jiahao.png" style="padding-left: 1rem;" />
    </div>
   

  </header>
</template>

<script>
export default {
 name: "HeaderView",
data() {
    return {
        
    }
},methods: {
  serch(){
    this.$router.push({path:'/search'})
  }
},
props: {
    title: {
        type: String,
        default: ""
    }
},
// ,methods: {
    
// },
// created() {
//   if(window.location.href == "http://localhost:8080/me"){
//     this.title = "我";
    
//   }else if(window.location.href == "http://localhost:8080/found"){
//     this.title = "发现";
//   }else if(window.location.href == "http://localhost:8080/contacts"){
//     this.title = "通讯录";
//   }else if(window.location.href == "http://localhost:8080/index"){
//     this.title = "微信";
//   }
// },
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