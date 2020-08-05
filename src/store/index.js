import Vue from "vue";
import Vuex from "vuex";
import { db } from "../main.js";
import { fireStorage } from "../main.js";
import { fireDatabase } from "../main.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navItem: 1,
  },
  mutations: {},
  actions: {
    async saveParticipantDetails(context, payload) {
      console.log(context);
      try {
        if (payload.images.studentImage) {
          await fireDatabase
            .ref("studentimages")
            .push(payload.images.studentImage)
            .then((data) => {
              let key = data.key;
              return key;
            })
            .then((key) => {
              const filename = payload.images.studentImage.name;
              const ext = filename.slice(filename.lastIndexOf("."));
              return fireStorage
                .ref("studentimages/" + key + "." + ext)
                .put(payload.images.studentImage);
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
          .ref("transactionimages")
          .push(payload.images.transactionImage)
          .then((data) => {
            let key = data.key;
            return key;
          })
          .then((key) => {
            const filename = payload.images.transactionImage.name;
            const ext = filename.slice(filename.lastIndexOf("."));
            return fireStorage
              .ref("transactionimages/" + key + "." + ext)
              .put(payload.images.transactionImage);
          })
          .then(async (filedata) => {
            let imageUrl = null;
            await filedata.ref.getDownloadURL().then((url) => {
              imageUrl = url;
            });
            payload.detail.transactionProof = imageUrl;
          });
        await db.collection("Participants").add(payload.detail);
      } catch (exc) {
        console.log(exc);
      }
    },
    async saveSpeakerRegistrationDetails(context, payload) {
      console.log(context);
      try {
        if (payload.abstractFile) {
          await fireDatabase
            .ref("speakerabstracts")
            .push(payload.abstractFile)
            .then((data) => {
              let key = data.key;
              return key;
            })
            .then((key) => {
              const filename = payload.abstractFile.name;
              const ext = filename.slice(filename.lastIndexOf("."));
              return fireStorage
                .ref("speakerabstracts/" + key + "." + ext)
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
      } catch (exc) {
        console.log(exc);
      }
    },
  },
  modules: {},
});
