// 服务
<template>
  <ChatboxHeadView :name="name" :background="background" @back="back(me)" ></ChatboxHeadView>
  <div class="serve" style="margin-top: 2.2rem;">
<div class="serve-header"  v-show=show style="margin-top:3rem" >
    <div class="serve-header-left">
        <!-- 收付款按钮 -->
      <img src="../assets/fk.png" alt=""  style='margin-top: 1.8rem;
    margin-left:3.5rem;' @click="pay" />
</div>
 <div class="serve-header-right">
        <!-- 钱包按钮 -->
      <img src="../assets/qb.png" alt="" style='margin-top: 1.6rem;
    margin-left: 3rem;' />
    <p style="    margin: 0;
    margin-left: 4.2rem;
    color: white;
    opacity: 38%;
    font-size: 0.3rem;">¥{{money}}</p>
</div>
  </div>
  <!-- 第二行 -->
  <div class="serve-header" style="margin-top: 0.4rem;background:#fffefe"  v-show=show>
    
    <div class="serve-header-left">
        <p style="margin:0;margin-top: 0.3rem;margin-left:0.6rem;  color: gray;
    opacity: 55%;
    font-size: 0.8rem;">生活服务</p>
        <!-- 健康码 -->
      <img src="../assets/jkm.png" alt=""  style='margin-top: 0.5rem;
    margin-left:0.6rem;' />
</div>
 <div class="serve-header-right">
       
   
</div>
  </div>
  <!-- 第三行 -->
    <div class="serve-header" style="margin-top: 0.4rem;background:#fffefe"  v-show=show>
    
    <div class="serve-header-left">
        <p style="margin:0;margin-top: 0.3rem;margin-left:0.6rem;  color: gray;
    opacity: 55%;
    font-size: 0.8rem;">购物消费</p>
        <!-- 健康码 -->
      <img src="../assets/meituan.png" alt=""  style='margin-top: 0.5rem;
    margin-left:0.6rem;    height: 5rem;' />
</div>
 <div class="serve-header-right">
       
   
</div>
  </div>
  <div v-show=!show class="pay">
    <img src="../assets/payer.png" alt="" >
  </div>
    </div>
</template>

<script>
import ChatboxHeadView from "./ChatboxHeadView.vue";
export default {
  components: {
    ChatboxHeadView
  },data() {
    return {
        name:'服务',
        money:"0.12",
        // 
        show:true,
        me:'me',
        background:''
    }
},methods: {
    back(name) {
        // 当me不为me时判断为二维码界面
        if(name!='me'){
            // 隐藏菜单显示二维码
            this.show=true;
            this.name='服务';
            this.me='me';
              this.background='';
        }else{
this.$router.push({name: name});
        }
        
    },

    pay(){
        //更改Chatboxhead组件标题名字
        this.name='二维码收款';
         // 隐藏菜单显示二维码
        this.show=false;
        //更改me值
        this.me='serve';
        //更改head样式
        this.background='background:#eeb601';

    }
},
}
</script>

<style scoped>
.serve {
    background: #ececec;
  height: 38.5rem;
}
.serve-header{
       width: 98%;
    height: 8rem;
    margin: 0 auto;
    background: #29ac66;
    display: flex;
    border-radius:0.5rem;
 

}
.serve-header-left{
flex: 1;
}
.serve-header-right{
flex: 1;
}
.pay{
    width:100%;
    height: 38.5rem;
    background: #eeb601;
}
.pay img{
        width:100%;
    height: 38.5rem;
}
</style>