<template>
  <tr>
    <td>{{ apt.일련번호 }}</td>
    <td>{{ apt.아파트 }}</td>
    <td>{{ apt.법정동 }}</td>
    <td>{{ apt.층 }}층</td>
    <td>{{ apt.거래금액 }}만원</td>
  </tr>
</template>

<script>
export default {
  name: "AptListItem",
  props: {
    apt: Object,
  },
};
</script>
// scoped = 안에서만 쓸 수 있는 style
<style scoped>
td {
  font-weight: bold;
  border-bottom: 2px solid black;
}
</style>