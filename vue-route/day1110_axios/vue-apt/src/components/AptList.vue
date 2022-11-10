<template>
  <div>
    <h2>아파트 목록</h2>
    <input type="number" v-model="lawdCd" />
    <input type="number" v-model="dealYmd" />
    <button @click="getAptList">아파트목록얻기</button>
    <table>
      <colgroup>
        <col style="width: 10%" />
        <col style="width: 30%" />
        <col style="width: 20%" />
        <col style="width: 10%" />
        <col style="width: 30%" />
      </colgroup>
      <tr>
        <th>일련번호</th>
        <th>아파트명</th>
        <th>법정동</th>
        <th>층</th>
        <th>매매가격</th>
      </tr>
      <tbody>
        <apt-list-item
          v-for="(apt, index) in apts"
          :key="index"
          :apt="apt"
        ></apt-list-item>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import AptListItem from "@/components/AptListItem.vue";
export default {
  components: { AptListItem },
  name: "AptList",
  data() {
    return {
      lawdCd: "11110",
      dealYmd: "202207",
      apts: [],
    };
  },
  created() {
    //this.getAptList();
  },
  methods: {
    getAptList() {
      //   const serviceKey =
      //     "wcJesj1bOcVz%2F1pz9cIkSuAubEVGPRkFANKzOyLHeR40ShYhyDe0EqeIoiFujHAfVs6b6066h6z8OnLJ4viv4Q%3D%3D";
      //   const url = `http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev?serviceKey=${serviceKey}&pageNo=1&numOfRows=10&LAWD_CD=${this.lawdCd}&DEAL_YMD=${this.dealYmd}`;
      const url = `http://localhost:9999/vue/map/aptlist/${this.lawdCd}/${this.dealYmd}`;
      axios.get(url).then((response) => {
        //this.apts = response.data.response.body.items.item;
        console.log(response);
        //console.log(response.data.response.body.items.item);
      });
    },
  },
};
</script>

<style>
td {
  border-bottom: 1px solid red;
}
</style>