// 我的页面
<template>
  <div class="me">
    <!-- 头部 -->
    <div class="me-header">
      <div class="me-header-img">
        <img src="../assets/mehead.png" />
      </div>
      <div class="me-header-text">
        <p
          style="
            margin-top: 4.2rem;
            font-size: 1.4rem;
            font-weight: 700;
            margin-left: 0.4rem;
          "
        >
          谢民宇
        </p>
        <p
          style="
            margin-top: 1.2rem;
            color: gray;
            font-size: 0.5rem;
            margin-left: 0.4rem;
          "
        >
          微信号:Mlh002i
        </p>
        <img
          src="../assets/zt.png"
          style="
            margin: 0;
            margin-top: 0.8rem;
            width: 3.8rem;
            height: 1.6rem;
            margin-left: 0.4rem;
          "
        />
      </div>
      <div class="me-head-code">
        <img
          src="../assets/head-erwei.png"
          style="margin: 0; margin-top: 7rem; margin-left: 3rem; height: 1.5rem"
        />
      </div>
    </div>
    <!-- 功能 -->
    <!-- 服务 -->
    <div class="me-body" style="margin-top: 0.5rem; margin-bottom: 0.5rem" @click="go('serve')">
      <div class="me-body-img">
        <img
          src="../assets/pay.png"
          style="height: 1.8rem; margin-left: 1rem; margin-top: 0.5rem"
        />
      </div>
      <div class="me-body-text" style="padding-top: 0.6rem">
        <span>服务</span>
      </div>
      <div class="jt" style="margin: 0">
        <img
          :src="arrow"
          style="margin-left: 3rem; margin-top: 0.6rem; height: 1.8rem"
        />
      </div>
    </div>
    <!-- 收藏朋友圈卡包表情 -->
    <div
      class="me-body"
      style="margin-top: 0"
      v-for="(item, i) in menu_list"
      :key="i"
    >
      <div class="me-body-img">
        <img
          :src="item.path"
          style="height: 1.8rem; margin-left: 1rem; margin-top: 0.5rem"
        />
      </div>
      <div
        class="me-body-text"
        style="padding-top: 0.7rem; border-bottom: 0.2px solid #ccc"
      >
        <span>{{ item.name }}</span>
      </div>
      <div class="jt" style="margin: 0; border-bottom: 0.2px solid #ccc">
        <img
          :src="arrow"
          style="margin-left: 3rem; margin-top: 0.6rem; height: 1.8rem"
        />
      </div>
    </div>
    <!-- 设置 -->
    <div class="me-body" style="margin-top: 0.5rem; margin-bottom: 0.5rem">
      <div class="me-body-img">
        <img
          src="../assets/sz.png"
          style="height: 1.8rem; margin-left: 1rem; margin-top: 0.5rem"
        />
      </div>
      <div class="me-body-text" style="padding-top: 0.7rem">
        <span>设置</span>
      </div>
      <div class="jt" style="margin: 0">
        <img
          :src="arrow"
          style="margin-left: 3rem; margin-top: 0.6rem; height: 1.8rem"
        />
      </div>
    </div>
    <!-- 去除白边 -->
    <div style="height: 10rem"></div>
  </div>
  <FooterView></FooterView>
</template>

<script>
import FooterView from "./FooterView.vue";
export default {
  components: {
    FooterView,
  },
  data() {
    return {
      arrow: require("../assets/jt.png"),
      menu_list: [
        {
          name: "收藏",
          path: require("../assets/sc.png"),
        },
        {
          name: "朋友圈",
          path: require("../assets/pyq.png"),
        },
        {
          name: "卡包",
          path: require("../assets/kb.png"),
        },
        {
          name: "表情",
          path: require("../assets/bq.png"),
        },
      ],
    };
  },methods: {
    go(name) {
      this.$router.push({
        name: name,
      });
    },
  },
};
</script>

<style scoped>
.me {
  background: #ececec;
}
.me-header {
  display: flex;
  height: 11.5rem;
  background: #ffffff;
}
.me-header-img {
  flex: 2;
}
.me-header img {
  margin-top: 4rem;
  margin-left: 1rem;
  height: 4rem;
  border-radius: 1rem;
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
.me-body {
  display: flex;
  background: #ffffff;
  height: 3rem;
}
.me-body-img {
  flex: 1;
}
.me-body-text {
  flex: 3;
}
.jt {
  flex: 1;
}
</style>