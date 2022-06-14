// 聊天框头部
<template >
    <div class="Chatboxhead" :style=background>
    <!-- 返回 -->
    <div class="chatbox-right" v-on:click="$emit('back')">
        <img src="../assets/left-jt.png"  />
    </div>
    <!-- 中间文字 -->
 <div class="chatbox-center">
  <p>{{name}}</p>
</div>
 <div class="chatbox-left">
    <img src="../assets/set.png" />
</div>

  </div>
</template>

<script>

export default {
    emits: ['back'],
    name: 'ChatboxHeadView',
    props: {
        name: {
            type: String,
            default: '',
        },background:{
            type:String,
            default:''
        }}
        
        
        ,methods: {
            
        
        },
    }


</script>

<style scoped>
.Chatboxhead {
    position: fixed;
  width: 100%;
    top: 0;
  display: flex;
    background: #ededed;

  height: 3rem;

   
}
.chatbox-right {
  flex: 1;
}
.chatbox-right img{
    margin-top: 0.55REM;
    height: 1.6rem;
    margin-left: 0.5REM
}
.chatbox-center{
    flex: 3;
    text-align: center;
   color: #484848;
       font-weight: 600
}
.chatbox-left {
  flex: 1;
}
.chatbox-left img{
height: 1.5rem;
    margin-top: 1rem;
    margin-left: 2.5rem;
}
</style>