import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import vueApp from './app.vue'

window.Vue = Vue;
window.$http = axios.create({
    baseURL: 'http://localhost:3000',
});


Vue.use(VueRouter);

new Vue({
    el: '#app',
    render: function (createElement) {
        return createElement(vueApp)
    }
});
