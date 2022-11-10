import Vue from "vue";
import App from "./App.vue";
import HeaderNav from "./components/HeaderNav";
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  components: { HeaderNav },
}).$mount("#app");
