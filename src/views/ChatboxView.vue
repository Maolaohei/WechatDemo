// 聊天框
<template>
  <ChatboxHeadView :name="name" @back="back"></ChatboxHeadView>
  <div class="mt"></div>
  <div class="bg">
    <!-- 对话开始 -->
    <div class="chat-box">
      <div class="left">
        <img :src="s_img" />
      </div>
      <div class="right">
        <img
          src="../assets/redbag.png"
        
        />
      </div>
    </div>
    <!-- 左边 -->
    <div class="chat-box">
      <div class="chat-box-left"></div>
      <div class="boxleft">
        <div class="boxleft-text"
        >
          {{ text }}
        </div>
      </div>
      <div class="boxright">
        <img
          src="../assets/mehead.png"

        />
      </div>
    </div>
    <!-- 输入内容会弹窗对话(等待实现) -->
    <div class="chat-box" v-if="show">
      <div style="flex: 2"></div>
      <div class="boxleft">
        <div class="lefttext"
        
        >
          {{ test }}
        </div>
      </div>
      <div class="boxright">
        <img
          src="../assets/mehead.png"
          
        />
      </div>
    </div>
  </div>
  <ChatboxfooterView></ChatboxfooterView>
</template>

<script>
import ChatboxHeadView from "./ChatboxHeadView.vue";
import ChatboxfooterView from "./ChatboxfooterView.vue";
export default {
  components: {
    ChatboxHeadView,
    ChatboxfooterView,
  },
  data() {
    return {
      name: this.$route.params.name,
      s_img: this.$route.params.src,
      number: this.$route.params.number,
      region: this.$route.params.region,
      src: this.$route.params.src,

      list: [],
      text: "",
      text2: "", //已废弃
      //获取上一级路径
      s_path: this.$route.params.path,
      show: false,
    };
  },
  methods: {
    back() {
      //上一级路径

      console.log(this.s_path);
      // 判断变量为空时返回首页
      if (this.s_path == 1) {
        console.log("我吐了2");
        return this.$router.go(-1);
      } else {
        this.$router.push({
          name: this.s_path,
          params: {
            name: this.name,
            number: this.number,
            region: this.region,
            src: this.src,
            path: this.s_path,
          },
        });
        console.log("返回" + this.s_path);
      }
    },
    changeHandle(data) {
      this.text = data;
    },
  },
  created() {
    //通过读取chat_log.json文件实现聊天记录的变化(待完成)
    var api = "/chat_log.json";
    this.axios
      .get(api)
      .then((response) => {
        // console.log(response);
        this.list = response.data.me;
        console.log(this.list);
        //  生成随机数
        var sjs = Math.round(Math.random() * 9);
        this.text = this.list[sjs].text;
      })
      .catch((error) => {
        console.log(error);
      });
    if (this.$route.params.name == undefined) {
      this.name = "非法访问";
    }
  },
};
</script>

<style scoped>
.mt {
  margin-top: 3rem;
}
.bg {
  background: #ededed;
  height: 38.67rem;
}
.chat-box {
  display: flex;
  height: 7rem;
}
.chat-box .left img{
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 0.4rem;
  margin-left: 1rem;
  margin-top: 0.7rem;
}
.chat-box .right img{
  margin-top: 1rem; width: 15rem
}
.left {
  flex: 1;
}
.right {
  flex: 4;
}
.boxleft {
  flex: 3;
}
.boxright {
  flex: 1;
}
.chat-box-left{
    flex: 2
}
.boxleft-text{
      background: #ffffff;
            height: 2rem;
            padding-top: 0.7rem;
            margin-top: 1rem;
            padding-left: 0.5rem;
            border-radius: 0.5rem;
            margin-right: 1rem;
}
.boxright img{
         height: 2.5rem;
            width: 2.5rem;
            border-radius: 0.4rem;
            margin-right: 1rem;
            margin-top: 0.7rem;
}
.lefttext{
     background: #ffffff;
            height: 2rem;
            padding-top: 0.7rem;
            margin-top: 1rem;
            padding-left: 0.5rem;
            border-radius: 0.5rem;
            margin-right: 1rem;
}
</style>