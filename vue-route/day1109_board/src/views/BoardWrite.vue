<template>
  <table>
    <tr>
      <td>제목 :</td>
      <td><input type="text" name="title" v-model="title" /></td>
    </tr>
    <tr>
      <td>작성자 :</td>
      <td><input name="writer" v-model="writer" /></td>
    </tr>
    <tr>
      <td>내용 :</td>
      <td>
        <textarea
          rows="10"
          cols="10"
          name="content"
          v-model="content"
        ></textarea>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <button @click="checkValue">글 등록</button>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "BookCreate",
  data() {
    return {
      title: "",
      writer: "",
      content: "",
    };
  },
  methods: {
    checkValue() {
      //유효성 검사

      this.registBoard();
    },
    registBoard() {
      console.log(this.title);

      let board = {
        title: this.title,
        writer: this.writer,
        content: this.content,
      };
      fetch("http://localhost:8888/rest/board", {
        method: "post",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(board),
      })
        .then((resp) => resp.text())
        .then((data) => {
          console.log("BoardWrite Result :", data);
          if (data == "success") {
            // 등록 성공 메세지 출력
            alert("등록이 완료되었습니다.");
            // 목록 페이지로 이동하기
            location.href = "/";
          } else {
            alert("등록 실패.");
          }
        });
    },
  },
};
</script>

<style>
</style>