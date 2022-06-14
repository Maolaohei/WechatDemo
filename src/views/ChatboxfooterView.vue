// 聊天输入框底部
<template>
  <div class="Chatfooter">
    <div class="chatfooter-left">
      <img src="../assets/ly.png" />
    </div>
    <div class="chatfooter-input">
      <div class="input-body">
        <input type="text" v-model="text" @click="send" />
      </div>
    </div>
    <div class="chatfooter-right">
      <img class="right-1"
        src="../assets/biaoqing.png"
       
      />
      <img class="right-2"
        id="img"
        :src="src"
      
        
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatboxfooterView",
  data() {
    return {
      text: "",
      src: require("../assets/jiahao.png"),
    };
  },
  methods: {
    send() {
      //更改图片
      var img = document.getElementById("img");
      img.style.height = "2.0rem";
      img.style.width = "3.0rem";
      img.style.marginTop = "0.5rem";
      img.style.marginLeft = "0.1rem";

      this.src = require("../assets/send.png");
      //向父组件传递输入框内容
      //等待开发
    },
  },
};
</script>

<style scoped>
.Chatfooter {
  display: flex;
  width: 100%;
  background: #f7f7f7;
  height: 2.8rem;
  position: fixed;
  top: 38.88rem;
}

.chatfooter-left {
  flex: 1;
}
.chatfooter-left img {
  height: 2rem;
  margin-top: 0.5rem;
}
.chatfooter-input {
  flex: 5;
}
.chatfooter-right {
  flex: 2;
}
.chatfooter-right .right-1{
    margin-left: 0.4rem; height: 2rem; margin-top: 0.5rem

}
.chatfooter-right .right-2{
    margin-left: 0.5rem;
          height: 2rem;
          width: 2rem;
          margin-top: 0.5rem;
}
/* 输入框 */
.input-body {
  height: 2rem;
  background: #fefefe;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
}
.input-text {
  margin-top: 0.3rem;
}
.input-body input {
  border: 0;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
}
.input-body input:hover {
  border: 0;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
}
</style>