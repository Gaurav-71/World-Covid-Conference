import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import Register from "../views/Register/Register.vue";
import RegisterParticipant from "../views/Register/Participant.vue";
import RegisterSpeaker from "../views/Register/Speaker.vue";
import Contacts from "../views/Contacts.vue";
import Organizers from "../views/Organizers.vue";
import Speakers from "../views/Speakers.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "About",
    component: About
  },  
  {
    path: "/registration",
    name: "Register",
    component: Register
  },  
  {
    path: "/register/participant",
    name: "Participant",
    component: RegisterParticipant
  },  
  {
    path: "/register/speaker",
    name: "Speaker",
    component: RegisterSpeaker
  },  
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts
  },  
  {
    path: "/organizers",
    name: "Organizers",
    component: Organizers
  },  
  {
    path: "/speakers",
    name: "Speakers",
    component: Speakers
  },  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
