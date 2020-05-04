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
        languageSelect: {
            en: 'English',
            ru: 'Russian',
            az: 'Azerbaijan'
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
        languageSelect: {
            en: 'Английский',
            ru: 'Русский',
            az: 'Азербайджанский'
        },
        },
    },
    az: {
        $vuetify: {
        dataIterator: {
            login: 'İstifadəçi adı',
            password: 'Şifrə',
            language: 'Dil',
            loginBtn: 'Daxil ol'
        },
        languageSelect: {
            en: 'İngilis',
            ru: 'Rus',
            az: 'Azərbaycan'
        },
        },
    },
}

export const i18n = new VueI18n({
    locale: 'ru', // set locale
    messages, // set locale messages
})

export default new Vuetify({
    lang: {
    t: (key, ...params) => i18n.t(key, params),
  },
});
