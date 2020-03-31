import Vue from 'vue';
import App from './App.vue'



// const vm = new Vue({
//     el: '#root',
//     template: '<App/>'
// })

const root = new Vue({
  render: createElement => createElement(App)
}).$mount("#root");


if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
};