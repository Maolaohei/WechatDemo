// 通讯录
<template>
<HeaderView ref="HeaderView" :title="title"></HeaderView>
  <div class="Contacts">
    <!-- 功能展示 -->
    <div class="msg" v-for="(item, i) in list" :key="i">
      <!-- 头像 -->
      <div class="msg-img">
        <div class="img-border img-borde">
          <img :src="item.icon" />
        </div>
      </div>
      <!-- 昵称和内容 -->
      <div class="msg-text">
        <p style="margin: 0; margin-top: 1rem; color: #484848">
          {{ item.name }}
        </p>
      </div>
      <!-- 时间 -->
      <div class="msg-time">
        <p
          style="
            margin: 0;
            margin-top: 0.29rem;
            margin-left: 0.7rem;
            font-size: 0.21rem;
          "
        ></p>
        <p></p>
      </div>
    </div>
    <!-- 字母排序 -->
    <div class="letter">
      <p
        style="
          margin: 0;
          padding-top: 0.4rem;
          padding-bottom: 0.4rem;
          height: 1rem;
          font-size: 0.5rem;
          margin-left: 1rem;
        "
      >
        全部
      </p>
      <div class="msg" v-for="(item, i) in contacts_list" :key="i" @click='pyq(item.name,item.src,item.number,item.region)'>
        <!-- 头像 -->
        <div class="msg-img">
          <div class="img-border img-borde">
            <img :src="item.src" />
          </div>
        </div>
        <!-- 昵称和内容 -->
        <div class="msg-text">
          <p style="margin: 0; margin-top: 1rem; color: #484848">
            {{ item.name }}
          </p>
        </div>
        <!-- 时间 -->
        <div class="msg-time">
          <p
            style="
              margin: 0;
              margin-top: 0.29rem;
              margin-left: 0.7rem;
              font-size: 0.21rem;
            "
          ></p>
          <p></p>
        </div>
      </div>
    </div>
      <!-- 去除白边 -->
       <div style="height:10rem"></div>
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
      title: '通讯录',
      list: [
        {
          name: "新的朋友",
          icon: require("../assets/newp.png"),
          path: "/contacts/newfriend",
        },
        {
          name: "群聊",
          icon: require("../assets/group.png"),
          path: "/contacts/group",
        },
        {
          name: "标签",
          icon: require("../assets/tag.png"),
          path: "/contacts/tag",
        },
        {
          name: "公众号",
          icon: require("../assets/public.png"),
          path: "/contacts/public",
        },
       
      ],
       contacts_list:[]
    };
  },created() {
      var api='/contacts_list.json';
   this.axios.get(api).then((response)=> {
      // console.log(response);
     this.contacts_list=response.data.data;
     
    }).catch((error)=> {
      console.log(error);
    });
  },methods: {
    pyq(name,src,number,region){
      console.log(src)
this.$router.push({name:'Personal',params:{name:name,src:src,number:number,region:region} })
    }
  },
};
</script>

<style scoped>
.Contacts {
  background: #ededed;
}
.msg {
  display: flex;
  height: 3.3rem;
  background: #ffffff;
}
.msg-img,
.msg-text,
.msg-time {
  height: 3.3rem;
  border-bottom: 1px solid #ccc;
  font-weight: 500;
}
.msg-img {
  flex: 1;
  border-bottom: none;
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
.img-borde {
  border: none;
  background: none;
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