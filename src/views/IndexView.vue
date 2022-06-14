// 微信首页
<template>
<HeaderView title="微信"></HeaderView>
  <div class="index">
    <div class="msg" v-for="(item,i) in list" :key='i' @click="chatbox(item.name,item.src,i)">
      <!-- 头像 -->
      <div class="msg-img">
        <div class="img-border">
          <img :src=item.src />
        </div>
      </div>
      <!-- 昵称和内容 -->
      <div class="msg-text">
        <p style="margin: 0; margin-top: 0.29rem; color: #484848">{{item.name}}</p>
        <p style="margin: 0;color: #ccc;font-size: 0.21REM;margin-top: 0.22rem;">{{item.title}}</p>
      </div>
      <!-- 时间 -->
      <div class="msg-time">
        <p style="margin: 0; margin-top: 0.29rem;margin-left:0.7rem;font-size: 0.21REM;">{{item.time}}</p>
        <p></p>
      </div>
    </div>
    
  </div>
  <FooterView></FooterView>
</template>

<script>
import HeaderView from './HeaderView.vue';
import FooterView from './FooterView.vue';
export default {
  components: {
    HeaderView,
    FooterView
  },
  data() {
    return {
      list:[],
      path_name:this.$router.name
   
    }
  },methods: {
 chatbox(name,src,i){
  // 传递name给chatboxView.vue , 
  console.log(this.path_name)
   this.$router.push({name:'Chatbox',params: { name:name,src:src ,id:i,path:1}})
    }
  },
  created() {
    var api='/contacts_list.json';
   this.axios.get(api).then((response)=> {
      // console.log(response);
     this.list=response.data.data;
     
    }).catch((error)=> {
      console.log(error);
    });
  },
  
};
</script>

<style scoped>
.index {

}
/* 消息 */
.msg {
  display: flex;
  height: 3.9rem;
  background: #ffffff;
}
.msg-img,
.msg-text,
.msg-time {
  height: 3.6rem;
  border-bottom: 1px solid #ccc;
}
.msg-img {
  flex: 1;
  border-bottom:none;
}
.img-border {
  margin-top: 0.25rem;
  height: 2.7rem;
  width: 2.7rem;
  border: 1px solid #ccc;
  background: white;
  text-align: center;
  margin-left: 0.8rem;
  padding-left: 0.06rem;
  border-radius: 0.2rem;
      padding-top: 0.08rem;
}
.msg-img img {
  width: 2.6rem;
  height: 2.6rem;
}
.msg-text {
  flex: 3;
  
}
.msg-time {
  flex: 1;
color: #ccc;
}
</style>

