<template>
  <div class="success">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceInUp"
      leave-active-class="animated bounceOutUp"
      appear
    >
      <div v-if="type == 'Hackathon'" class="card hackathon">
        <div class="left">
          <img src="../../assets/Heading/hackathon.svg" alt="logo" />
          <h1>Hackathon</h1>
        </div>
        <div class="right">
          <h1>Admit One - {{detail.name}}</h1>
          <h4>You have been succesfully registered as a participant for 2nd World Conference On Advances In COVID-19</h4>          
          <ul>
            <li>Top 3 Winners will get a chance to present their idea at the conference</li>
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
      <div v-else-if="type == 'Participant'" class="card hackathon speaker">
        <div class="left">
          <img src="../../assets/Register/target.svg" alt="logo" />
          <h1>Participant</h1>
        </div>
        <div class="line"></div>
        <div class="right">
          <h1>Admit One - {{detail.name}}</h1>
          <h4>You have been succesfully registered as a participant for 2nd World Conference On Advances In COVID-19</h4>
          <p>
            <b>Date :</b> August 27-30, 2020
          </p>
          <p>
            <b>Time :</b> 7am - 11am & 4pm - 9pm IST
          </p>
          <p>
            <b>Location :</b> Online, A Zoom invite will be sent by email
          </p>
        </div>
      </div>
      <div v-else-if="type == 'Speaker'" class="card hackathon speaker">
        <div class="left">
          <img src="../../assets/Heading/presentation.svg" alt="logo" />
          <h1>Speaker</h1>
        </div>
        <div class="right">
          <h1>{{detail.name}}</h1>
          <h4>You have been succesfully registered as a speaker for 2nd World Conference On Advances In COVID-19</h4>
          <div class="code">
            <span>Promotion Code :</span>
            {{detail.promoCode}}
          </div>
          <p>Every speaker is allowed to bring 5 guests for the conference for free. Just share the promotion code with your guests to avail this offer</p>
        </div>
      </div>
    </transition>
    <div class="btn-container">
      <div @click="route(1)" class="btn transparent shake">Exit</div>
      <div v-if="user" @click="route(2)" class="btn grow big">Register For Conference</div>
      <div
        @click="route(3)"
        class="btn transparent shake"
        :class="{ active: user == false }"
      >Download</div>
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
  data() {
    return {
      user: false
    };
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
        case 3:
          window.print();
          break;
      }
    },
    checkUser() {
      if (this.type == "Speaker" || this.type == "Participant") {
        return false;
      } else {
        return true;
      }
    }
  },
  mounted() {
    this.user = this.checkUser();
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
    border-radius: 0.8rem;
    background: white;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    overflow: hidden;
  }
  .hackathon,
  .speaker {
    width: 65vw;
    height: 26rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @include ipad {
      flex-wrap: wrap;
      height: max-content;
    }
    @include ipad-portrait {
      width: 90vw;
      height: max-content;
      flex-wrap: wrap;
    }
    @include iphone {
      width: 90vw;
      height: max-content;
      margin-top: 3rem;
      flex-wrap: wrap;
    }
    .left {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem 2rem;
      background-image: $gradient;
      color: white;
      @include ipad {
        width: 100%;
      }
      @include ipad-portrait {
        width: 100%;
      }
      @include iphone {
        width: 100%;
      }
      img {
        width: 125px;
        height: 125px;
        padding: 1rem 0;
        @include iphone {
          padding: 0;
          padding-top: 1rem;
          width: 80px;
          height: 80px;
        }
      }
      h1 {
        color: white;
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
        background: rgba(0, 0, 0, 0.25);
        padding: 0.1rem 0.5rem;
        color: red;
      }
    }
  }
  .speaker {
    width: 50vw;
    height: 24rem;
    @include ipad {
      width: 90vw;
      height: max-content;
    }
    @include ipad-portrait {
      width: 90vw;
      height: max-content;
    }
    @include iphone {
      width: 90vw;
      height: max-content;
    }
    .right {
      .code {
        background: rgba(0, 0, 0, 0.25);
        color: red;
        padding: 1rem 2rem 1rem 0.3rem;
        span {
          background: none;
          color: black;
        }
      }
    }
  }
  .btn-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    @media print {
      display: none;
    }
    @include iphone{
      flex-wrap:wrap-reverse;
    }
    .btn {
      text-align: center;
      width: 5rem;
      padding: 1rem 1.5rem;
      margin: 0 0.5rem;
      background: $primary;
      color: white;
      border-radius: 0.8rem;
      transition: all 0.3s ease-in;
      cursor: pointer;
      @include iphone{
        margin: 0.8rem 0;
      }
    }
    .big {
      width: 15rem;
    }
    .btn:hover {
      background: darken($color: $primary, $amount: 10%);
    }
    .transparent {
      background: lightgray;
      color: black;
    }
    .transparent:hover {
      background: darken($color: lightgray, $amount: 10%);
    }
    .btn:active {
      transform: scale(0.95);
    }
    .active {
      background: $primary;
      color: white;
    }
    .active:hover {
      background: darken($color: $primary, $amount: 10%);
    }
  }
}
</style>