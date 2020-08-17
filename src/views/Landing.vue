<template>
  <main class="abou">
    <section class="landing">
      <div class="home-wrap">
        <div class="home-inner"></div>
      </div>
    </section>
    <section class="about-conf">
      <h1>Welcome</h1>
      <p style="line-height: 1.5rem;">
        Current pandemic times, unveil all continents’ unpreparedness and worldwide sorrow.
        In this unique conference, we, as a multidisciplinary independent group, gather numerous international personalities directly involved in testing, preventing, treating, and striving to find a cure for COVID-19 pandemic.
        This global platform provides an extraordinary opportunity for diverse groups of people to attend and learn about the virus characteristics and potential ways of fighting it.
        We, scientists, from India’s “Bengaluru Genomics Center (BGC)” and Bolivia’s “High Altitude Pulmonary and Pathology Institute (HAPPI-IPPA)”, accompanied by extraordinary worldwide profesional individuals, aim to encourage the world to unite and to restore humanity, together.
      </p>
    </section>
    <section class="themes">
      <h1>Theme of the Conference</h1>
      <div class="themes-container">
        <ul>
          <li>Pathophysiology and Pathology of COVID-19</li>
          <li>Pandemic Testing</li>
          <li>Advances in COVID-19</li>
          <li>Prevention Strategies</li>
          <li>ICU Strategies</li>
          <li>Drug Designing pertaining to COVID-19</li>
          <li>Repurposing of Drugs and Vaccines</li>
          <li>AYUSH (Ayurveda, Yoga, Unani, Siddha, Homeopathy)</li>
          <li>COVID-19 Management & Treatment</li>
          <li>Alternative Medicine</li>
          <li>Nutrition</li>
          <li>Traditional Medicine</li>
          <li>Integrated Medicine</li>
          <li>Bioinformatics & Genomics</li>
        </ul>
        <div class="date">
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
            <h3>Post Conference Workshop on Bioinformatics of Covid-19</h3>
          </div>
        </div>
      </div>
    </section>
    <div class="download-container">
      <div class="btn-container">
        <div @click="route(1)" class="btn">Register For Conference Now</div>
      </div>
      <p
        style="text-align: center;"
      >Disclaimer : All funds collected as registration fee go to COVID-19 research and education</p>
    </div>
    <section class="pictures">
      <h2>
        Check out our previous conference on Corona Viral Genomics
        <a
          href="https://www.bgc-genomics.com/ICCVG/home.html"
          target="_blank"
        >here</a>
      </h2>
    </section>
    <div class="download-container">
      <div class="btn-container">
        <a
          href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/DownloadFiles%2FConference.JPG?alt=media&token=d7768470-f6a3-4c8b-a256-d8ce41cd10d5"
          download
          target="_blank"
          class="btn"
        >Download Conference Brochure</a>
        <a
          href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/DownloadFiles%2FHackathon.jpeg?alt=media&token=278b7a03-a38d-4337-bcec-a64f2d53b987"
          download
          target="_blank"
          class="btn"
        >Download Hackathon Brochure</a>
        <a
          href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/DownloadFiles%2FWorkshop.JPG?alt=media&token=60dc560e-a152-46a9-b89f-85a7e1bf1b58"
          download
          target="_blank"
          class="btn"
        >Download Workshop Brochure</a>
        <a
          href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/DownloadFiles%2FSchedule.xlsx?alt=media&token=49d2dd9a-ee28-4396-a8fb-0b71ccd733ca"
          download
          target="_blank"
          class="btn"
        >Download Schedule/Program</a>
      </div>
    </div>
  </main>
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
    route(page) {
      switch (page) {
        case 1:
          this.$store.state.navItem = 5;
          this.$router.push("/registration");
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/colors";
.abou {
  .landing {
    position: relative;
    width: 100%;
    height: 100vh;
    display: table;
    z-index: 0;
  }
  .home-wrap {
    clip: rect(0, auto, auto, 0);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .home-inner {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("../assets/Landing/desktop3.png");
    background-size: cover;
    background-position: center center;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    will-change: transform;
    @include iphone {
      background-image: url("../assets/Landing/iphone7.png");
    }
  }

  h1,
  h2 {
    color: $primary;
  }

  .about-conf,
  .themes,
  .pictures {
    padding: 0 2rem;
    h1 {
      margin-bottom: none;
    }
  }

  .themes-container {
    display: flex;
    justify-content: space-between;
    @include iphone {
      flex-wrap: wrap;
    }
    ul {
      margin-top: 0;
    }
  }

  .dtl-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    //justify-content: flex-start;
    align-items: flex-start;
    //margin: 0rem 0 1rem 0;
    @include iphone {
      margin-top: 1.5rem;
    }
    .dtl {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      margin-bottom: 1rem;
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
    h3 {
      text-align: center;
      margin: 1rem 0;
      color: darken($primary, 10%);
      @include iphone {
        margin: 1.5rem 0;
      }
    }
  }
  .btn-container {
    width: 100%;
    display: flex;
    justify-content: center;
    @include ipad-portrait {
      flex-wrap: wrap;
    }
    @include iphone {
      flex-wrap: wrap;
    }
    .btn {
      margin: 1rem;
      padding: 1rem 2rem;
      background: $gradient;
      border-radius: 1rem;
      color: white;
      cursor: pointer;
    }
    .btn:active {
      transform: scale(0.95);
    }
    a {
      color: white;
      text-decoration: none;
    }
  }

  @media all and (max-width: 330px) {
    .home-inner {
      max-width: 100vw;
    }
  }
}
</style>