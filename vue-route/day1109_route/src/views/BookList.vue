<template>
  <div>
    <h1 class="underline">도서 목록</h1>
    <div style="text-align: right">
      <button @click="movePage">도서 등록</button>
    </div>
    <div v-if="books.length">
      <table id="book-list">
        <colgroup>
          <col style="width: 5%" />
          <col style="width: 20%" />
          <col style="width: 40%" />
          <col style="width: 20%" />
          <col style="width: 15%" />
        </colgroup>
        <thead>
          <tr>
            <th>번호</th>
            <th>ISBN</th>
            <th>제목</th>
            <th>저자</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(book, index) in books" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ book.isbn }}</td>
            <!-- v:bind(= :) vue.js에서 관리하고 있는 값(book)을 가져다 쓰겠다 -->
            <td>
              <a href="" v-on:click="titleClick(book.isbn)">{{ book.title }}</a>
            </td>
            <td>{{ book.author }}</td>
            <!-- <td>{{numberWithCommas(book.price)}}원</td> -->
            <td>{{ book.price | numberWithCommas }}원</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="text-center">등록된 도서가 없습니다.</div>
  </div>
</template>

<script>
export default {
  name: "BookList",
  data() {
    return {
      // 도서목록을 저장할 배열
      books: [],
    };
  },
  props: ["cup"], // 부모가 나한테 종이컵을 줬다.

  // DOM이 있는지 없는지 모르는 상황, Vue 객체는 생성된 상황
  created() {
    let _this = this;

    fetch("http://localhost:9999/vuews/book", {
      method: "get",
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("BookList Component created", data);
        _this.books = data;
      });
  },
  methods: {
    movePage() {
      // this.$router.push({ name: "aaa" });
      this.$router.push({ path: "/create" });
    },
    titleClick(isbn) {
      //이건 여러 컴포터넌트가 한꺼번에 보여지는 상태에서 데이터 보내던 방법
      // this.$emit("hey", isbn); // 1. 엄마 부르기
      //this.cup.$emit("hey", isbn); // 2. 종이컵에 대고 부르기

      // 이제 라우터가 화면에 보이는 컴포넌트 관리중이라 라우터한테 부탁해야 됨.
      // 데이터 보내는 방법1 : params
      // 받는 쪽 : this.$route.params.isbn
      // 특징 : url에 나타나지 않음.
      // this.$router.push({ name: "bookview", params: { isbn } });

      // 데이터 보내는 방법2 : query
      // 받는쪽 : this.$route.query.isbn
      // 특징 : url에 /bookview?isbn=1111 이렇게 나타남
      // this.$router.push({ name: "bookview", query: { isbn } });

      // 데이터 보내는 방법3 : path variable
      // 받는쪽 : router 설정 index.js 파일에 path:"/view/:isbn"
      // 특징 : url에 /view/1111 이렇게 나타남.
      // this.$router.push({ name: "bookview", params: { isbn: isbn } });
      this.$router.push({ path: "/view/" + isbn });
    },
  },

  filters: {
    numberWithCommas(x) {
      // 숫자의 3자리마다 ',' 찍기
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>
<style></style>
