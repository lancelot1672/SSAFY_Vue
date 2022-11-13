<template>
  <div class="container">
    <h2>회원 정보</h2>
    <fieldset class="text-center">
      <div class="input-section">
      <label for="id">아이디</label>
      <v-text-field
        readonly
        type="text"
        id="id"
        v-model="user.id"
        class="view"
      /><br />
      <label for="password">비밀번호</label>
      <v-text-field
        type="password"
        id="password"
        v-model="user.password"
        class="view"
      /><br />
      <label for="name">이름</label>
      <v-text-field type="text" id="name" v-model="user.name" class="view" /><br />
      <label for="email">이메일</label>
      <v-text-field type="email" id="email" v-model="user.email" class="view" /><br />
      <label for="age">나이</label>
      <v-text-field type="number" id="age" v-model="user.age" class="view" /><br />

      </div>
      <div class="btn-section">
        <v-btn class="pink" @click="updateUser">수정</v-btn>
        <v-btn class="delete-btn" @click="deleteUser">삭제</v-btn>
      </div>
    </fieldset>
  </div>
</template>
<script>
import http from '@/util/http-common';
export default {
  name: "UserDetail",
  data() {
    return {
      user: {
        id: "",
        password: "",
        name: "",
        email: "",
        age: 0,
      },
    };
  },
  methods: {
    updateUser() {
      this.$emit("update-user", this.user);
    },
    deleteUser() {
      this.$emit("delete-user", this.user);
    },
  },
  created() {
    // const pathName = new URL(document.location).pathname.split("/");
    // const id = pathName[pathName.length - 1];
    // // localStorage에서 carList 저장된 자동차 목록을 얻어온 후 JSON객체로 parsing한다.
    // let userList = JSON.parse(localStorage.getItem("userList"));

    // for (let i = 0; i < userList.length; i++) {
    //   if (userList[i].id === id) {
    //     this.user = userList[i];
    //   }
    // }
    this.user.id = this.$route.params.id;
    http.get(`/user/${this.user.id}`).then((response)=> this.user = response.data);
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
  .btn-section{
    text-align: center;
  }

</style>