
import { createI18n } from 'vue-i18n';
import messages from '@/locales/index';
import axios from 'axios';

// var userLang = navigator.language || navigator.userLanguage;
let userLang = 'en'

const vuex = JSON.parse(localStorage.getItem('vuex'));
if (vuex) {
  if (vuex.auth) {
    if (vuex.auth.lang) {
      userLang = vuex.auth.lang
    }
  }
}

axios.defaults.headers.common['Accept-Language'] = userLang;

const i18n = createI18n({
  locale: userLang,
  messages,
});

export default i18n