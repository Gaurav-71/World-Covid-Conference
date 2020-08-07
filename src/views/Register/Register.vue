<template>
  <div class="register">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutRight"
      appear
    >
      <Heading :obj="headingObj" />
    </transition>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceInUp"
      leave-active-class="animated bounceOutUp"
      appear
    >
      <div class="card-container">
        <div class="card grow">
          <div class="body">
            <img src="../../assets/Register/target.svg" alt="participants" />
            <h2>Conference</h2>
            <h4>Interested to understand COVID-19 better ?</h4>
          </div>
          <div @click="route(1)" class="action">Register as a participant</div>
        </div>
        <div class="card grow">
          <div class="body">
            <img src="../../assets/Register/abstract.svg" alt="speaker" class="speaker" />
            <h2>Abstract</h2>
            <h4>Submit and Stand a chance to win an award !</h4>
          </div>
          <div @click="route(5)" class="action">Submit Abstract</div>
        </div>
        <div class="card grow">
          <div class="body">
            <img src="../../assets/Register/workshop.svg" alt="speaker" />
            <h2>Workshop</h2>
            <h4>Attend an information packed workshop post conference!</h4>
          </div>
          <div @click="route(3)" class="action">Register for Workshop</div>
        </div>
        <div class="card grow">
          <div class="body">
            <img src="../../assets/Register/presentation.svg" alt="speaker" />
            <h2>Speaker</h2>
            <h4>Submit your abstracts and join us !</h4>
          </div>
          <div @click="route(2)" class="action">Register as a speaker</div>
        </div>        
        <div class="card grow">
          <div class="body">
            <img src="../../assets/Register/sponsor.svg" alt="speaker" class="speaker" />
            <h2>Sponsorship</h2>
            <h4>Interested in supporting us monetarily ?</h4>
          </div>
          <div @click="route(4)" class="action">Sponsor Us</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Heading from "../../components/Heading";

export default {
  name: "Register",
  components: {
    Heading,
  },
  data() {
    return {
      headingObj: {
        h1: "Registration",
        h4:
          "Be a part of the 2nd World Conference on Advances in COVID-19 jointly organized by Bengaluru Genomics Center & High Altitude Pulmonary and Pathology Institute (HAPPI-IPPA)",
        src: "register.svg"
      }
    };
  },
  methods: {
    route(page) {
      switch (page) {
        case 1:
          this.$router.push("/register/conference/participant");
          break;
        case 2:
          this.$router.push("/register/speaker");
          break;
        case 3:
          this.$router.push("/register/workshop");
          break;
        case 4:
          this.$router.push("/register/sponsor");
          break;
        case 5:
          this.$router.push("/register/participant/abstract");
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/colors";
.register {
  min-height: 100vh;
  background-image: $background-1;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0.5rem 1rem;
  @include iphone {
    padding: 0.5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .card-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    @include iphone {
      margin-top: 1rem;
    }
    .card {
      width: 18rem;
      height: 22.5rem;
      margin: 1.5rem 2rem;
      border-radius: 0.8rem;
      background: white;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
      display: grid;
      grid-template-rows: 85% 15%;
      overflow: hidden;
      .body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        h2,
        h4 {
          margin: 0;
          font-weight: lighter;
        }
        h2 {
          color: $primary;
          margin: 1rem 0;
        }
        h4 {
          padding: 0 1rem;
        }
        img {
          width: 150px;
          height: 150px;
        }
      }
      .action {
        width: 18rem;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: $gradient;
        color: white;
        cursor: pointer;
      }
      @include iphone {
        margin: 1rem 0;
      }
    }
  }
}
</style>

