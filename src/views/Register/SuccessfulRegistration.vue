<template>
  <div class="success">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceInUp"
      leave-active-class="animated bounceOutUp"
      appear
    >
      <div class="card hackathon">
        <div class="left">
          <img src="../../assets/Heading/hackathon.svg" alt="logo" />
          <h1>Hackathon</h1>
        </div>
        <div class="line"></div>
        <div class="right">
          <h1>Admit One - {{detail.name}}</h1>
          <h4>Top 3 Winners will get a chance to present their idea in the conference</h4>
          <ul>
            <li>Screening Of Hackathon on 25th August 2020, 6pm IST</li>
            <li>Winners will be announced at Conference held between 27th-30th August 2020</li>
            <li>Winners get free acces to the conference</li>
            <li>All participants will receive E-certificate</li>
          </ul>
          <p>
            Apply promotion code
            <span>{{detail.promoCode}}</span> to avail 20% discount on Conference registration fee
          </p>
        </div>
      </div>
    </transition>
    <div class="btn-container">
      <div @click="route(1)" class="btn transparent shake">Exit</div>
      <div @click="route(2)" class="btn grow">Register For Conference</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuccessfulRegistration",
  props: {
    type: String,
    detail: Object
  },
  methods: {
    route(page) {
      switch (page) {
        case 1:
          this.$router.push("/");
          break;
        case 2:
          this.$router.push("/register/conference/participant");
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/colors";
.success {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  background-image: $background-1;
  .card {
    width: 65vw;
    height: 22rem;
    border-radius: 0.8rem;
    background: white;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    //background-image: $gradient;
    @include iphone {
      width: 90vw;
      height: auto;
    }
  }
  .hackathon {
    display: flex;
    justify-content: center;
    align-items: center;
    @include iphone {
      flex-wrap: wrap;
    }
    .left {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 1rem 2rem;
      @include iphone {
        margin: 0;
      }
      img {
        width: 125px;
        height: 125px;
        margin: 1rem 0;
        @include iphone {
          margin: 0;
          margin-top: 1rem;
          width: 80px;
          height: 80px;
        }
      }
      h1 {
        color: $primary;
      }
    }
    .line {
      height: 90%;
      width: 1px;
      background: grey;
      @include iphone {
        width: 100%;
        height: 1px;
      }
    }
    .right {
      margin: 1rem 2rem;
      @include iphone {
        margin: 0;
        padding: 1rem 1.5rem;
      }
      h1 {
        color: $primary;
        @include iphone {
          font-size: large;
        }
      }
      h4 {
        margin-top: 0;
        color: #f7c871;
        @include iphone {
          font-weight: lighter;
        }
      }
      ul {
        li {
          margin: 0.7rem 0;
        }
      }
      span {
        color: red;
      }
    }
  }
  .btn-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    .btn {
      padding: 1rem 1.5rem;
      margin: 0 0.5rem;
      background-image: $gradient;
      color: white;
      border-radius: 0.8rem;
      cursor: pointer;
    }
    .transparent {
      background-image: none;
      background: lightgray;
      color: black;
    }
    .btn:active {
      transform: scale(0.95);
    }
  }
}
</style>