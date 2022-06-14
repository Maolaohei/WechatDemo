// 搜索框,使用TdUI组件的搜索框
<template>
  <div class="serch">
    <t-search   
      v-model="value"
      :clearable="true"
      placeholder="搜索"
      @change="onChange"
      @cancel="onCancel">
    ></t-search>
  </div>
</template>

<script  >
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "SerchView",
  
  setup() {
    //定义方法
   const router = useRouter();
    const onChange = (val) => {
      console.log("change: ", val);
    };
    const onCancel=()=>{
   router.go(-1);
    }

    const value = ref("");

    return {
      onChange,onCancel, //注册方法
      value,

    };
  },
  
});
</script>
<style  lang="scss" scope="this api replaced by slot-scope in 2.5.0+">

</style>