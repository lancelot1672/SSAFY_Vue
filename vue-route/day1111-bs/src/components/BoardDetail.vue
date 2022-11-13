<template>
  <div v-if="desserts">
    <label> 글번호</label>
    <div class="view">{{ desserts.name }}</div>
    <label> 글제목</label>
    <div class="view">{{ desserts.calories }}</div>
    <label> 작성자</label>
    <div class="view">{{ desserts.fat }}</div>
    <label> 조회수</label>
    <div class="view">{{ desserts.carbs }}</div>
    <label> 작성시간</label>
    <div class="view">{{ desserts.protein }}</div>
    <label> 내용</label>
    <div class="view">{{ desserts.iron }}</div>
  </div>
  <div v-else>
    <h2>글번호</h2>
  </div>
</template>

<script>
export default {
  name: "BoardDetail",
  data() {
    return {
      desserts: Object,
    };
  },
  created() {
    //생성될 때 route 에서 받아오기
    this.desserts = this.$route.params.desserts;
    console.log(this.desserts);
  },
};
</script>

<style>
</style>