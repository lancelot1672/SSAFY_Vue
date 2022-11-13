<template>
  <div class="container">
    <h2>회원 가입</h2>
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
        <label for="name">이름</label>
        <v-text-field type="text" id="name" v-model="name" class="view" /><br />
        <label for="email">이메일</label>
        <v-text-field type="email" id="email" v-model="email" class="view" /><br />
        <label for="age">나이</label>
        <v-text-field type="number" id="age" v-model="age" class="view" /><br />
        <v-btn @click="regist">등록</v-btn>
      </div>
    </fieldset>

  </div>
</template>
<script>
export default {
  name: "UserList",
  data() {
    return {
      id: "",
      password: "",
      name: "",
      email: "",
      age: 0,
    };
  },
  methods: {
    regist() {
      if (
        this.id === "" ||
        this.password === "" ||
        this.name === "" ||
        this.email === ""
      ) {
        alert("모든 내용을 입력해주세요");
        return;
      }

      let user = {
        id: this.id,
        password: this.password,
        name: this.name,
        email: this.email,
        age: this.age,
      };
      console.log("Asd");
      this.$emit("create-user", user);
    },
  },
};
</script>
<style>
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
</style>
