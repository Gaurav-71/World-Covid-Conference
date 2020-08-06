import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import Register from "../views/Register/Register.vue";
import RegisterParticipant from "../views/Register/Participant.vue";
import RegisterSpeaker from "../views/Register/Speaker.vue";
import RegisterSponsor from "../views/Register/Sponsor.vue";
import RegisterWorkshop from "../views/Register/Workshop.vue";
import RegisterAbstract from "../views/Register/Abstract.vue";
import Payment from "../views/Register/Payment.vue";
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
    path: "/register/conference/participant",
    name: "Participant",
    component: RegisterParticipant
  },  
  {
    path: "/register/participant/abstract",
    name: "Abstract",
    component: RegisterAbstract
  },  
  {
    path: "/register/speaker",
    name: "Speaker",
    component: RegisterSpeaker
  },  
  {
    path: "/register/sponsor",
    name: "Sponsor",
    component: RegisterSponsor
  }, 
  {
    path: "/register/workshop",
    name: "Workshop",
    component: RegisterWorkshop
  }, 
  {
    path: "/register/payment",
    name: "Payment",
    component: Payment,
    props: true
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
  routes,
  scrollBehavior(to, from, savedPosition) {
    var ignore;
    ignore = to;
    ignore = from;
    ignore = savedPosition;
    ignore = null;
    console.log("Page has been routed",ignore)
    return { x: 0, y: 0 };
  },
});

export default router;
