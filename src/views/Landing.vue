<!---<template>
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
          href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/DownloadFiles%2FSchedule.xlsx?alt=media&token=d5964feb-9a72-4a96-a57d-5a862567e041"
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
</style> --->

<template>
  <div class="landing-page">
    <section class="landing">
      <div class="home-wrap">
        <div class="home-inner"></div>
      </div>
    </section>
    <section class="countdown-container">
      <div class="date-time">
        <div class="date">
          <img src="../assets/Landing/calendar.svg" alt />
          <div class="data">
            <h3>August 27th-30th</h3>
            <h4 @click="route(2)">View Schedule</h4>
          </div>
        </div>
        <div @click="route(5)" class="btn">Register Now</div>
      </div>
      <div class="circle days">
        <h1>{{days}}</h1>
        <h1>Days</h1>
      </div>
      <div class="circle hours">
        <h1>{{hours}}</h1>
        <h1>Hours</h1>
      </div>
      <div class="circle mins">
        <h1>{{minutes}}</h1>
        <h1>Minutes</h1>
      </div>
      <div class="circle secs">
        <h1>{{seconds}}</h1>
        <h1>Seconds</h1>
      </div>
    </section>
    <section class="welcome">
      <div class="heading">
        <h1>Welcome</h1>
        <div class="small-line"></div>
      </div>
      <p>
        Current pandemic times, unveil all continents’ unpreparedness and worldwide sorrow.
        In this unique conference, we, as a multidisciplinary independent group, gather numerous international personalities directly involved in testing, preventing, treating, and striving to find a cure for COVID-19 pandemic.
        This global platform provides an extraordinary opportunity for diverse groups of people to attend and learn about the virus characteristics and potential ways of fighting it.
        We, scientists, from India’s “Bengaluru Genomics Center (BGC)” and Bolivia’s “High Altitude Pulmonary and Pathology Institute (HAPPI-IPPA)”, accompanied by extraordinary worldwide profesional individuals, aim to encourage the world to unite and to restore humanity, together.
      </p>
    </section>
    <section class="themes">
      <div class="heading">
        <h1>Themes</h1>
        <div class="small-line"></div>
      </div>
      <div class="flex">
        <div class="item">
          <img src="../assets/Landing/testing.svg" alt="testing" />
          <p>Pandemic Testing</p>
        </div>
        <div class="item">
          <img src="../assets/Landing/virus.svg" alt="testing" />
          <p>Advances in COVID-19</p>
        </div>
        <div class="item">
          <img src="../assets/Landing/prevention.svg" alt="testing" />
          <p>Prevention Strategies</p>
        </div>
        <div class="item">
          <img src="../assets/Landing/icu.svg" alt="testing" />
          <p>ICU Strategies</p>
        </div>
        <div class="item">
          <img src="../assets/Landing/pill.svg" alt="testing" />
          <p>Drug Designing pertaining to COVID-19</p>
        </div>
        <div class="item">
          <img src="../assets/Landing/vaccine.svg" alt="testing" />
          <p>Repurposing of Drugs and Vaccines</p>
        </div>
        <div class="item">
          <img src="../assets/Landing/ayurveda.svg" alt="testing" />
          <p>AYUSH (Ayurveda, Yoga, Unani, Siddha, Homeopathy)</p>
        </div>
        <div class="item">
          <img src="../assets/Landing/chemotherapy.svg" alt="testing" />
          <p>COVID-19 Management & Treatment</p>
        </div>
        <div class="item">
          <img src="../assets/Landing/herb.svg" alt="testing" />
          <p>Alternative Medicine</p>
        </div>
        <div class="item">
          <img src="../assets/Landing/lab (1).svg" alt="testing" />
          <p>Pathophysiology and Pathology of COVID-19</p>
        </div>
        <div class="item">
          <img src="../assets/Landing/nutrition.svg" alt="testing" />
          <p>Nutrition</p>
        </div>
        <div class="item">
          <img src="../assets/Landing/alternative-medicine.svg" alt="testing" />
          <p>Traditional Medicine</p>
        </div>
        <div class="item">
          <img src="../assets/Landing/drug.svg" alt="testing" />
          <p>Integrated Medicine</p>
        </div>
        <div class="item">
          <img src="../assets/Landing/dna.svg" alt="testing" />
          <p>Bioinformatics & Genomics</p>
        </div>
      </div>
    </section>
    <section class="registrations">
      <div class="heading">
        <h1>Registration</h1>
        <div class="small-line"></div>
        <h4
          style="color:#e4335c; width: 100%; text-align: center;padding: 0 1rem;"
        >All funds collected as registration fee go to COVID-19 research and education</h4>
      </div>
      <div class="card-container">
        <div class="card grow">
          <div class="body">
            <img src="../assets/Register/target.svg" alt="participants" />
            <h2>Conference</h2>
            <ul>
              <li>Accessible Prices</li>
              <li>Special Discounts For Students</li>
              <li>75% Dicount for residents of underdeveloped countries</li>
              <li>50% Discount for residents of devoloping countries</li>
            </ul>
          </div>
          <div @click="route(5)" class="action">Register as a participant</div>
        </div>
        <div class="card grow">
          <div class="body">
            <img src="../assets/Register/hackathon.svg" alt="speaker" class="speaker" />
            <h2>Hackathon</h2>
            <ul>
              <li>Free Registration</li>
              <li>Free access to the conference for the top 3 winners</li>
              <li>All participants will be awarded E-Certificates</li>
              <li>
                Want more details ?
                <br />
                <span class="link" @click="route(3)">Click Here</span>
              </li>
            </ul>
          </div>
          <div @click="route(6)" class="action">Register for Hackathon</div>
        </div>
        <div class="card grow">
          <div class="body">
            <img src="../assets/Register/workshop.svg" alt="speaker" />
            <h2>Workshop</h2>
            <ul>
              <li>Accessible Prices</li>
              <li>75% Dicount for residents of underdeveloped countries</li>
              <li>50% Discount for residents of devoloping countries</li>
              <li>
                Want more details ?
                <br />
                <span class="link" @click="route(4)">Click Here</span>
              </li>
            </ul>
          </div>
          <div @click="route(7)" class="action">Register for Workshop</div>
        </div>
      </div>
    </section>
    <section class="rolling-speakers">
      <div class="heading">
        <h1>Speakers</h1>
        <div class="small-line"></div>
      </div>
      <div class="speakers-containers">
        <div class="speakers">
          <div class="speaker">
            <img src="../assets/organizers/org-9.jpg" alt />
            <h3>Dr. Gustavo Zubieta</h3>
          </div>
          <div class="speaker">
            <img src="../assets/organizers/org-6.jpg" alt />
            <h3>Prof. Malali Gowda</h3>
          </div>
          <div class="speaker">
            <img src="../assets/organizers/org-10.jpg" alt />
            <h3>Dr. Oscar Murillo</h3>
          </div>
          <div class="speaker">
            <img src="../assets/organizers/org-24.jpg" alt />
            <h3>Dr. Murray Epstein</h3>
          </div>
          <div class="speaker">
            <img src="../assets/organizers/org-31.jpg" alt />
            <h3>Andrew Pollard</h3>
          </div>
          <div class="speaker">
            <img src="../assets/organizers/org-34.jpg" alt />
            <h3>Paolo Pelosi</h3>
          </div>
          <div class="speaker">
            <img src="../assets/organizers/org-26.jpg" alt />
            <h3>Dr. Gaurav Sharma</h3>
          </div>
          <div class="speaker">
            <img src="../assets/organizers/org-35.jpg" alt />
            <h3>Dr. Milena Garcia</h3>
          </div>
          <div class="speaker">
            <img src="../assets/organizers/org-32.jpg" alt />
            <h3>Prof. Jim Russel</h3>
          </div>
          <div class="speaker">
            <img src="../assets/organizers/org-16.jpg" alt />
            <h3>Dr. Jose Antonio</h3>
          </div>
          <div class="speaker">
            <img src="../assets/organizers/org-11.jpg" alt />
            <h3>Dr. Roberto Accinelli</h3>
          </div>
        </div>
      </div>
      <p style="width: 100%; text-align: center;padding: 0 1rem;">
        To see the full speaker list with abstracts,
        <span @click="route(8)" class="link">Click Here</span>
      </p>
    </section>
    <section class="organizers">
      <div class="heading">
        <h1>Organizers</h1>
        <div class="small-line"></div>
      </div>
      <div class="organizers-container">
        <div class="organizer">
          <img src="../assets/organizers/org-6.jpg" alt />
          <h3>Prof. Malali Gowda</h3>
          <h4>Conference Director</h4>
        </div>
        <div class="organizer">
          <img src="../assets/organizers/org-9.jpg" alt />
          <h3>Dr. Gustavo Zubieta</h3>
          <h4>Conference Director</h4>
        </div>
        <div class="organizer">
          <img src="../assets/organizers/org-22.jpg" alt />
          <h3>Dr. Pruthvi Chakravarthi</h3>
          <h4>Conference Convenor</h4>
        </div>
        <div class="organizer">
          <img src="../assets/organizers/org-23.jpeg" alt />
          <h3>Dr. Natalia Zubieta</h3>
          <h4>Conference Convenor</h4>
        </div>
      </div>
      <p>
        To see the complete organizing commitee & institutions,
        <span
          @click="route(9)"
          class="link"
        >Click Here</span>
      </p>
    </section>
    <section class="videos">
      <div class="heading">
        <h1>A message from the organizers</h1>
        <div class="small-line"></div>
      </div>
      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/aTc1CN6hkuc"
          frameborder="0"
          class="margin"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/xLaOdzSPBCA"
          frameborder="0"
          class="margin"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
    <section class="gallery">
      <div class="heading">
        <h1>Gallery</h1>
        <div class="small-line"></div>
      </div>
      <div class="carousel-container">
        <img src="../assets/Gallery/left.svg" alt="left" @click="decrementCarousel()" class="arrow" />
        <div class="carousel">
          <transition
            name="custom-classes-transition"
            enter-active-class="animated slideInRight"
            leave-active-class="animated slideOutLeft"
            duration="500"
            mode="out-in"
            appear
          >
            <img
              v-if="carouselCount==1"
              src="../assets/Gallery/carousel-1.jpg"
              alt="carousel"
              key="1"
            />
            <img
              v-else-if="carouselCount==2"
              src="../assets/Gallery/carousel-2.jpg"
              alt="carousel"
              key="2"
            />
            <img
              v-else-if="carouselCount==3"
              src="../assets/Gallery/carousel-3.jpg"
              alt="carousel"
              key="3"
            />
            <img
              v-else-if="carouselCount==4"
              src="../assets/Gallery/carousel-4.jpg"
              alt="carousel"
              key="4"
            />
            <img
              v-else-if="carouselCount==5"
              src="../assets/Gallery/carousel-5.jpg"
              alt="carousel"
              key="5"
            />
            <img
              v-else-if="carouselCount==6"
              src="../assets/Gallery/carousel-6.jpg"
              alt="carousel"
              key="6"
            />
            <img
              v-else-if="carouselCount==7"
              src="../assets/Gallery/carousel-7.jpg"
              alt="carousel"
              key="7"
            />
            <img
              v-else-if="carouselCount==8"
              src="../assets/Gallery/carousel-8.jpg"
              alt="carousel"
              key="8"
            />
            <img
              v-else-if="carouselCount==9"
              src="../assets/Gallery/carousel-9.jpg"
              alt="carousel"
              key="9"
            />
            <img
              v-else-if="carouselCount==10"
              src="../assets/Gallery/carousel-10.jpg"
              alt="carousel"
              key="10"
            />
            <img
              v-else-if="carouselCount==11"
              src="../assets/Gallery/carousel-11.jpg"
              alt="carousel"
              key="11"
            />
            <img
              v-else-if="carouselCount==12"
              src="../assets/Gallery/carousel-12.jpg"
              alt="carousel"
              key="12"
            />
            <img
              v-else-if="carouselCount==13"
              src="../assets/Gallery/carousel-13.jpg"
              alt="carousel"
              key="13"
            />
            <img
              v-else-if="carouselCount==14"
              src="../assets/Gallery/carousel-14.jpg"
              alt="carousel"
              key="14"
            />
            <img
              v-else-if="carouselCount==15"
              src="../assets/Gallery/carousel-15.jpg"
              alt="carousel"
              key="15"
            />
          </transition>
        </div>
        <img
          src="../assets/Gallery/right.svg"
          alt="right"
          @click="incrementCarousel()"
          class="arrow"
        />
      </div>
    </section>
    <div class="brochures">
      <div class="heading">
        <h1>Brochures</h1>
        <div class="small-line"></div>
      </div>
      <div class="download-container">
        <div class="card grow">
          <div class="body">
            <img src="../assets/Register/target.svg" alt="pic" />
            <h2>Conference</h2>
          </div>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/DownloadFiles%2FConference.JPG?alt=media&token=d7768470-f6a3-4c8b-a256-d8ce41cd10d5"
            download
            target="_blank"
            class="btn"
          >Download</a>
        </div>
        <div class="card grow">
          <div class="body">
            <img src="../assets/Register/hackathon.svg" alt="pic" />
            <h2>Hackathon</h2>
          </div>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/DownloadFiles%2FHackathon.jpeg?alt=media&token=278b7a03-a38d-4337-bcec-a64f2d53b987"
            download
            target="_blank"
            class="btn"
          >Download</a>
        </div>
        <div class="card grow">
          <div class="body">
            <img src="../assets/Register/workshop.svg" alt="pic" />
            <h2>Workshop</h2>
          </div>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/DownloadFiles%2FWorkshop.JPG?alt=media&token=60dc560e-a152-46a9-b89f-85a7e1bf1b58"
            download
            target="_blank"
            class="btn"
          >Download</a>
        </div>
        <div class="card grow">
          <div class="body">
            <img src="../assets/Landing/calendar.svg" alt="pic" />
            <h2>Program/Schedule</h2>
          </div>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/DownloadFiles%2FSchedule.xlsx?alt=media&token=d5964feb-9a72-4a96-a57d-5a862567e041"
            download
            target="_blank"
            class="btn"
          >Download</a>
        </div>
      </div>
    </div>
    <h3 style="width: 100%; text-align: center;">
      Check out our previous conference on Corona Viral Genomics
      <a
        href="https://www.bgc-genomics.com/ICCVG/home.html"
        target="_blank"
        class="link"
      >here</a>
    </h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselCount: 1,
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
        case 2:
          this.$router.push("/schedule");
          break;
        case 3:
          this.$router.push("/hackathon/about");
          break;
        case 4:
          this.$router.push("/workshop");
          break;
        case 5:
          this.$router.push("/register/conference/participant");
          break;
        case 6:
          this.$router.push("/register/hackathon");
          break;
        case 7:
          this.$router.push("/register/workshop");
          break;
        case 8:
          this.$router.push("/speakers");
          break;
        case 9:
          this.$router.push("/organizers");
          break;
      }
    },
    incrementCarousel() {
      if (this.carouselCount >= 15) {
        this.carouselCount = 1;
      } else {
        this.carouselCount++;
      }
      console.log(this.carouselCount);
    },
    decrementCarousel() {
      if (this.carouselCount <= 1) {
        this.carouselCount = 15;
      } else {
        this.carouselCount--;
      }
      console.log(this.carouselCount);
    }
  },
  mounted() {
    this.countdown();
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/colors";
.landing-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .landing {
    position: relative;
    width: 100%;
    height: 100vh;
    display: table;
    z-index: 0;
    .home-wrap {
      clip: rect(0, auto, auto, 0);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
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
    }
  }
  .countdown-container {
    margin: 0.7rem 0;
    padding: 1rem 0;
    width: 100%;
    background: #eee9e9;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @include iphone {
      flex-wrap: wrap;
      padding-bottom: 2rem;
    }
    .date-time {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 1.5rem;
      @include iphone {
        margin: 1rem 3rem;
      }
      .date,
      .time {
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .date {
        img {
          width: 55px;
          height: 55px;
        }
        .data {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          margin-left: 0.5rem;
          h3 {
            margin: 0;
          }
          h4 {
            margin: 0;
            margin: 0.3rem 0;
            font-weight: lighter;
            color: #e4335c;
            cursor: pointer;
          }
          h4:hover {
            color: darken(#e4335c, 10%);
          }
        }
        margin-bottom: 1rem;
      }
      .btn {
        background: $primary;
        padding: 1rem 4rem;
        color: white;
        border-radius: 0.8rem;
        box-shadow: 5px 8px 10px rgba(0, 0, 0, 0.25);
        cursor: pointer;
        transition: 0.3s all ease-in;
      }
      .btn:hover {
        background: darken($primary, 10%);
      }
      .btn:active {
        transform: scale(0.9);
      }
    }
    .circle {
      width: 170px;
      height: 170px;
      border-radius: 50%;
      background: $primary;
      box-shadow: 5px 8px 10px rgba(0, 0, 0, 0.25);
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      @include ipad-portrait {
        width: 90px;
        height: 90px;
      }
      @include iphone {
        width: 80px;
        height: 80px;
      }
      h1 {
        font-weight: lighter;
        font-size: xx-large;
        margin-top: 0;
        margin-bottom: 0.3rem;
        @include ipad-portrait {
          font-size: large;
        }
        @include iphone {
          font-size: medium;
        }
      }
    }
  }
  .heading {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      width: 100%;
      text-align: center;
      font-size: xx-large;
      font-weight: lighter;
      margin-bottom: 0;
    }
    .small-line {
      width: 5%;
      height: 3px;
      background: $primary;
      margin: 1rem 0;
    }
  }
  .welcome {
    background-image: $background-1;
    background-position: center;
    background-repeat: no-repeat;
    padding: 1.5rem 0 2rem 0;
    width: 100%;
    p {
      margin-top: 0;
      padding: 0rem 2rem;
      line-height: 2.2rem;
    }
  }
  .themes {
    width: 100%;
    margin: 0.7rem 0;
    padding: 0.5rem 0;
    background: #eee9e9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .flex {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 1rem 0;
      flex-wrap: wrap;
      @include iphone {
        justify-content: flex-start;
      }
      .item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 1rem;
        @include iphone {
          padding: 0 1.5rem;
        }
        img {
          width: 45px;
          height: 45px;
          margin-right: 0.7rem;
        }
      }
    }
  }
  .registrations {
    background-image: $background-1;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    .card-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      @include iphone {
        margin: 1rem 0;
      }
      .card {
        width: 18rem;
        height: 28rem;
        margin: 2rem 3rem;
        border-radius: 0.8rem;
        background: white;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        display: grid;
        grid-template-rows: 88% 12%;
        overflow: hidden;
        @include iphone {
          margin: 2rem 0;
        }
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
            margin: 1rem 0 0.5rem 0;
          }
          h4 {
            padding: 0 1rem;
          }
          img {
            margin-top: 1rem;
            width: 130px;
            height: 130px;
          }
          ul {
            text-align: left;
            margin-top: 0.5rem;
            li {
              text-align: left;
              margin: 0.5rem 0;
            }
            .link {
              color: #e4335c;
              cursor: pointer;
            }
            .link:hover {
              color: darken(#e4335c, 10%);
            }
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
  .rolling-speakers {
    width: 100%;
    margin: 0.7rem 0;
    padding: 0.5rem 0;
    background: #eee9e9;
    display: flex;
    flex-direction: column;
    align-items: center;
    .speakers-containers {
      margin-top: 1rem;
      width: 95%;
      .speakers {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 1rem 0;
        overflow: hidden;
        .speaker {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0 2.5rem;
          animation: marquee 25s linear infinite;
          img {
            width: 210px;
            height: 210px;
            border-radius: 0.5rem;
            box-shadow: 5px 8px 10px rgba(0, 0, 0, 0.25);
          }
          h3 {
            margin: 1.5rem 0;
            color: darken($primary, 15%);
          }
        }
      }
    }
  }
  .organizers {
    background-image: $background-1;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .organizers-container {
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin: 0.7rem 0;
      padding: 0.5rem 0;
      @include ipad-portrait {
        flex-wrap: wrap;
      }
      .organizer {
        display: flex;
        flex-direction: column;
        align-items: center;
        @include ipad-portrait {
          margin: 2rem;
        }
        h3 {
          color: darken($primary, 15%);
          margin-bottom: 0.3rem;
        }
        h4 {
          margin: 0;
        }
        img {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          box-shadow: 5px 8px 10px rgba(0, 0, 0, 0.25);
        }
      }
    }
    p {
      width: 100%;
      text-align: center;
      margin: 3rem 0;
    }
  }
  .videos,
  .gallery,
  .brochures {
    width: 100%;
    margin: 0.7rem 0;
    padding: 0.5rem 0;
    background: #eee9e9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .video-container {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 2rem 0;
      @include ipad-portrait {
        flex-wrap: wrap;
      }
      .margin {
        width: 560px;
        height: 315px;
        @include ipad-portrait {
          margin: 1rem 0;
        }
        @include iphone {
          width: 320px;
          height: 220px;
        }
      }
    }
  }
  .gallery {
    background-image: $background-1;
    background-position: center;
    background-repeat: no-repeat;
    .carousel-container {
      margin: 1rem 0;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 1080px;
        height: 520px;
        box-shadow: 5px 8px 10px rgba(0, 0, 0, 0.25);
        @include ipad-portrait {
          width: 720px;
          height: 320px;
        }
        @include iphone {
          width: 320px;
          height: 170px;
        }
      }
      .arrow {
        width: 40px;
        height: 40px;
        margin: 0 1rem;
        cursor: pointer;
        box-shadow: none;
        @include iphone {
          width: 10px;
          height: 10px;
        }
      }
      .carousel {
        overflow: hidden;
      }
    }
  }
  .brochures {
    .download-container {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding-bottom: 2.5rem;
      @include ipad-portrait {
        flex-wrap: wrap;
      }
      .card {
        width: 15rem;
        height: 15rem;
        border-radius: 0.8rem;
        display: grid;
        grid-template-rows: 12.5rem 2.5rem;
        justify-content: center;
        background: white;
        box-shadow: 5px 8px 10px rgba(0, 0, 0, 0.25);
        overflow: none;
        @include ipad-portrait {
          margin: 1rem;
        }
        .body {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          img {
            margin: 0.8rem 0;
            width: 100px;
            height: 100px;
          }
          h2 {
            color: $primary;
            margin: 0;
          }
        }
        a {
          width: 15rem;
          height: 100%;
          background-image: $gradient;
          color: white;
          text-decoration: none;
          display: flex;
          justify-content: center;
          align-items: center;
          border-bottom-left-radius: 0.8rem;
          border-bottom-right-radius: 0.8rem;
        }
      }
    }
  }
  .link {
    color: #e4335c;
    cursor: pointer;
  }
  .link:hover {
    color: darken(#e4335c, 10%);
  }
}

@keyframes marquee {
  0% {
    transform: translateX(400%);
  }
  100% {
    transform: translateX(-400%);
  }
}
</style>