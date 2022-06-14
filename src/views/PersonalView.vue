//个人界面
<template>

  <div class="personal" >
 <div class="me-header">
      <div class="me-header-img">
        <img src="../assets/pl-jt.png" style="margin-top:1.2rem;height:1.9rem" @click="goto"/>
        <img :src=src style="    height: 4rem;    width: 4rem;
    border-radius: 1rem;" />
      </div>
      <div class="me-header-text">
        <p style="  margin-top: 4.2rem;font-size:1.4rem;font-weight: 700;   margin-left:0.4rem;">{{name}}   <img src="../assets/man.png" style="height: 1.4rem;
    margin-top: 0rem;
    margin-left: 0.2rem;"/></p>
        <p style=" margin-top: 0.4rem;color:gray;font-size:0.5rem;   margin-left:0.4rem;">微信号:{{number}}</p>
   <p style="   margin-top: 0.4rem;color:gray;font-size:0.5rem;   margin-left:0.4rem; ">地区:&nbsp;&nbsp;{{region}}</p>
      </div>
    </div>
<!-- 朋友圈 -->
<div class="me-friend">
    <div class="me-friend-title">
     
        <p style="font-size:1.0rem;font-weight: 400;">朋友圈</p>
        </div>
        <div class="me-friend-icon">
          
                <img src="../assets/jt.png" style="height: 1.9rem;
    margin-left: 17rem;
    margin-top: 0.8rem;" @click="goto"/>
           
                </div>
    </div>
    <!-- 发消息 -->
    <div class="me-send" @click="send()">
        <div class="me-icon"><img src="../assets/msg.png"></div>
  <div class="me-send-title">
 
            <p style="font-size:1.0rem;font-weight: 400;">   发消息</p>
        
    </div>
</div>
  </div>

</template>

<script>
export default {
data() {
    return {
        name: this.$route.params.name,
        number: this.$route.params.number,
        region: this.$route.params.region,
        src: this.$route.params.src,

    }
},methods:{
goto(){
    // 返回通讯录
    this.$router.push({name:"contacts"})
},
send(){
    this.$router.push({
        name:'Chatbox',
        params:{
            name:this.name,
            number:this.number,
            region:this.region,
            src:this.src,
            // 获取当前路由名
            path:this.$route.name,
        }
    })
}
},
created() {
   
},
}
</script>

<style scoped>
.personal {
  background: #ededed;
    height: 41.68rem;
}
.me-header {
    
  display: flex;
  height: 11.5rem;
  background: #fff;
}
.me-header-img {
  flex: 1;

}
.me-header img{
    margin-top: 0.8rem;
    margin-left: 1rem;
   
}
.me-header-text {
  flex: 3;
 
  
}
.me-header-text p {
  margin: 0;


}
.me-head-code {
  flex: 2;

}
/* 朋友圈 */
.me-friend {
  display: flex;
  height: 3.5rem;
  background: #fff;
  margin-top: 0.5rem;
}
.me-friend-title{
    flex: 1;
    text-align: center;
    font-size: 1.0rem;
    font-weight: 400;
}
.me-friend-icon{
    flex: 4;
    text-align: center;
}
/* 发消息 */
.me-send {
  display: flex;
  height: 3.5rem;
  background: #fff;
  margin-top: 0.5rem;

}
.me-icon{
    flex: 1;
 
}
.me-icon img{
   margin-left: 9.6rem;
    margin-top: 0.8rem;
}
.me-send-title{
    flex: 1;
    color: #7789a9;
}
</style>