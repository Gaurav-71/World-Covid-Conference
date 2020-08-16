<template>
  <div class="schedule">
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
      <div class="schedule-container">
        <div class="download-container">
          <a
            href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/DownloadFiles%2FSchedule.xlsx?alt=media&token=49d2dd9a-ee28-4396-a8fb-0b71ccd733ca"
            target="_blank"
            class="btn"
          >Download Program</a>
          <p>
            <b>Note :</b> All timings listed are in Indian Standard Time
          </p>
        </div>
        <img src="../assets/Schedule/1.png" alt="schedule" />
        <img src="../assets/Schedule/2.png" alt="schedule" />
        <img src="../assets/Schedule/3.png" alt="schedule" />
        <img src="../assets/Schedule/4.png" alt="schedule" />
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
        h1: "Schedule / Program List",
        src: "calendar.svg"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/colors";
.schedule {
  min-height: 100vh;
  background-image: $background-1;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .schedule-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .download-container {
      width: 100%;
      margin: 1rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    img {
      width: 100%;
      height: 100%;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
      margin: 1.5rem;
      @include iphone {
        width: 90%;
      }
    }
  }
  .btn {
    padding: 1rem 2rem;
    background: $gradient;
    border-radius: 1rem;
    color: white;
    cursor: pointer;
    margin-top: 2rem;
  }
  .btn:active {
    transform: scale(0.95);
  }
  a {
    color: white;
    text-decoration: none;
  }
}
</style>
