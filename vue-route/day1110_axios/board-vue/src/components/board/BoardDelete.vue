<template>
  <div class="regist">
    <h1>SSAFY 글 삭제</h1>
    <div>삭제중....</div>
  </div>
</template>

<script>
import http from "@/util/http-common";
export default {
  name: "BoardDelete",
  created() {
    // 비동기
    // TODO : 글번호에 해당하는 글을 삭제.
    http.delete(`/board/${this.$route.params.articleno}`).then(({ data }) => {
      let msg = "삭제 처리중 문제 발생";
      if (data === "success") msg = "삭제 성공!!!";
      alert(msg);
      this.moveList();
    });
  },
  methods: {
    moveList() {
      console.log("글목록 보러가자!!!");
      this.$router.push({ name: "boardList" });
    },
  },
};
</script>

<style></style>
