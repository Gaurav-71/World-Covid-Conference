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
      } catch (exc) {
        console.log(exc);
      }
    },
  },
  modules: {},
});
