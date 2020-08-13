<template>
  <div class="hackathon-container">
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
      <div class="hackathon">
        <div class="section1">
          <div class="left">
            <img src="../assets/Hackathon/idea.svg" alt="virus" />
          </div>
          <div class="right">
            <h1>Combat Covid-19</h1>
            <p>An opportunity for the young minds where in they come up with an idea/solution for the current pandemic for which they have to write a short concept of their idea in the word or pdf format of about 2 pages</p>
            <div class="btn-container">
              <div @click="route(1)" class="btn transparent">Submit</div>
              <div @click="route(2)" class="btn">Register</div>
            </div>
            <div class="detail">
              <img src="../assets/Hackathon/test.svg" alt="time" class="test" />
              <p>25th August 2020 6pm, Screening of Hackathon</p>
            </div>
            <div class="detail">
              <img src="../assets/Hackathon/time.svg" alt="time" />
              <p>23rd August 2020, Last date for concept registration & submission</p>
            </div>
            <div class="detail">
              <img src="../assets/Hackathon/diploma.svg" alt="time" />
              <p>E-certificates for all participants</p>
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="themes">
          <div class="left">
            <div class="heading">
              <img src="../assets/Hackathon/theme.svg" alt="themes" />
              <h2>Themes</h2>
            </div>
            <ul>
              <li>Public Health, Pathophysiology and Pathology of COVID-19</li>
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
              <li>Information Technology</li>
            </ul>
          </div>
          <div class="right">
            <div class="specs">
              <div class="heading">
                <img src="../assets/Hackathon/gift.svg" alt="themes" />
                <h2>Benefits</h2>
              </div>
              <ul>
                <li>E-Certificates for participation</li>
                <li>Free access to the conference for the top 3 winners</li>
                <li>Discounted conference registration for all participants</li>
                <li>Global Networking with your ideas and products</li>
                <li>Contribute to ideas to solve COVID-19 pandemic</li>
              </ul>
            </div>
            <div class="specs">
              <div class="heading">
                <img src="../assets/Hackathon/rules.svg" alt="themes" />
                <h2>Specifications</h2>
              </div>
              <ul>
                <li>Concept / Idea should be of 2 pages</li>
                <li>Last day for submission is 23rd Aug 2020 6pm IST</li>
                <li>Concept file should either be in PDF or Word format</li>
                <li>Winners will be announced at the Conference</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="download-container">
          <a href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/DownloadFiles%2FHackathon.jpeg?alt=media&token=278b7a03-a38d-4337-bcec-a64f2d53b987" target="_blank" class="btn download">Download Brochure</a>
          <span>Registrations for Hackathon is free</span>
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
        h1: "Hackathon",
        h4: "Register and Stand a chance to present at the conference !",
        src: "hackathon.svg"
      },      
    };
  },
  methods: {
    route(page) {
      switch (page) {
        case 1:
          this.$router.push("/hackathon/submit");
          break;
        case 2:
          this.$router.push("/register/hackathon");
          break;
      }
    },    
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/colors";
.hackathon-container {
  min-height: 100vh;
  width: 100%;
  background-image: $background-1;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  @include ipad-portrait {
    padding: 0.5rem 0;
  }
  .btn {
    width: 6rem;
    padding: 1rem 2rem;
    background: $primary;
    border-radius: 0.8rem;
    color: white;
    cursor: pointer;
    text-align: center;
    transition: all 0.3s ease-in;
  }
  .btn:hover {
    background: darken($primary, 10%);
  }
  .transparent {
    background: #e4e3e3;
    color: #333;
    color: black;
  }
  .transparent:hover {
    background: darken(#e4e3e3, 10%);
  }
  .btn:active {
    transform: scale(0.95);
  }
  .hackathon {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  a {
    color: white;
    text-decoration: none;
  }
  .section1 {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 4rem;
    @include iphone {
      flex-wrap: wrap;
      margin: 0 1rem;
    }
    .left {
      img {
        width: 470px;
        height: 470px;
        @include ipad-portrait {
          width: 300px;
          height: 300px;
        }
      }
    }
    .right {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: left;
      padding: 0 2rem;
      @include ipad-portrait {
        padding: 0rem;
      }
      @include iphone {
        padding: 0.8rem 1.3rem;
        width: 100%;
        align-items: center;
      }
      h1 {
        color: $primary;
        font-weight: lighter;
        margin-bottom: 0;
        margin-top: 0;
      }
      p {
        @include iphone {
          text-align: center;
        }
      }
      .btn-container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        @include iphone {
          justify-content: center;
        }
        margin: 1.2rem 0 2rem 0;
        .btn {
          margin: 0 1.2rem 0 0;
          @include iphone {
            margin: 0 0.5rem;
          }
        }
      }
      .detail {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0.3rem 0.5rem;
        img {
          width: 40px;
          height: 40px;
          margin: 0 0.8rem 0 0;
        }
        p {
          @include iphone {
            text-align: left;
          }
        }
      }
    }
  }
  .line {
    width: 90%;
    height: 1px;
    background: lightgrey;
    margin: 0.8rem 0;
  }
  .themes {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @include iphone {
      flex-wrap: wrap;
      justify-content: center;
    }
    .heading {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1rem 0;
      h2 {
        color: $primary;
        font-weight: lighter;
      }
      img {
        width: 40px;
        height: 40px;
        margin: 0 0.8rem 0 0;
      }
      @include iphone {
        margin-bottom: 0;
      }
    }
    ul {
      li {
        margin: 0.5rem 0;
      }
    }
    .left,
    .right {
      padding: 0.5rem 2rem;
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      @include iphone {
        width: 100%;
        padding: 1rem;
      }
    }
  }
  .download-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1.2rem 0;
    .download {
      width: auto;
    }
    span {
      margin: 1rem;
      @include iphone {
        text-align: center;
      }
    }
    a {
      text-decoration: none;
    }
  }
}
</style>
