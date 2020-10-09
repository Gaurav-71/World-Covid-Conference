<template>
  <div class="recordings-container">
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
      <div class="recordings">
        <div
          class="card-container"
          v-for="(recording, index) in recordings"
          :key="index"
        >
          <div class="recording">
            <iframe
              class="video"
              :src="recording.src"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div class="deets">
              <h2>{{ recording.title }}</h2>
              <h4>{{ recording.name }}</h4>
            </div>
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
        h1: "Conference Recordings",
        h4:
          "All recordings of presentations from the 2nd World Conference on COVID-19",
        src: "record.svg"
      },
      recordings: [
        {
          name: "Prof. Dr. Gustavo Zubieta-Calleja",
          title: "Pneumolysis and Silent Hypoxemia in COVID-19: A new concept",
          src: "https://www.youtube.com/embed/wXwrGWOWNN8"
        },
        {
          name: "Dr. Roberto Achinell",
          title:
            "Efectiveness of glucocorticoid pulses in the inflammatory phase of COVID-19",
          src: "https://www.youtube.com/embed/pja6BaKiBc0"
        },
        {
          name: "Dr. Asha Kiran",
          title:
            "Lab parameters and COVID (CBC, CRP, Ferritin, D dimer, ABG interpretation, ETC.,) ",
          src: "https://www.youtube.com/embed/M6nDmZDB4rA"
        },
        {
          name: "Dr. Chitra Pattabiram",
          title: "Genomic Epidemiology of SARS COV-2 in Karnataka",
          src: "https://www.youtube.com/embed/1WjaIXlYlpg"
        },
        {
          name: "Dr. Christian Arias-Reyes",
          title: "The higher the altitude the less COVID-19",
          src: "https://www.youtube.com/embed/1Mvcr50IsbA"
        },
        {
          name: "Dr. Martin Begemann",
          title: "Neurological and psychiatric presentations in COVID-19",
          src: "https://www.youtube.com/embed/qYHgIJJILTs"
        },
        {
          name: "Dr. Paolo Pelosi",
          title:
            "'Happy hypoxia' in COIVD-19: What we learned from CT perfusion",
          src: "https://www.youtube.com/embed/yNGv-scA1bE"
        },
        {
          name: "Dr. Sudheer Ayyappan",
          title: "Recovery from hypoxia through Re-purposed ayurveda medicine",
          src: "https://www.youtube.com/embed/zdTDkcWq07M"
        },
        {
          name: "Dr. Walter Calderon",
          title:
            "Epidemiology of COVID-19 in the high altitude regions of Perú",
          src: "https://www.youtube.com/embed/LH56mqElqwg"
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
  },
  created() {
    if (!this.$store.state.validUser) {
      this.$router.push("/recordings/login");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/colors";

.recordings-container {
  min-height: 100vh;
  width: 100%;
  background-image: $background-1;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;

  .recordings {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .card-container {
      display: flex;
      justify-content: space-around;
      margin: 1rem 0;
      .recording {
        overflow: hidden;
        width: 24rem;
        border-radius: 0.8rem;
        background-image: $gradient;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: column;
        align-items: center;
        @include ipad-portrait {
          width: 22rem;
        }
        @include iphone {
          width: 20rem;
        }
        .video {
          width: 100%;
          height: 200px;
        }
        .deets {
          padding: 1rem 2rem 1.5rem;
          h2,
          h4 {
            margin: 0;
          }
          h4 {
            color: white;
          }
          h2 {
            margin-bottom: 1rem;
            color: black;
          }
        }
      }
    }
  }
}
</style>
