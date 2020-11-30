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
          name: "2nd World COVID Conference Opening Ceremony",
          title: "",
          src: "https://www.youtube.com/embed/D8FpGFJIY90"
        },
        {
          name: "Prof. Dr. Gustavo Zubieta-Calleja",
          title: "Pneumolysis and Silent Hypoxemia in COVID-19: A new concept",
          src: "https://www.youtube.com/embed/wXwrGWOWNN8"
        },
        {
          name: "Dr. Malali Gowda",
          title: "Human Genome Project",
          src: "https://www.youtube.com/embed/QLwhSpo7DY8"
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
        },
        {
          name: "Dr. Robert Kuhnhenn",
          title:
            " Statistical analysis of COVID-19 and development of a prediction formula",
          src: "https://www.youtube.com/embed/NqHzzcLJhhE"
        },
        {
          name: "Dr. Kusal Das",
          title: "Environment and COVID-19: A UNESCO COVID-19 Panel Review",
          src: "https://www.youtube.com/embed/O4UvemissX8"
        },
        {
          name: "Dr. Mario Canitrot",
          title: "Neurological compromise in Covid-19",
          src: "https://www.youtube.com/embed/1j00_kylSdA"
        },
        {
          name: "Augusto Ittig",
          title:
            "Telemedicine in remote places: how to reduce doctor-patient contact during COVID-19 pandemic",
          src: "https://www.youtube.com/embed/znZ0hAtEZCo"
        },
        {
          name: "Dr. Clint Hendrikse",
          title:
            "Evidence and feasibility of prone positioning in COVID - 19: a resource challenged perspective",
          src: "https://www.youtube.com/embed/p6kiodC1DOw"
        },
        {
          name: "Harish P",
          title: "Cancer treatment in covid times Medical Oncologist",
          src: "https://www.youtube.com/embed/RyG9KTqBeKY"
        },
        {
          name: "Dr. Robert Gallo",
          title:
            "Lessons from the Past Pandemics; Implications for Arresting Covid-19",
          src: "https://www.youtube.com/embed/1S_rifbBUFo"
        },
        {
          name: "Dr. Fakhruddin",
          title:
            "Efficacy of homeopathic profilaxis in COVID/19 as an immune-booster",
          src: "https://www.youtube.com/embed/JLgWqo509Xg"
        },
        {
          name: "Dr. Jose Antonio Carmona",
          title:
            "Machiavelli and Rouseau - The judges of Covid-19 in its Neurol Manifest",
          src: "https://www.youtube.com/embed/X5O9tWVMisw"
        },
        {
          name: "Dr. Gabriela Urquieta",
          title: "Chest CT findings in COVID -19 at very high altitude",
          src: "https://www.youtube.com/embed/aIErLaDoVWw"
        },
        {
          name: "Dr. Walter Calderon",
          title:
            "Epidemiology of COVID-19 in the high altitude regions of Perú",
          src: "https://www.youtube.com/embed/LH56mqElqwg"
        },
        {
          name: "Prof. Murray Epstein",
          title:
            "Risks and Impact of Angiotensin Converting Enzyme inhibitors or Angiotensin Receptor Blockers",
          src: "https://www.youtube.com/embed/8u75p5-TAI4"
        },
        {
          name: "Vaidya P. Rammanohar",
          title: "Ayurveda and COVID-19 : Research and Clinical Updates",
          src: "https://www.youtube.com/embed/fvVRyxqCRH4"
        },
        {
          name: "Dr. Hamid Mobasheri",
          title:
            "SARS-Cov2 biophysical nature of Coronavirus, means of its stability and susceptibility",
          src: "https://www.youtube.com/embed/iS6yKsHI2R0"
        },
        {
          name: "Dr. Giuseppe Miserocchi",
          title: "Respiratory failure due to gas diffusion limitation",
          src: "https://www.youtube.com/embed/UHCQIxKBco8"
        },
        {
          name: "Dr. Andrew Pollard",
          title: "COVID-19 Vaccines",
          src: "https://www.youtube.com/embed/UHCQIxKBco8"
        },
        {
          name: "Dr. Usha Lalla",
          title:
            "The impact on high-flow nasal oxygen on the mortality of respiratory failure secondary to COVID-19 pneumonia",
          src: "https://www.youtube.com/embed/cB5oxfkcZFg"
        },
        {
          name: "Dr. Thuppil Venktesh",
          title: "Global life style changes during and post COVID 19",
          src: "https://www.youtube.com/embed/Ob11LEvOo2c"
        },
        {
          name: "Dr. Danutzia Marques",
          title: "Sex differences in the mortality by COVID-19",
          src: "https://www.youtube.com/embed/7a-nn_6T1oc"
        },
        {
          name: "Dr. Ross Hofmeyr",
          title:
            "Creating systems for safe COVID airway management: The Groote Schuur experience",
          src: "https://www.youtube.com/embed/2HFa2NugmwU"
        },
        {
          name: "Dr. Milena Garcia",
          title: "Covid in Colombia",
          src: "https://www.youtube.com/embed/dsRkl8FEmJM"
        },
        {
          name: "Dr. Shaji Bharath",
          title: "Accupunture for COVID-19",
          src: "https://www.youtube.com/embed/kocgLGSXvhk"
        },

        {
          name: "Dr. Su Datt Lam",
          title:
            "SARS-COV 2 spike protein predicted to form complexes with host receptor protein orthologues from a broad range of mammals",
          src: "https://www.youtube.com/embed/OUSPGCal2Qo"
        },
        {
          name: "Dr. Jim Russell",
          title:
            "Host Response Mediators in COVID-19 infection - Is there a protective effect of angiotensin II",
          src: "https://www.youtube.com/embed/wuQLnoGmyrk"
        },
        {
          name: "Dr. Lindsay Brown",
          title: "Linking the obesity and COVID-19 pandemics",
          src: "https://www.youtube.com/embed/xivHXsKQjF4"
        },
        {
          name: "Dr. Alberto Lopez",
          title: "New Technologies of the recent application of COVID-19",
          src: "https://www.youtube.com/embed/u-BoIDplpww"
        },
        {
          name: "Dr. Felipe Montelongo",
          title:
            "Management of severe pneumonia in COVID-19, and the resulting histology",
          src: "https://www.youtube.com/embed/GypSH8BodNQ"
        },
        {
          name: "Dr. Oscar Murillo",
          title: "Treatment of COVID-19 In long term facilities ",
          src: "https://www.youtube.com/embed/MYPZTuEODic"
        },
        {
          name: "Dr. Sumanta Goswani",
          title: "New diagnostic assays for COVID-19",
          src: "https://www.youtube.com/embed/l0kEYHDeC1o"
        },
        {
          name: "Dr. Sudhir Krishna",
          title:
            "Creating teams for Indian viral sequences based nucleic acid vaccine systems",
          src: "https://www.youtube.com/embed/kwT4h9OSeU8"
        },
        {
          name: "Dr. Gordon Dickinson",
          title:
            "Two viruses HIV and SARS-Cov2: Synergistic, Antogonistic or Neutral?",
          src: "https://www.youtube.com/embed/VBTTuld7l48"
        },
        {
          name: "Dr. Gaurav Sharma",
          title:
            "Diversity and evolution of coronaviruses: whole genom and pan-genom perspective",
          src: "https://www.youtube.com/embed/9g5rgGVyhSU"
        },
        {
          name: "Dr. Manjunath",
          title:
            "PCR and CBNAAT based diagnostic methodology for COVID-19. Diagnosis of COVID-19 lab",
          src: "https://www.youtube.com/embed/-ojkOHDc_KY"
        },
        {
          name: "Dr. Christine Ebert-Santos",
          title: "Pediatrics and COVID-19 ",
          src: "https://www.youtube.com/embed/6asITUfVtPg"
        },
        {
          name: "Dr. Imtayiaz Hassan",
          title: "Identification of high-affinity inhibitors of SARS-Cov2",
          src: "https://www.youtube.com/embed/hKKtX7edTPE"
        },
        {
          name: "Dr. Shaji Bharat",
          title: "Accupuncture for COVID-19",
          src: "https://www.youtube.com/embed/kocgLGSXvhk"
        },
        {
          name: "Dr. Byron Canelos",
          title: "Experience with Nitaxonazide in Ecuador",
          src: "https://www.youtube.com/embed/8g8EOT6Rwog"
        },
        {
          name: "Dr. Meera Sudheer",
          title:
            "Ayurveda medicine nutrition to eliminate COVID-19 morbidities",
          src: "https://www.youtube.com/embed/Pj8_sTw5lhQ"
        },
        {
          name: "Dr. Sanjay Jain",
          title:
            "Integration of Ayurveda in the management of critically ill patients of Covid-19 enables remarkably",
          src: "https://www.youtube.com/embed/LkDOmpvrzNQ"
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