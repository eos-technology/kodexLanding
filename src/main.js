import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import { loadFonts } from "./plugins/webfontloader";
import VueApexCharts from "vue3-apexcharts";
import BootstrapVue3 from 'bootstrap-vue-3'
import Countdown from 'vue3-flip-countdown'
import 'bootstrap/dist/css/bootstrap.css'

import globalComponent from './plugins/global-components'

import Swal from 'sweetalert2'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import moment from 'moment';

import './assets/main.scss'
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';

import i18n from '@/plugins/i18n'


loadFonts();

const app = createApp(App);

app.config.globalProperties.mode = 'prod'

const prodApi = 'https://kdoex.elvwalletapi.com'
const devApi = 'http://127.0.0.1:3031'

app.config.globalProperties.apiUrl = app.config.globalProperties.mode == 'dev' ? devApi : prodApi

app.use(globalComponent)
app.use(VueSweetalert2);
app.use(BootstrapVue3)
app.use(Countdown )
app.use(VueTelInput)
app.use(router)
app.use(store)
app.use(VueApexCharts)
app.use(i18n)

app.mixin({
    data () {
      return {
        windowWidth: window.innerWidth
      }
    },
    methods: {
      coinFormat: function (x) {
        if(x != null && x >= 0) {
            x = x.toFixed(2)
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else {
            return 0
        }
      },
      formatDate: function (date) {
        if(date) {
          return moment(date).format('Y-MM-DD HH:mm')
        } else {
          return '-'
        }
      }
    },
    mounted() {
      window.onresize = () => {
        this.windowWidth = window.innerWidth
      }
    }
})

// let userLang = 'en'



app.use(i18n);
app.mount("#app");
import axios from 'axios'
axios.defaults.baseURL = app.config.globalProperties.apiUrl

const vuex = JSON.parse(localStorage.getItem('vuex'))
if (vuex) {
  if (vuex.auth) {
    if (vuex.auth.access_token) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + vuex.auth.access_token
    }
  }
}

window.openNotification = function (title = 'Action executed', text = 'Transaction executed successfully', variant = 'success') {
    
    Swal.fire({
        title: title,
        text:   text,
        icon: variant,
    });
}
