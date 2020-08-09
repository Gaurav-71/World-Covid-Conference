<template>
  <div class="about">
    <div class="landing">
      <transition
        name="custom-classes-transition"
        enter-active-class="animated bounceInLeft"
        leave-active-class="animated bounceOutLeft"
        appear
      >
        <div class="left">
          <img src="../assets/Landing/Earth_Covid_Virus_Without_Background.png" alt="virus" />
          <div class="countdown">
            <div class="quantity">
              <div class="number">{{days}}</div>
              <div>Days</div>
            </div>
            <div class="separator">:</div>
            <div class="quantity">
              <div class="number">{{hours}}</div>
              <div>Hours</div>
            </div>
            <div class="separator">:</div>
            <div class="quantity">
              <div class="number">{{minutes}}</div>
              <div>Mins</div>
            </div>
            <div class="separator">:</div>
            <div class="quantity">
              <div class="number">{{seconds}}</div>
              <div>Secs</div>
            </div>
          </div>
        </div>
      </transition>
      <transition
        name="custom-classes-transition"
        enter-active-class="animated bounceInRight"
        leave-active-class="animated bounceOutRight"
        appear
      >
        <div class="right">
          <h1>World Conference On Advance In COVID-19</h1>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sint amet dicta blanditiis quisquam hic minus incidunt dolores reiciendis eum alias laudantium, possimus neque explicabo unde voluptas fugit. Laudantium, quod!</h3>
          <div class="dtl-container">
            <div class="dtl mr">
              <img src="../assets/Landing/calendar.svg" alt="date" />
              <div class="data">
                <div class="d1">Date</div>
                <div class="d2">August 27-30, 2020</div>
                <div class="d3">Thursday to Saturday</div>
              </div>
            </div>
            <div class="dtl">
              <img src="../assets/Landing/time.svg" alt="time" />
              <div class="data">
                <div class="d1">Time</div>
                <div class="d2">India : 7am-11am & 4pm-9pm</div>
                <div class="d3">Bolivia : 9:30am-1:30pm & 6:30am-11:30am</div>
              </div>
            </div>
          </div>          
          <div class="button">
            <div class="btn transparent grow" @click="route(2)">View Schedule</div>
            <div class="btn grow" @click="route(1)">Register Now</div>
          </div>
          <h5>A Conference organized by Bengaluru Genomics Center & High Altitude Pulmonary and Pathology Institute</h5>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  },
  methods: {
    countdown() {
      let end = new Date("2020-08-27");
      let start = new Date();
      let remTime = end.getTime() - start.getTime();
      let mm = Math.floor(remTime / (1000 * 60));
      let hh = Math.floor(mm / 60);
      let dd = Math.floor(hh / 24);
      let ss = Math.floor(remTime / 1000);
      hh %= 24;
      mm %= 60;
      ss %= 60;
      hh = hh < 0 ? "0" : hh < 10 ? "0" + hh : hh;
      mm = mm < 0 ? "0" : mm < 10 ? "0" + mm : mm;
      ss = ss < 0 ? "0" : ss < 10 ? "0" + ss : ss;
      this.days = dd;
      this.hours = hh;
      this.minutes = mm;
      this.seconds = ss;
      if (start >= end) {
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
      }
      setTimeout(this.countdown, 1000);
    },
    route(page) {
      switch (page) {
        case 1:
          this.$store.state.navItem = 5;
          this.$router.push("/registration");
          break;
      }
    }
  },
  mounted() {
    this.countdown();
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/colors";
.about {
  min-height: calc(100vh - 4.5rem);
  background-image: $background-1;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0rem 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @include iphone {
    padding: 0 1.5rem;
  }
  .landing {
    height: calc(100vh - 4rem);
    width: 100%;
    //background-image: $gradient-red;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include ipad-portrait {
      height: auto;
      flex-wrap: wrap;
      justify-content: center;
    }
    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 23rem;
        @include iphone {
          width: 13rem;
        }
      }
      .countdown {
        margin: 2rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        .quantity {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          div {
            font-size: x-large;
            font-weight: bold;
            @include iphone {
              font-size: large;
            }
          }
          .number {
            font-size: xx-large;
            color: $primary;
            font-weight: lighter;
          }
        }
        .separator {
          font-size: xx-large;
          margin: 0 1rem;
        }
      }
    }
    .right {
      padding-left: 4rem;
      h1 {
        color: $primary;
        text-transform: capitalize !important;
      }
      .dtl-container {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 2.5rem 0 1rem 0;
        .mr {
          margin-right: 3rem;
        }
        .dtl {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          img {
            width: 70px;
            height: 70px;
          }
          .data {
            margin-left: 1rem;
            .d1 {
              font-weight: bolder;
              color: $primary;
              font-size: large;
              margin-bottom: 0.1rem;
            }
            .d2,
            .d3 {
              font-size: medium;
              font-weight: lighter;
            }
            .d2 {
              margin-bottom: 0.1rem;
            }
          }
        }
      }      
      .button {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        .btn {
          text-align: center;
          background-image: $gradient;
          width: 12rem;
          color: white;
          padding: 1rem 0;
          margin: 2rem 2rem 2rem 0;
          border-radius: 0.8rem;
          cursor: pointer;
          transition: all 0.3s ease-in;
        }
        .btn:hover {
          background-image: $gradient-red;
        }
        .transparent {
          background-image: none;
          background: rgba($primary, 0.5);
          color: black;
        }
        .transparent:hover {
          background: $primary;
          color: white;
        }
        .btn:active {
          transform: scale(0.95);
        }
      }
    }
  }
}
</style>