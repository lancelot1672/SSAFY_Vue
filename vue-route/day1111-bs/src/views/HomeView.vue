<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12">
          <v-sheet min-height="10vh" rounded="lg" class="select_section">
            <v-select
              class="select"
              label="시도"
              style="width: 150px"
              :items="sidoList"
              placeholder="select"
              v-model="sido"
            ></v-select>
            <v-select
              class="select"
              label="구군"
              style="width: 150px"
              :items="sidoList"
              placeholder="select"
              v-model="sido"
            ></v-select>
            <v-select
              class="select"
              label="동"
              style="width: 150px"
              :items="sidoList"
              placeholder="select"
              v-model="sido"
            ></v-select>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-sheet min-height="70vh" rounded="lg">
            <board-list></board-list>
          </v-sheet>
        </v-col>
        <v-col cols="12" sm="6">
          <v-sheet min-height="70vh" rounded="lg">
            <kakao-map></kakao-map>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row style="display: none">
        <v-col cols="12" sm="12">
          <v-sheet min-height="70vh" rounded="lg">
            <board-detail></board-detail>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12">
          <v-sheet min-height="70vh" rounded="lg"> 따릉이 </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import BoardList from "@/components/BoardList";
import BoardDetail from "@/components/BoardDetail";
import kakaoMap from "@/components/kakaoMap";
export default {
  components: { BoardList, BoardDetail, kakaoMap },
  name: "HomeView",
  data() {
    return {
      sido: "",
      sidoList: [],
    };
  },
  created() {
    this.sidoList = ["서울특별시", "경기도"];
  },
};
</script>
<style scoped>
.select_section {
  display: flex;
}
.select {
  margin: 0px 100px;
}
</style>
