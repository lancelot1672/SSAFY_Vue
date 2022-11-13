<template>
  <div class="container">

    
    <div class="text-center">
      <h1>{{ message }}</h1>
    </div>
    <br />
    
    <user-search></user-search>
    <router-view></router-view>
  </div>
</template>

<script>
import UserSearch from "@/components/user/UserSearch.vue";

// import UserView from "@/views/UserView.vue";
export default {
  name: "HomeView",
  props:{
    user : Object
  },
  data() {
    return {
      message: "사용자 정보 사이트에 오신것을 환영합니다.",
    };
  },
  components: {
    UserSearch,

  },
  methods:{
  }
};
</script>
<style>
.text-center {
  text-align: center;
}
</style>
