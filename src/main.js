import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "firebase";

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyBlRDm5Zqj9mKH6k7VZs--rNlisUrvuTm4",
  authDomain: "world-covid-conference.firebaseapp.com",
  databaseURL: "https://world-covid-conference.firebaseio.com",
  projectId: "world-covid-conference",
  storageBucket: "world-covid-conference.appspot.com",
  messagingSenderId: "169205149652",
  appId: "1:169205149652:web:5297f09fafd22a60ac3041",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const fireDatabase = firebase.database();
export const fireStorage = firebase.storage();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
