<template>
  <div>
    <table border="1">
      <tr>
        <th>no.</th>
        <th>제목</th>
        <th>작성자</th>
        <th>일시</th>
        <th>조회수</th>
      </tr>
      <tbody v-if="boards">
        <tr v-for="(board, index) in boards" :key="index">
          <td>{{ board.bno }}</td>
          <td>
            <a href="" v-on:click="titleClick(board.bno)">{{ board.title }}</a>
          </td>
          <td>{{ board.writer }}</td>
          <td>{{ board.writeDate }}</td>
          <td>{{ board.readCount }}</td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="5">게시글이 없습니다. 진짜 일까요?</td>
        </tr>
      </tbody>
    </table>

    <div id="div-page" v-if="boards">
      <a href="" v-if="this.startPage > 1" @click="getPage(this.startPage - 1)"
        >[이전]</a
      >
      <a
        href="#"
        v-for="(n, index) in range(this.startPage, this.endPage)"
        :key="index"
        @click="getPage(n)"
      >
        {{ n }}</a
      >

      <a
        href=""
        v-if="this.endPage > this.totalPage"
        @click="getPage(this.endPage + 1)"
        >[다음]</a
      >
    </div>

    <a href="/write">[글쓰기]</a>
  </div>
</template>

<script>
export default {
  name: "BoardList",
  data() {
    return {
      boards: [],
      currPage: 0,
      endPage: 0,
      startPage: 0,
      totalPage: 0,
    };
  },
  created() {
    // fetch 부분
    let _this = this;
    this.getPage(1);
  },
  methods: {
    getPage(page) {
      fetch("http://localhost:8888/rest/board?page=" + page)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.boards = data.boardList;
          this.currPage = data.currPage;
          this.endPage = data.endPage;
          this.startPage = data.startPage;
          this.totalPage = data.totalPage;
        });
    },
    range(start, end) {
      let list = [];
      for (let i = start; i <= end; i++) list.push(i);
      return list;
    },
    titleClick(bno) {
      this.$router.push({ path: "/view", query: { bno } });
    },
  },
};
</script>

<style>
</style>