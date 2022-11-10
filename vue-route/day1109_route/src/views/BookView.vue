<template>
  <div class="regist">
    <h1 class="underline">SSAFY 도서 정보</h1>
    <div class="regist_form" v-if="book">
      <label for="isbn">도서번호</label>
      <div class="view">{{ book.isbn }}</div>
      <label for="title">도서명</label>
      <div class="view">{{ book.title }}</div>
      <label for="author">저자</label>
      <div class="view">{{ book.author }}</div>
      <label for="price">가격</label>
      <div class="view">{{ book.price }}원</div>
      <label for="content">설명</label>
      <div class="view" v-html="book.content"></div>
      <div style="padding-top: 15px">
        <a :href="'./modify.html?isbn=' + book.isbn" class="btn">수정</a>
        <a :href="'./delete.html?isbn=' + book.isbn" class="btn">삭제</a>
        <a href="/" class="btn">목록</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      book: {},
    };
  },
  //   props: ["money"], // 이건 부모가 나한테 isbn 주던 시절...
  //   props: ["cup"], // 이제 왠 종이컵 전화기가 오네??
  watch: {
    money() {
      console.log("bookView인 자식이 부모가 준 money를 받음:" + this.money);
      // 나의 데이터가 변경되면 그 때 실행
      // url에서 파라미터정보 얻기.
      // localStorage에서 booklist로 저장된 도서 목록을 얻어온 후 JSON객체로 parsing한다.
      const booklist = JSON.parse(localStorage.getItem("booklist"));
      for (let obj of booklist.books) {
        // 보여줄 isbn을 찾았다면.
        if (this.money == obj.isbn) {
          // 전역변수 book에 화면에 보여줄 객체를 저장.
          this.book = obj;
          break;
        }
      }
    },
  },
  created() {
    // 예전에 BookList 컴포넌트랑 한 화면에 같이 있을 때는 걔가 나를 hey하고 불렀었음.
    // this.cup.$on("hey", this.yes);

    // 이제는 라우터가 나를 관리하고 화면에 나타나게 해줄 거임.
    // 여러 route를 다 가지고 있는게 router 이고 방금 생성된 나(BookView)를 관리하는
    // 담당 route가 있을 거임.
    // this.findBook(this.$route.params.isbn);
    this.findBook(this.$route.params.isbn);
  },
  methods: {
    findBook(isbn) {
      let _this = this;
      fetch("http://localhost:9999/vuews/book/" + isbn, {
        method: "get",
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log("BookView Component created", data);
          this.book = data;
        });
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    enterToBr(str) {
      // 문자열에 enter값을 <br />로 변경.(html상에서 줄바꿈 처리)
      return str.replace(/(?:\r\n|\r|\n)/g, "<br />");
    },
  },
};
</script>

<style></style>
