import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index.js";
import About from "../views/Landing.vue";
import Register from "../views/Register/Register.vue";
import RegisterParticipant from "../views/Register/Participant.vue";
import RegisterSpeaker from "../views/Register/Speaker.vue";
import RegisterSponsor from "../views/Register/Sponsor.vue";
import RegisterWorkshop from "../views/Register/Workshop.vue";
import RegisterAbstract from "../views/Register/Abstract.vue";
import RegisterHackathon from "../views/Register/Hackathon.vue";
import HackathonSubmit from "../views/Register/HackathonSubmit.vue";
import Hackathon from "../views/Hackathon.vue";
import AboutWorkshop from "../views/Workshop.vue";
import Payment from "../views/Register/Payment.vue";
import SuccessfulRegistration from "../views/Register/SuccessfulRegistration.vue";
import Contacts from "../views/Contacts.vue";
import Organizers from "../views/Organizers.vue";
import Speakers from "../views/Speakers.vue";
import Schedule from "../views/Highlights.vue";
import Login from "../views/Admin/Login.vue";
import Home from "../views/Admin/Home.vue";
import Activity from "../views/Admin/Activity.vue";
import Queries from "../views/Admin/Queries.vue";
import AdminHackathon from "../views/Admin/Hackathon.vue";
import Discounts from "../views/Admin/Discounts.vue";
import Registrations from "../views/Admin/Registrations.vue";
import Abstract from "../views/Admin/Registrations/Abstract.vue";
import Conference from "../views/Admin/Registrations/Conference.vue";
import RegistrationSpeakers from "../views/Admin/Registrations/Speakers.vue";
import Sponsor from "../views/Admin/Registrations/Sponsors.vue";
import Workshop from "../views/Admin/Registrations/Workshop.vue";
import Pricing from "../views/Pricing.vue";
import RecordingLogin from "../views/RecordingLogin.vue";
import Research from "../views/Research.vue";
import Zubz from "../views/Zubz.vue";
import Recordings from "../views/Recordings.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "About",
    component: About,
  },
  {
    path: "/dr-gustavo-zubieta",
    name: "Zubz",
    component: Zubz,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/admin/home",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "/",
        name: "Activity",
        component: Activity,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/admin/registrations",
        name: "Registrations",
        component: Registrations,
        meta: {
          requiresAuth: true,
        },
        children: [
          {
            path: "/",
            name: "Conference",
            component: Conference,
            meta: {
              requiresAuth: true,
            },
          },
          {
            path: "/admin/registrations/abstract",
            name: "Abstract",
            component: Abstract,
            meta: {
              requiresAuth: true,
            },
          },
          {
            path: "/admin/registrations/workshop",
            name: "Workshop",
            component: Workshop,
            meta: {
              requiresAuth: true,
            },
          },
          {
            path: "/admin/registrations/speakers",
            name: "Speakers",
            component: RegistrationSpeakers,
            meta: {
              requiresAuth: true,
            },
          },
          {
            path: "/admin/registrations/sponsors",
            name: "Sponsor",
            component: Sponsor,
            meta: {
              requiresAuth: true,
            },
          },
          {
            path: "/admin/registrations/hackathon",
            name: "AdminHackathon",
            component: AdminHackathon,
            meta: {
              requiresAuth: true,
            },
          },
        ],
      },
      {
        path: "/admin/discounts",
        name: "Discounts",
        component: Discounts,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/admin/queries",
        name: "Queries",
        component: Queries,
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
  {
    path: "/registration",
    name: "Register",
    component: Register,
  },
  {
    path: "/Pricing",
    name: "Pricing",
    component: Pricing,
  },
  {
    path: "/successfulregistration",
    name: "SuccessfulRegistration",
    component: SuccessfulRegistration,
    props: true,
  },
  {
    path: "/highlights",
    name: "Schedule",
    component: Schedule,
  },
  {
    path: "/workshop",
    name: "AboutWorkshop",
    component: AboutWorkshop,
  },
  {
    path: "/register/conference/participant",
    name: "Participant",
    component: RegisterParticipant,
  },
  {
    path: "/register/participant/abstract",
    name: "Abstract",
    component: RegisterAbstract,
  },
  {
    path: "/register/speaker",
    name: "Speaker",
    component: RegisterSpeaker,
  },
  {
    path: "/register/sponsor",
    name: "Sponsor",
    component: RegisterSponsor,
  },
  {
    path: "/register/workshop",
    name: "Workshop",
    component: RegisterWorkshop,
  },
  {
    path: "/register/hackathon",
    name: "Hackathon",
    component: RegisterHackathon,
  },
  {
    path: "/hackathon/about",
    name: "AboutHackathon",
    component: Hackathon,
  },
  {
    path: "/hackathon/submit",
    name: "HackathonSubmit",
    component: HackathonSubmit,
  },
  {
    path: "/register/payment",
    name: "Payment",
    component: Payment,
    props: true,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
  },
  {
    path: "/organizers",
    name: "Organizers",
    component: Organizers,
  },
  {
    path: "/speakers",
    name: "Speakers",
    component: Speakers,
  },
  {
    path: "/recordings/login",
    name: "RecordingLogin",
    component: RecordingLogin,
  },
  {
    path: "/recordings",
    name: "Recordings",
    component: Recordings,
  },
  {
    path: "/research-papers",
    name: "Research",
    component: Research,
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
    console.log("Page has been routed", ignore);
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  const loggedIn = store.state.isLoggedIn;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (!loggedIn && requiresAuth) {
    next("/login");
  } else {
    next();
  }
});

export default router;
