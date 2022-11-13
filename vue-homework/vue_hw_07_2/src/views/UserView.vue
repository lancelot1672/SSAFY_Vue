<template>
  <div>
    <router-view
      :users="users"
      @create-user="createUser"
      @update-user="updateUser"
      @delete-user="deleteUser"
    />
  </div>
</template>

<script>
import http from '@/util/http-common';
export default {
  name: "UserView",
  data() {
    return {
      users: [],
    };
  },
  props:{
    user : Object
  },
  methods: {
    getUserList() {
      // let userList = JSON.parse(localStorage.getItem("userList"));
      // if (userList) {
      //   this.users = userList;
      // }
        http.get('/user').then((response)=>{
          this.users = response.data;
        });

    },
    createUser(user) {
      console.log("create-user");
      // let userList = JSON.parse(localStorage.getItem("userList"));
      // if (userList) {
      //   userList.push(user);
      // } else {
      //   userList = [];
      //   userList.push(user);
      // }

      // localStorage.setItem("userList", JSON.stringify(userList));
      http.post('/user',user).then((response)=>{
        console.log(response);
          alert("등록 완료");
          this.$router.push("/user");
      })
      
    },
    updateUser(user) {
      // let userList = JSON.parse(localStorage.getItem("userList"));

      // for (let i = 0; i < userList.length; i++) {
      //   if (userList[i].id === user.id) {
      //     this.$set(userList, i, user);
      //     alert("수정 완료");
      //     break;
      //   }
      // }
      // localStorage.setItem("userList", JSON.stringify(userList));

      http.put('/user',user).then((response)=>{
        console.log(response);
        alert('수정완료!')
      });
      this.getUserList();
      this.$router.push("/user");
    },
    deleteUser(user) {
      // let userList = JSON.parse(localStorage.getItem("userList"));

      // for (let i = 0; i < userList.length; i++) {
      //   if (userList[i].id === user.id) {
      //     userList.splice(i, 1);
      //     alert("삭제 완료");
      //     break;
      //   }
      // }

      // localStorage.setItem("userList", JSON.stringify(userList));
      http.delete(`/user/${user.id}`).then((response)=>{
        console.log(response);
        alert('삭제완료!');
      });
      this.getUserList();
      this.$router.push("/user");
    },
  },
  created() {
    this.getUserList();
  },
};
</script>

<style>
.user-link {
  color: black;
}

.view {
  width: 80%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #787878;
  font-size: medium;
}

label {
  display: inline-block;
  width: 130px;
}

.btn {
  width: 8%;
  background-color: #d0d3d0;
  color: rgb(80, 82, 79);
  padding: 14px 20px;
  margin: 8px;
  border: 1px solid #787878;
  border-radius: 4px;
  font-size: large;
  cursor: pointer;
}

/* 테이블 CSS */
.user-list {
  border-collapse: collapse;
  width: 100%;
  text-align: center;
  margin: auto;
}

.user-list td,
.user-list th {
  border: 1px solid black;
}
</style>
