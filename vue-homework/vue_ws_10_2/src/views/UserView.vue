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

