<template>
  <div class="container">
    <h2>로그인</h2>
    <fieldset class="text-center">
      <div class="input-section">
      <label for="id">아이디</label>
      <v-text-field type="text" id="id" v-model="id" class="view" /><br />
      <label for="password">비밀번호</label>
      <v-text-field
        type="password"
        id="password"
        v-model="password"
        class="view"
      /><br />
      <v-btn class="btn" @click="login">로그인</v-btn>
      </div>
    </fieldset>
  </div>
</template>
<script>
export default {
  name: "LoginForm",
  data() {
    return {
      id: "",
      password: "",
    };
  },
  methods: {
    login() {
      let user = {
        id: this.id,
        password: this.password,
      };

      this.$emit("login", user);
    },
  },
};
</script>
<style scoped>  
.v-text-field{
  width: 300px;
  display: block;
}
.container{
  margin: 0px 200px;
}
hr{
  background: gray;
}
.input-section{
  margin: 30px 600px;
}
label {
  font-weight: bold;
}
.v-btn {
  width: 300px;
}
.btn-section{
  text-align: center;
}
</style>
