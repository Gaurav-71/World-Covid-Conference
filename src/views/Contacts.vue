<template>
  <div class="contact-us">
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
      <div class="contact">
        <div class="left">
          <img src="../assets/Contact/contact.svg" alt="contact" />
        </div>
        <div class="right">
          <h1>GET IN TOUCH</h1>
          <h4>Have any questions ? We'd love to hear from you.</h4>
          <div class="flex">
            <input type="text" placeholder="Enter Name" class="name" v-model="detail.name" />
            <input type="text" placeholder="Enter Email" class="email" v-model="detail.email" />
          </div>
          <transition
            name="custom-classes-transition"
            enter-active-class="animated bounceInRight"
            leave-active-class="animated bounceOutRight"
            appear
          >
            <textarea
              id="message"
              name="message"
              class="message"
              placeholder="Enter Message"
              v-if="!sendAway"
              v-model="detail.message"
            ></textarea>
          </transition>
          <div v-if="!sendAway" @click="fullSend" class="btn">Send Message</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Heading from "../components/Heading";
export default {
  components: {
    Heading
  },
  data() {
    return {
      headingObj: {
        h1: "Contact Us",
        h4: "Have any queries ? Feel free to contact us ",
        src: "questions.svg"
      },
      detail: {
        name: "",
        email: "",
        message: "",
        timestamp: ""
      },
      sendAway: false
    };
  },
  methods: {
    fullSend() {
      if (
        this.detail.name != "" ||
        this.detail.email != "" ||
        this.detail.message != ""
      ) {
        this.sendAway = true;
        this.detail.timestamp = Date(Date.now());
        this.$store
          .dispatch("sendMessage", this.detail)
          .then(() => {
            this.sendAway = false;
            this.detail.name = "";
            this.detail.email = "";
            this.detail.message = "";
            this.detail.timestamp = "";
          })
          .catch(resp => {
            console.log(resp);
          });
      } else {
        alert("Please fill all details !");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/colors";

.contact-us {
  min-height: 100vh;
  background-image: $background-1;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0.3rem 1rem;
  .contact {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    @include ipad-portrait {
      flex-wrap: wrap;
    }
    @include iphone {
      flex-wrap: wrap;
    }
    .left {
      flex-basis: 50%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      @include ipad-portrait {
        flex-basis: 100%;
      }
      img {
        width: 530px;
        height: 350px;
        @include ipad-portrait {
          width: 450px;
          height: 300px;
        }
        @include iphone {
          width: 350px;
          height: 120px;
        }
      }
    }
    .right {
      flex-basis: 50%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      @include ipad-portrait {
        flex-basis: 100%;
      }
      h1 {
        color: $primary;
        margin-bottom: 0;
        @include ipad-portrait {
          margin-top: 2.5rem;
        }
      }
      .flex {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        input {
          background: rgba($primary, 0.2);
          border: 1px solid grey;
          padding: 12px 15px;
          width: 50%;
          margin: 0 1rem 0 0;
          background-position-y: center;
          background-position-x: 0.5rem;
          background-size: 32.5px;
          background-repeat: no-repeat;
          text-indent: 35px;
          border-radius: 0.2rem;
        }
        .name {
          background-image: url("../assets/Register/Participant/name.svg");
        }
        .email {
          background-image: url("../assets/Register/Participant/email.svg");
        }
      }
      .message {
        width: calc(100% - 2.3rem);
        margin: 1rem 0;
        background: rgba($primary, 0.2);
        border: 1px solid grey;
        height: 10rem;
        border-radius: 0.2rem;
        padding: 0.8rem 0 0 1.2rem;
        vertical-align: top;
        word-break: break-all;
      }
      input::placeholder,
      textarea::placeholder {
        color: #333333;
        font-weight: bold;
      }
      .btn {
        width: calc(100% - 3rem);
        background: $primary;
        color: white;
        padding: 0.6rem 1.2rem;
        border-radius: 0.4rem;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s ease-in;
      }
      .btn:hover {
        background: darken($primary, 10%);
      }
      .btn:active {
        transform: scale(0.98);
      }
    }
  }
}
</style>