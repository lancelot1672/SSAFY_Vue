<template>
  <div class="container">
    <div class="text-center">

      <v-text-field
      label="이름을 입력하세요."
      :rules="rules"
      hide-details="auto"
      v-model="search"
    ></v-text-field>
      <v-btn class="ma-2"
      outlined
      color="indigo"
      
      @click="searchUser">검색</v-btn>
    </div>
    <br />
    <hr />
    <div class="table-section">
      <h2>검색 결과</h2>
      <div v-if="users.length">
        <v-simple-table class="user-list">
          <colgroup>
            <col style="width: 5%" />
            <col style="width: 40%" />
            <col style="width: 20%" />
            <col style="width: 20%" />
            <col style="width: 15%" />
          </colgroup>
          <thead>
            <tr>
              <th>번호</th>
              <th>아이디</th>
              <th>이름</th>
              <th>이메일</th>
              <th>나이</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in users" :key="index">
              <td>{{ index + 1 }}</td>
              <td>
                <router-link class="user-link" :to="`/${user.id}`">{{
                  user.id
                }}</router-link>
              </td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.age }} 세</td>
            </tr>
          </tbody>
        </v-simple-table>
      </div>
      <div v-else>검색 결과가 없습니다.</div>
    </div>
    <br />
  </div>
</template>
<script>
export default {
  name: "UserSearch",
  data() {
    return {
      search: "",
      users: [],
    };
  },
  methods: {
    searchUser() {
      let userList = JSON.parse(localStorage.getItem("userList"));

      this.users = [];
      for (let i = 0; i < userList.length; i++) {
        if (userList[i].name.indexOf(this.search) >= 0) {
          this.users.push(userList[i]);
        }
      }
    },
  },
};
</script>
<style scoped>
  .v-text-field{
    width: 1000px;
    display: inline-block;
  }
  .container{
    margin: 0px 200px;
  }
  hr{
    background: gray;
  }
  .text-center{
    text-align: center;
  }
  .table-section{
  text-align: center;
  }
  a {
    text-decoration: none;
    font-weight: bold;
    color: blue;
  }
</style>
