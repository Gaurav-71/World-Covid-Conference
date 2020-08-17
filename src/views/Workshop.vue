<template>
  <div class="workshop-container">
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
      <div class="workshop">
        <div class="section1">
          <div class="left">
            <img src="../assets/Workshop/workshop.svg" alt="virus" />
          </div>
          <div class="right">
            <h1>Bioinformatics Workshop on COVID-19</h1>
            <p
              style="line-height: 1.5rem;"
            >The participants will learn about the structure of COVID-19, Whole Genome Sequence (WGS) analysis of COVID-19 along with COVID-19 diversity and variant analysis.</p>
            <div class="detail-container">
              <div class="detail">
                <img src="../assets/Landing/calendar.svg" alt="time" class="test" />
                <p>31st August 2020</p>
              </div>
              <div class="detail">
                <img src="../assets/Hackathon/time.svg" alt="time" />
                <p>
                  7:30AM - 11:00AM IST
                  <br />4PM - 8PM IST
                </p>
              </div>
              <div class="detail">
                <img src="../assets/Hackathon/diploma.svg" alt="time" />
                <p>E-certificates</p>
              </div>
            </div>
            <div class="btn-container">
              <a
                href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/DownloadFiles%2FWorkshop.JPG?alt=media&token=60dc560e-a152-46a9-b89f-85a7e1bf1b58"
                target="_blank"
                class="btn transparent"
              >Download Brochure</a>
              <div @click="route(2)" class="btn">Register</div>
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="section">
          <div class="left">
            <div class="heading">
              <h1>About</h1>
              <div class="small-line"></div>
            </div>
            <p>Cov-2 is an infectious virus causing the severe acute respiratory syndrome. The studies reported the mutation rate is high in this virus and it evades the natural immune barrier of the human body. The variants in this virus are still being studied to understand the pathogen. The viral genomes, genes, proteins, and virology of the disease are explored with sequencing and data analysis of the several SARS-CoV2 stains across the world. This identification would impact in the mutations in the functional viral proteins and viral diversity.</p>
          </div>
          <div class="phone-line"></div>
          <div class="right">
            <div class="heading">
              <h1>Training Content</h1>
              <div class="small-line"></div>
            </div>
            <ul>
              <li>Demo & Lecture</li>
              <li>Structure of COVID-19</li>
              <li>Whole genome analysis COVID-19</li>
              <li>COVID-19 diversity and variant analysis</li>
            </ul>
          </div>
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
        h1: "Workshop",
        h4: "Attend an information packed workshop post conference",
        src: "workshop.svg"
      }
    };
  },
  methods: {
    route(page) {
      switch (page) {
        case 2:
          this.$router.push("/register/workshop");
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/colors";
.workshop-container {
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
    width: 10rem;
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
  .workshop {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  a {
    color: white;
    text-decoration: none;
  }
  .section {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    @include iphone {
      flex-wrap: wrap;
    }
    .left,
    .right {
      width: 50%;
      padding: 1rem 3rem;
      line-height: 1.8rem;
      text-align: center;
      @include iphone {
        width: 100%;
        padding: 1rem 1.5rem;
      }
      .heading {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 1.5rem;
        h1 {
          font-size: xx-large;
          font-weight: lighter;
          color: #333;
          @include iphone {
            font-size: x-large;
          }
        }
        .small-line {
          width: 7%;
          height: 3px;
          background: $primary;
        }
      }
    }
    .phone-line {
      @include iphone {
        width: 90%;
        height: 1px;
        background: lightgray;
        margin: 1rem 0;
      }
    }
    .right {
      ul {
        margin: 0;
        padding: 0;
        li {
          margin: 1rem auto;
          list-style-type: none;
        }
      }
    }
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
          width: 250px;
          height: 250px;
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
        padding: 0.8rem 1.5rem;
        width: 85%;
        align-items: center;
      }
      h1 {
        color: $primary;
        font-weight: lighter;
        margin-bottom: 0;
        margin-top: 0;
        @include iphone {
          font-size: x-large;
        }
      }
      p {
        @include iphone {
          text-align: left;
        }
      }
      .btn-container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        @include iphone {
          flex-wrap: wrap-reverse;
          justify-content: center;
        }
        margin: 2rem 0;
        .btn {
          margin: 0 1.2rem 0 0;
          @include iphone {
            margin: 1rem 0rem;
          }
        }
      }
      .detail-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        @include ipad-portrait {
          flex-wrap: wrap;
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
  }
  .line {
    width: 90%;
    height: 1px;
    background: lightgrey;
    margin: 0.8rem 0;
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
