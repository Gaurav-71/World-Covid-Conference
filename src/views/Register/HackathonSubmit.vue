<template>
  <div v-if="!$store.state.isSavingForm"  class="register">
    <div class="card header">
      <img src="../../assets/Register/hackathon.svg" alt="participant" />
      <div class="title">
        <h1>Hackathon Submission</h1>
        <h4>Ready with your concept / idea ? Submit right away and stand a chance to present at the conference</h4>
      </div>
    </div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceInUp"
      leave-active-class="animated bounceOutUp"
      mode="out-in"
      appear
    >
      <div>
        <div class="card personal-information">
          <div class="heading">
            <h2>Verification</h2>
            <div class="line"></div>
          </div>
          <form>
            <div class="input no-margin">
              <label>Email</label>
              <input type="text" placeholder="Enter email" class="email" v-model="email" />
            </div>
            <div @click="verifyParticipant" class="custom-btn">Verify</div>
          </form>
          <p v-if="message != ''">{{message}}</p>
        </div>
        <transition
          name="custom-classes-transition"
          enter-active-class="animated bounceInLeft"
          leave-active-class="animated bounceOutRight"
          mode="out-in"
          appear
        >
          <div v-if="participantExists" class="card personal-information">
            <div class="heading">
              <h2>Submission</h2>
              <div class="line"></div>
            </div>
            <div class="input file-type">
              <label>Upload a PDF / Word file only</label>
              <input type="file" class="student-id" ref="hackFile" @change="onFilePicked" />
              <div @click="pickFile" class="btn my-btn shake">Upload File</div>
              <p
                class="upload-msg"
                v-if=" !hackFileName == ''"
              >Uploaded {{hackFileName}} succesfully !</p>
              <p class="upload-msg" v-else>No file uploaded</p>
            </div>
          </div>
        </transition>
      </div>
    </transition>
    <div v-if="participantExists" @click="validate" class="btn shake">Submit</div>
    <div>
      <transition name="fade" appear>
        <Error :obj="error" :emptyStr="true" />
      </transition>
    </div>
  </div>
  <div v-else class="register">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeIn"
      leave-active-class="animated bounceOutUp"
      mode="out-in"
      appear
    >
      <Loading :message="'Thank You For Registering With Us !'" />
    </transition>
  </div>
</template>

<script>
import Error from "../../components/Error.vue";
import Loading from "../../components/Circle.vue";

export default {
  components: {
    Error,
    Loading
  },
  name: "Participant",
  data() {
    return {
      countryStatus: null,
      hackFile: null,
      hackFileName: "",
      email: "",
      id: null,
      unsubscribe: null,
      participantExists: false,
      message: "",
      error: {
        isVisible: false,
        message: {
          code: "Missing-information",
          message: ""
        }
      }
    };
  },
  methods: {
    pickFile() {
      this.$refs.hackFile.click();
    },
    onFilePicked(event) {
      const files = event.target.files;
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {});
      fileReader.readAsDataURL(files[0]);
      this.hackFile = files[0];
      this.hackFileName = this.hackFile.name;
    },
    verifyParticipant() {
      this.message = "";
      this.participantExists = false;
      let hasUploaded = false;
      this.$store
        .dispatch("loadHackathonEmails", this.detail)
        .then(resp => {
          this.unsubscribe = resp;
          for (
            var i = 0;
            i < this.$store.getters.getHackathonEmails.length;
            i++
          ) {
            if (this.$store.getters.getHackathonEmails[i].email == this.email) {
              if (this.$store.getters.getHackathonEmails[i].file.length <= 2) {
                this.participantExists = true;
                this.id = this.$store.getters.getHackathonEmails[i].id;
              } else {
                hasUploaded = true;
              }
              break;
            }
          }
          if (!this.participantExists) {
            if (hasUploaded) {
              this.message =
                "You have already made a submision, multiple submissions aren't allowed !";
            } else {
              this.message =
                "This participant doesn't exist, please register to make a submission";
              this.participantExists = false;
            }
          }
        })
        .catch(resp => {
          console.log(resp);
        });
    },
    allFieldsFilled() {
      if (this.hackFileName == "") {
        return "Submission";
      }
      return "allFilled";
    },
    validate() {
      let validation = this.allFieldsFilled();
      //let validation = "allFilled";
      if (validation == "allFilled") {
        let payload = {
          hackFile: this.hackFile,
          id: this.id
        };
        this.$store.state.isSavingForm = true;
        this.$store
          .dispatch("updateHackathonFile", payload)
          .then(() => {
            this.$store.state.isSavingForm = false;
            this.$router.push("/");
            this.$store.state.navItem = 1;
          })
          .catch(resp => {
            console.log(resp);
          });
      } else {
        this.error.message.message = "Please fill the " + validation + " field";
        this.error.isVisible = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/register";
form {
  .custom-btn {
    margin-left: 3rem;
    background: $primary;
    padding: 0.7rem 2rem;
    color: white;
    border-radius: 0.2rem;
    margin-top: 1.3rem;
    cursor: pointer;
    transition: all 0.3s ease-in;
  }
  .custom-btn:hover {
    background: darken($primary, 10%);
  }
  .custom-btn:active {
    transform: scale(0.95);
  }
}
</style>