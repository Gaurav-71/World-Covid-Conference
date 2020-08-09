import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "firebase";

Vue.config.productionTip = false;

/*var firebaseConfig = {
  apiKey: "AIzaSyBlRDm5Zqj9mKH6k7VZs--rNlisUrvuTm4",
  authDomain: "world-covid-conference.firebaseapp.com",
  databaseURL: "https://world-covid-conference.firebaseio.com",
  projectId: "world-covid-conference",
  storageBucket: "world-covid-conference.appspot.com",
  messagingSenderId: "169205149652",
  appId: "1:169205149652:web:5297f09fafd22a60ac3041",
}; */

var firebaseConfig = {
  apiKey: "AIzaSyBnm0iNMR1Sg-kR1o73Shy1ihY4ToEL4IU",
  authDomain: "world-covid-conference-79354.firebaseapp.com",
  databaseURL: "https://world-covid-conference-79354.firebaseio.com",
  projectId: "world-covid-conference-79354",
  storageBucket: "world-covid-conference-79354.appspot.com",
  messagingSenderId: "493696194250",
  appId: "1:493696194250:web:adfe84b25fc371186d8633",
  measurementId: "G-GJEV8WZJCS",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore();
export const fireDatabase = firebase.database();
export const fireStorage = firebase.storage();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
