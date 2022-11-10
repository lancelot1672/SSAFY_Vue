<template>
  <div>
    <table border="1">
      <tbody>
        <tr>
          <th class="text-center">no.</th>
          <td class="text-left" id="vno">{{ bno }}</td>
        </tr>
        <tr>
          <th class="text-center">제목</th>
          <td class="text-left">
            <input
              id="vtitle"
              ref="vtitle"
              disabled="disabled"
              v-model="title"
            />
          </td>
        </tr>
        <tr>
          <th class="text-center">작성자</th>
          <td class="text-left">
            <input
              id="vwriter"
              ref="vwriter"
              disabled="disabled"
              v-model="writer"
            />
          </td>
        </tr>
        <tr>
          <th class="text-center">내용</th>
          <td class="text-left" id="vcontent" ref="vprice">
            <textarea
              rows="3"
              cols="20"
              id="vcontent"
              ref="vcontent"
              disabled="disabled"
              v-model="content"
            />
          </td>
        </tr>
        <tr>
          <th class="text-center">일시</th>
          <td class="text-left" id="vwriteDate">{{ writeDate }}</td>
        </tr>
        <tr>
          <th class="text-center">조회수</th>
          <td class="text-left" id="vreadCount">{{ readCount }}</td>
        </tr>
      </tbody>
    </table>
    <button @click="updateClick" ref="beforeBtn">수정하기</button>
    <button @click="updateBoard" style="display: none" ref="afterBtn">
      수정완료
    </button>
  </div>
</template>

<script>
export default {
  name: "BoardView",
  data() {
    return {
      bno: 0,
      title: "",
      writer: "",
      content: "",
      writeDate: "",
      readCount: 0,
    };
  },
  created() {
    this.getBoard(this.$route.query.bno);
    console.log(this.$route.params.bno);
  },
  methods: {
    getBoard(bno) {
      fetch("http://localhost:8888/rest/board/read?bno=" + bno)
        .then((response) => response.json())
        .then((data) => {
          this.bno = data.bno;
          this.title = data.title;
          this.writer = data.writer;
          this.content = data.content;
          this.writeDate = data.writeDate;
          this.readCount = data.readCount;
        });
    },
    updateClick() {
      this.$refs.vtitle.disabled = "";
      this.$refs.vcontent.disabled = "";

      //수정완료 버튼
      this.$refs.beforeBtn.style = "display : none;";
      this.$refs.afterBtn.style = "display : block;";
    },
    updateBoard() {
      let board = {
        bno: this.bno,
        title: this.title,
        writer: this.writer,
        content: this.content,
      };

      //값 수정
      fetch("http://localhost:8888/rest/board", {
        method: "PUT",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(board),
      })
        .then((response) => response.text())
        .then((data) => {
          console.log(data);
          if (data == "success") {
            alert("수정 완료되었습니다.");
            this.$router.push({ nam, e: "home" });
          }
        });
    },
  },
};
</script>

<style>
</style>