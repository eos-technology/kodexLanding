import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { loadFonts } from "./plugins/webfontloader";
import VueApexCharts from "vue3-apexcharts";
import BootstrapVue3 from 'bootstrap-vue-3'
import Countdown from 'vue3-flip-countdown'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/main.scss'
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';

loadFonts();

createApp(App).use(BootstrapVue3).use(Countdown ).use(router).use(VueTelInput).use(store).use(VueApexCharts).mount("#app");
