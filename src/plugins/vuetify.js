import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueI18n from 'vue-i18n';

Vue.use(Vuetify);
Vue.use(VueI18n)

const messages = {
    en: {
        $vuetify: {
        dataIterator: {
            login: 'Login',
            password: 'Password',
            language: 'Language',
            loginBtn: 'Login'
        },
        },
    },
    ru: {
        $vuetify: {
        dataIterator: {
            login: 'Логин',
            password: 'Пароль',
            language: 'Язык',
            loginBtn: 'Войти'
        },
        },
    },
}

export const i18n = new VueI18n({
    locale: 'en', // set locale
    messages, // set locale messages
})

export default new Vuetify({
    lang: {
    t: (key, ...params) => i18n.t(key, params),
  },
});
