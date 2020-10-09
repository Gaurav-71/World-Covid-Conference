<template>
  <div class="login-container">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceInUp"
      leave-active-class="animated bounceOutUp"
      appear
    >
      <div class="login">
        <img src="../assets/Login/admin.svg" alt="admin" />
        <h2>Login</h2>
        <div class="email">
          <span>Please login to view the recorded sessions</span>
        </div>
        <input
          v-if="$store.state.isLoggingIn"
          type="email"
          placeholder="Enter Registered email"
          v-model="email"
        />
        <div v-if="$store.state.isLoggingIn" @click="logIn" class="btn">
          Log In
        </div>
        <Loading
          :heading="''"
          :message="'Logging In'"
          v-if="!$store.state.isLoggingIn"
          style="margin-top: 2.5rem;"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import Loading from "../components/Circle";
export default {
  name: "Login",
  components: {
    Loading
  },
  data() {
    return {
      email: "",

      error: {
        isVisible: false,
        message: ""
      }
    };
  },
  methods: {
    logIn() {
      if (
        this.$store.getters.getRecordingsUsers.find(user => user == this.email)
      ) {
        this.$store.state.validUser = true;
        this.$router.push("/recordings");
      } else {
        this.$router.push("/register/conference/participant");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/colors";
.login-container {
  min-height: calc(100vh - 4.5rem);
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: $background-1;
  .login {
    width: 30vw;
    color: black;
    border-radius: 0.8rem;
    background: white;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    display: flex;
    flex-direction: column;
    align-items: center;
    @include ipad {
      width: 45vw;
    }
    @include ipad-portrait {
      width: 70vw;
    }
    @include iphone {
      width: 85vw;
    }
    img {
      width: 100px;
      height: 100px;
      margin: 3rem 0 0 0;
      @include iphone {
        width: 70px;
        height: 70px;
      }
    }
    h2 {
      color: $primary;
    }
    .email {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-image: $gradient;
      color: white;
      padding: 1rem 0;
      text-align: center;
    }
    input {
      background: #eee;
      border: 1px solid grey;
      padding: 15px 15px;
      margin: 2.5rem 0;
      background-position-y: center;
      background-position-x: 0.5rem;
      background-size: 30px;
      background-repeat: no-repeat;
      text-indent: 35px;
      width: 70%;
      background-image: url("../assets/Register/Participant/email.svg");
    }
    input::placeholder {
      color: #333333;
      font-weight: bold;
    }
    .btn {
      text-align: center;
      width: 6rem;
      margin: 0 1.2rem 3rem 0.5rem;
      padding: 0.8rem 2rem;
      border-radius: 0.6rem;
      background: #7d62a9;
      background-image: $gradient;
      box-shadow: 10px 10px 20px rgba(grey, 0.5);
      color: white;
      transition: background 0.3s ease-in;
      cursor: pointer;
    }
    .btn:hover {
      background: darken(#7d62a9, 12%);
    }
    .btn:active {
      transform: scale(0.95);
    }
  }
}
</style>