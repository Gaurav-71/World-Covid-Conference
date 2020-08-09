import Vue from "vue";
import Vuex from "vuex";
import { auth } from "../main.js";
import { db } from "../main.js";
import { fireStorage } from "../main.js";
import { fireDatabase } from "../main.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navItem: 1,
    isSavingForm: false,
    isLoggedIn: false,
    isLoggingIn: true,
    participants: [],
    abstracts: [],
    workshop: [],
    speakers: [],
    sponsors: [],
    activity: [],
  },
  mutations: {
    logIn: (state) => {
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
    },
    loadParticipants: (state, obj) => {
      state.participants = obj;
    },
    loadAbstracts: (state, obj) => {
      state.abstracts = obj;
    },
    loadWorkshop: (state, obj) => {
      state.workshop = obj;
    },
    loadSpeakers: (state, obj) => {
      state.speakers = obj;
    },
    loadSponsors: (state, obj) => {
      state.sponsors = obj;
    },
    loadActivity: (state, obj) => {
      state.activity = obj;
    },
  },
  actions: {
    async logIn({ commit }, payload) {
      this.state.isLoggingIn = false;
      try {
        let response = await auth.signInWithEmailAndPassword(
          payload.email,
          payload.password
        );
        commit("logIn", response.user);
      } catch (err) {
        this.state.isLoggingIn = true;
        throw err;
      }
    },
    async logOut(context) {
      await auth.signOut();
      this.state.isLoggingIn = true;
      context.commit("logOut");
    },
    async saveParticipantDetails(context, payload) {
      console.log(context);
      try {
        if (payload.generatedFiles.studentImage) {
          await fireDatabase
            .ref("studentIdProofConference")
            .push(payload.generatedFiles.studentImage)
            .then((data) => {
              let key = data.key;
              return key;
            })
            .then((key) => {
              const filename = payload.generatedFiles.studentImage.name;
              const ext = filename.slice(filename.lastIndexOf("."));
              return fireStorage
                .ref("studentIdProofConference/" + key + "." + ext)
                .put(payload.generatedFiles.studentImage);
            })
            .then(async (filedata) => {
              let imageUrl = null;
              await filedata.ref.getDownloadURL().then((url) => {
                imageUrl = url;
              });
              payload.detail.studentIdProof = imageUrl;
            });
        }
        await fireDatabase
          .ref("participantTransactionProofConference")
          .push(payload.generatedFiles.transactionImage)
          .then((data) => {
            let key = data.key;
            return key;
          })
          .then((key) => {
            const filename = payload.generatedFiles.transactionImage.name;
            const ext = filename.slice(filename.lastIndexOf("."));
            return fireStorage
              .ref("participantTransactionProofConference/" + key + "." + ext)
              .put(payload.generatedFiles.transactionImage);
          })
          .then(async (filedata) => {
            let imageUrl = null;
            await filedata.ref.getDownloadURL().then((url) => {
              imageUrl = url;
            });
            payload.detail.transactionProof = imageUrl;
          });
        await db.collection("ParticipantRegistration").add(payload.detail);
        let d = Date(Date.now());
        let activityData = {
          name: payload.detail.name,
          email: payload.detail.email,
          phno: payload.detail.phno,
          type: "Conference",
          time: d.toString().slice(4, 25),
          timestamp: d,
          finalAmount: payload.detail.finalAmount,
          paymentMode: payload.detail.paymentMode,
        };
        await db.collection("Activity").add(activityData);
      } catch (exc) {
        console.log(exc);
      }
    },
    async saveSpeakerRegistrationDetails(context, payload) {
      console.log(context);
      try {
        if (payload.abstractFile) {
          await fireDatabase
            .ref("speakerAbstracts")
            .push(payload.abstractFile)
            .then((data) => {
              let key = data.key;
              return key;
            })
            .then((key) => {
              const filename = payload.abstractFile.name;
              const ext = filename.slice(filename.lastIndexOf("."));
              return fireStorage
                .ref("speakerAbstracts/" + key + "." + ext)
                .put(payload.abstractFile);
            })
            .then(async (filedata) => {
              let imageUrl = null;
              await filedata.ref.getDownloadURL().then((url) => {
                imageUrl = url;
              });
              payload.detail.abstractFile = imageUrl;
            });
        }
        await db.collection("SpeakerRegistration").add(payload.detail);
        let d = Date(Date.now());
        let activityData = {
          name: payload.detail.name,
          email: payload.detail.email,
          phno: payload.detail.phno,
          type: "Speaker",
          time: d.toString().slice(4, 25),
          timestamp: d,
        };
        await db.collection("Activity").add(activityData);
      } catch (exc) {
        console.log(exc);
      }
    },
    async saveSponsorDetails(context, payload) {
      console.log(context);
      try {
        if (payload.generatedFiles.id) {
          await fireDatabase
            .ref("sponsorIdProof")
            .push(payload.generatedFiles.id)
            .then((data) => {
              let key = data.key;
              return key;
            })
            .then((key) => {
              const filename = payload.generatedFiles.id.name;
              const ext = filename.slice(filename.lastIndexOf("."));
              return fireStorage
                .ref("sponsorIdProof/" + key + "." + ext)
                .put(payload.generatedFiles.id);
            })
            .then(async (filedata) => {
              let imageUrl = null;
              await filedata.ref.getDownloadURL().then((url) => {
                imageUrl = url;
              });
              payload.detail.sponsorIdProof = imageUrl;
            });
        }
        await fireDatabase
          .ref("sponsorTransactionProof")
          .push(payload.generatedFiles.transactionImage)
          .then((data) => {
            let key = data.key;
            return key;
          })
          .then((key) => {
            const filename = payload.generatedFiles.transactionImage.name;
            const ext = filename.slice(filename.lastIndexOf("."));
            return fireStorage
              .ref("sponsorTransactionProof/" + key + "." + ext)
              .put(payload.generatedFiles.transactionImage);
          })
          .then(async (filedata) => {
            let imageUrl = null;
            await filedata.ref.getDownloadURL().then((url) => {
              imageUrl = url;
            });
            payload.detail.transactionProof = imageUrl;
          });
        await db.collection("SponsorRegistration").add(payload.detail);
        let d = Date(Date.now());
        let activityData = {
          name: payload.detail.name,
          email: payload.detail.email,
          phno: payload.detail.phno,
          type: "Sponsor",
          time: d.toString().slice(4, 25),
          timestamp: d,
          finalAmount: payload.detail.fee,
          paymentMode: payload.detail.paymentMode,
        };
        await db.collection("Activity").add(activityData);
      } catch (exc) {
        console.log(exc);
      }
    },
    async saveWorkshopDetails(context, payload) {
      console.log(context);
      try {
        if (payload.generatedFiles.studentImage) {
          await fireDatabase
            .ref("studentIdProofWorkshop")
            .push(payload.generatedFiles.studentImage)
            .then((data) => {
              let key = data.key;
              return key;
            })
            .then((key) => {
              const filename = payload.generatedFiles.studentImage.name;
              const ext = filename.slice(filename.lastIndexOf("."));
              return fireStorage
                .ref("studentIdProofWorkshop/" + key + "." + ext)
                .put(payload.generatedFiles.studentImage);
            })
            .then(async (filedata) => {
              let imageUrl = null;
              await filedata.ref.getDownloadURL().then((url) => {
                imageUrl = url;
              });
              payload.detail.studentIdProof = imageUrl;
            });
        }
        await fireDatabase
          .ref("participantTransactionProofWorkshop")
          .push(payload.generatedFiles.transactionImage)
          .then((data) => {
            let key = data.key;
            return key;
          })
          .then((key) => {
            const filename = payload.generatedFiles.transactionImage.name;
            const ext = filename.slice(filename.lastIndexOf("."));
            return fireStorage
              .ref("participantTransactionProofWorkshop/" + key + "." + ext)
              .put(payload.generatedFiles.transactionImage);
          })
          .then(async (filedata) => {
            let imageUrl = null;
            await filedata.ref.getDownloadURL().then((url) => {
              imageUrl = url;
            });
            payload.detail.transactionProof = imageUrl;
          });
        await db.collection("WorkshopRegistration").add(payload.detail);
        let d = Date(Date.now());
        let activityData = {
          name: payload.detail.name,
          email: payload.detail.email,
          phno: payload.detail.phno,
          type: "Workshop",
          time: d.toString().slice(4, 25),
          timestamp: d,
          finalAmount: payload.detail.finalAmount,
          paymentMode: payload.detail.paymentMode,
        };
        await db.collection("Activity").add(activityData);
      } catch (exc) {
        console.log(exc);
      }
    },
    async saveAbstractRegistrationDetails(context, payload) {
      console.log(context);
      try {
        if (payload.abstractFile) {
          await fireDatabase
            .ref("participantAbstracts")
            .push(payload.abstractFile)
            .then((data) => {
              let key = data.key;
              return key;
            })
            .then((key) => {
              const filename = payload.abstractFile.name;
              const ext = filename.slice(filename.lastIndexOf("."));
              return fireStorage
                .ref("participantAbstracts/" + key + "." + ext)
                .put(payload.abstractFile);
            })
            .then(async (filedata) => {
              let imageUrl = null;
              await filedata.ref.getDownloadURL().then((url) => {
                imageUrl = url;
              });
              payload.detail.abstractFile = imageUrl;
            });
        }
        await db.collection("AbstractRegistration").add(payload.detail);
        let d = Date(Date.now());
        let activityData = {
          name: payload.detail.name,
          email: payload.detail.email,
          phno: payload.detail.phno,
          type: "Abstract",
          time: d.toString().slice(4, 25),
          timestamp: d,
        };
        await db.collection("Activity").add(activityData);
      } catch (exc) {
        console.log(exc);
      }
    },
    async loadParticipants(context) {
      let response = db
        .collection("ParticipantRegistration")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          let items = [];
          snapshot.forEach((doc) => {
            let data = {
              id: doc.id,
              detail: doc.data(),
            };
            items.push(data);
          });
          context.commit("loadParticipants", items);
        });
      return response;
    },
    async loadAbstracts(context) {
      let response = db
        .collection("AbstractRegistration")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          let items = [];
          snapshot.forEach((doc) => {
            let data = {
              id: doc.id,
              detail: doc.data(),
            };
            items.push(data);
          });
          context.commit("loadAbstracts", items);
        });
      return response;
    },
    async loadWorkshop(context) {
      let response = db
        .collection("WorkshopRegistration")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          let items = [];
          snapshot.forEach((doc) => {
            let data = {
              id: doc.id,
              detail: doc.data(),
            };
            items.push(data);
          });
          context.commit("loadWorkshop", items);
        });
      return response;
    },
    async loadSpeakers(context) {
      let response = db
        .collection("SpeakerRegistration")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          let items = [];
          snapshot.forEach((doc) => {
            let data = {
              id: doc.id,
              detail: doc.data(),
            };
            items.push(data);
          });
          context.commit("loadSpeakers", items);
        });
      return response;
    },
    async loadSponsors(context) {
      let response = db
        .collection("SponsorRegistration")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          let items = [];
          snapshot.forEach((doc) => {
            let data = {
              id: doc.id,
              detail: doc.data(),
            };
            items.push(data);
          });
          context.commit("loadSponsors", items);
        });
      return response;
    },
    async loadActivity(context) {
      let response = db
        .collection("Activity")
        .orderBy("timestamp", "desc")        
        .onSnapshot((snapshot) => {
          let items = [];
          snapshot.forEach((doc) => {
            let data = {
              id: doc.id,
              detail: doc.data(),
            };
            items.push(data);
          });
          context.commit("loadActivity", items);
        });
      return response;
    },
  },
  getters: {
    getParticipants: (store) => {
      return store.participants;
    },
    getAbstracts: (store) => {
      return store.abstracts;
    },
    getWorkshop: (store) => {
      return store.workshop;
    },
    getSpeakers: (store) => {
      return store.speakers;
    },
    getSponsors: (store) => {
      return store.sponsors;
    },
    getActivity: (store) => {
      return store.activity;
    },
  },
  modules: {},
});
