<template>
  <div class="workshop-container">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceInUp"
      leave-active-class="animated bounceOutUp"
      appear
    >
      <div class="workshop">
        <div class="section1">
          <div class="left">
            <img src="../assets/organizers/org-9.jpg" alt="virus" />
          </div>
          <div class="right">
            <h1>Prof. Gustavo Zubieta</h1>
            <p style="line-height: 1.5rem;">
              Director of IPPA - President of Zubieta University, Vice-
              President of International Society of Chronic Hypoxia. Past
              Visiting Professor at University of Copenhagen and current
              Visiting Professor at Era University and BLDE University, Lucknow,
              India and American University at Barbados. Coordinator of Research
              Cooperation with BLDE University in Vijayapur, India.
            </p>
            <div class="btn-container">
              <a
                href="https://firebasestorage.googleapis.com/v0/b/world-covid-conference-79354.appspot.com/o/speakerAbstracts%2FGustavo%20Zubieta-Calleja%20COVID-19%202wcc%20Abstract4.docx?alt=media&token=2ffacd7f-0266-4e2d-8639-dac8ef310bed"
                target="_blank"
                class="btn"
                >Read Abstract</a
              >
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="section">
          <h1>
            Pneumolysis and “Silent Hypoxemia”: A new concept - Highlights
          </h1>
          <br />
          <ol>
            <li style="margin:1rem 0;">
              Pneumolysis, a new concept defined as progressive
              alveolar-capillary destruction resulting from CoV-2 attack on
              pneumocytes) is fundamental to explain the pathophysiology of
              COVID-19. Pneumolysis + capillary vasodilatation + superimposed
              inflammation + overexpressed immunity + HAPE-type edema result in
              a significantly reduced pulmonary gas exchange area with
              intra-pulmonary shunting, uneven ventilation/perfusion and
              diffusion alteration
            </li>
            <li style="margin:1rem 0;">
              Extensive experience in high altitude medicine allows for
              explaining A) the Oxygen Transport Triad: Pneumo-Dynamic Pump,
              Hemo-Dynamic Pump and Hemoglobin and its COVID-19 compromise and
              B) Pathophysiology of COVID-19 involving 3 stages: Silent
              hypoxemia, Gasping, and Death zone
            </li>
            <li style="margin:1rem 0;">
              Application of the Tolerance to Hypoxia formula = Hb/PaCO2 +3.01
              to COVID-19, enlightens the understanding of critical hypoxemia
              and suggests the favorable use of Erythropoietin
            </li>
          </ol>
        </div>
        <div class="line"></div>
        <div class="section">
          <h1>Research Papers</h1>
          <br />
          <ul v-for="(paper, i) in papers" :key="i">
            <li>
              <a style="color: blue;" :href="paper.link" target="_blank">{{
                paper.name
              }}</a>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      papers: [
        {
          name:
            "Pneumolysis in COVID-19 Lung Disease,1st mention June 9th, 2020",
          link: "https://youtu.be/ioqzgGDCtGY"
        },
        {
          name:
            "COVID-19 and Pneumolysis Simulating Extreme High-altitude Exposure with Altered Oxygen Transport Physiology",
          link:
            "https://benthamscience.com/journals/reviews-on-recent-clinical-trials/article/186294/"
        },
        {
          name: "Tolerance to Hypoxia",
          link: "https://zuniv.net/pub/TolerancetoHypoxiaFiziol.pdf"
        },
        {
          name:
            "The advantages of ultraviolet radiation in controlling the coronavirus at high-altitude",
          link:
            "http://altitudeclinic.com/blog/2020/04/u_v-radiation-covid-2-at-high-altitude/"
        },
        {
          name:
            "Extended longevity at high altitude:Benefits of exposure to chronic hypoxia",
          link: "https://zuniv.net/pub/Longevity.pdf"
        },
        {
          name:
            "COVID-19: Multiple Diseases Simulating Extreme High-Altitude Exposure",
          link: "https://www.preprints.org/manuscript/202005.0085/v1"
        },
        {
          name:
            "EL COVID-19 Y LAS COMPLICACIONES PULMONARES: NEUMÓLISIS Y BAJA TOLERANCIA A LA HIPOXIA",
          link: "https://zuniv.net/pub/NeumolisisBoletin2020.pdf"
        },
        {
          name: "Coronavirus is fatal due to Pneumolysis",
          link: "https://www.eldiario.net/movil/?n=7&a=2020&m=07&d=09"
        },
        {
          name: "Pneumolysis and “silent hypoxemia” in COVID-19",
          link: "https://osf.io/qde8w/"
        }
      ]
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
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @include iphone {
      flex-wrap: wrap;
    }
    h1 {
      width: 100%;
      text-align: center;
      margin-bottom: 0;
      color: $primary;
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
