<template>
  <div class="register">
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
            <div class="input">
              <label>Email</label>
              <input type="text" placeholder="Enter email" class="email" v-model="detail.email" />
            </div>
          </form>
        </div>
        <transition
          name="custom-classes-transition"
          enter-active-class="animated bounceInLeft"
          leave-active-class="animated bounceOutRight"
          mode="out-in"
          appear
        ></transition>
      </div>
    </transition>
    <div @click="validate" class="btn shake">Register</div>
    <div>
      <transition name="fade" appear>
        <Error :obj="error" :emptyStr="true" />
      </transition>
    </div>
  </div>
</template>

<script>
import Error from "../../components/Error.vue";

export default {
  components: {
    Error
  },
  name: "Participant",
  data() {
    return {
      countryStatus: null,
      detail: {
        //personal info
        name: "",
        phno: "",
        email: "",
        gender: "",
        profession: null,
        //postal addr
        country: "",
        //academic details
        universityName: "",
        stream: "",
        studentIdProof: "", // have to model, file type
        //feedback
        feedback: null,
        //promo code
        promoCode: Number
      },
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
    allFieldsFilled() {
      if (this.detail.name == "") {
        return "Name";
      } else if (this.detail.phno == "") {
        return "Phone Number";
      } else if (this.detail.email == "") {
        return "Email";
      } else if (this.detail.gender == "") {
        return "Gender";
      } else if (this.detail.profession == null) {
        return "Profession";
      } else if (this.detail.country == "") {
        return "Country - Postal Address";
      } else if (this.detail.profession == "s") {
        if (this.detail.universityName == "") {
          return "University Name";
        } else if (this.detail.stream == "") {
          return "Stream";
        } else if (this.idImgName == "") {
          return "Student ID Proof";
        }
      } else if (this.detail.profession == "o") {
        if (this.detail.qualification == null) {
          return "Qualification";
        }
      } else if (this.detail.feedback == null) {
        return "Survey";
      }
      return "allFilled";
    },
    validate() {
      let validation = this.allFieldsFilled();
      //let validation = "allFilled";
      if (validation == "allFilled") {
        this.detail.promoCode = this.detail.name + Date.now();
        this.detail.promoCode = this.detail.promoCode.split(" ").join("");
        console.log(this.detail.promoCode);
        this.$store
          .dispatch("saveHackathonRegistrationDetails", this.detail)
          .then(() => {
            this.$router.push({
              name: "SuccessfulRegistration",
              params: {
                type: "Hackathon",
                detail: this.detail
              }
            });
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
</style>