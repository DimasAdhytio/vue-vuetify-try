import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import "vue-lazy-youtube-video/dist/style.simplified.css";
import firebase from 'firebase/app';
import axios from 'axios';

Vue.config.productionTip = false

Vue.prototype.$axios = axios

var firebaseConfig = {
  apiKey: "AIzaSyBfDpxinBTTkP4P4QnXlYZPDuV41JOWqLk",
  authDomain: "vuetify-try-f192e.firebaseapp.com",
  databaseURL: "https://vuetify-try-f192e.firebaseio.com",
  projectId: "vuetify-try-f192e",
  storageBucket: "vuetify-try-f192e.appspot.com",
  messagingSenderId: "1057842545465",
  appId: "1:1057842545465:web:5c3af6903cbad5b7dc9ee8",
  measurementId: "G-R9B7LYCHCK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app

firebase.auth().onAuthStateChanged(user => {
  if(!app) {
    app = new Vue({
            router,
            store,
            vuetify,
            render: h => h(App)
          }).$mount('#app')
  }

  if(user) {
    store.dispatch('fetchUserData', user)
    store.dispatch('library',user.uid)
  }

})
store.dispatch('allItems')

