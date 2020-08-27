<template>
  <div class="final-speakers">
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
      <div class="speaker-container">
        <div @click="expandAbstract(1)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-4.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/argentina.png" alt="flag" />
              <span>Argentina</span>
            </div>
            <h3>Dr. Augusto Ittig</h3>
            <h4>Director, Iberoamerican Network of Digital health</h4>
          </div>
        </div>
        <div @click="expandAbstract(2)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-43.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/australia.png" alt="flag" />
              <span>Australia</span>
            </div>
            <h3>Dr. Lindsay Brown</h3>
            <h4>University of Southern Queensland Toowoomba</h4>
          </div>
        </div>
        <div @click="expandAbstract(3)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-59.jpeg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/austria.png" alt="flag" />
              <span>Austria</span>
            </div>
            <h3>Prof. Thomas Binder,</h3>
            <h4>Cardiologist Vienna General Hospital</h4>
          </div>
        </div>
        <div @click="expandAbstract(4)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-9.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/bolivia.png" alt="flag" />
              <span>Bolivia</span>
            </div>
            <h3>Prof. Gustavo Zubieta</h3>
            <h4>Head, High Altitude Pulmonary and Pathology Institute</h4>
          </div>
        </div>
        <div @click="expandAbstract(5)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-62.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/bolivia.png" alt="flag" />
              <span>Bolivia</span>
            </div>
            <h3>Dr. Gabriela Elva Urquieta</h3>
            <h4>Hospital Agramont, El Alto</h4>
          </div>
        </div>
        <div @click="expandAbstract(6)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-36.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/bolivia.png" alt="flag" />
              <span>Bolivia</span>
            </div>
            <h3>Antonio Viruez</h3>
            <h4>Hospital Del Norte, El Alto</h4>
          </div>
        </div>
        <div @click="expandAbstract(7)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-32.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/canada.png" alt="flag" />
              <span>Canada</span>
            </div>
            <h3>Prof. Jim Russel</h3>
            <h4>Prof. of Med., University of British Columbia</h4>
          </div>
        </div>
        <div @click="expandAbstract(8)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-28.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/canada.png" alt="flag" />
              <span>Canada</span>
            </div>
            <h3>Dr. Christian Arias Reyes</h3>
            <h4>Institut Universitaire de Cardiologie, Université Laval</h4>
          </div>
        </div>
        <div @click="expandAbstract(9)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-52.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/chile.png" alt="flag" />
              <span>Chile</span>
            </div>
            <h3>Dr. Mario Canitrot</h3>
            <h4>Head NeuroICU INDISA Clinic</h4>
          </div>
        </div>
        <div @click="expandAbstract(10)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-35.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/colombia.png" alt="flag" />
              <span>Colombia</span>
            </div>
            <h3>Dr. Milena Garcia</h3>
            <h4>Pneumology Epidemiology Hospital, Universidad Javeriana</h4>
          </div>
        </div>
        <div @click="expandAbstract(11)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-19.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/ecuador.png" alt="flag" />
              <span>Ecuador</span>
            </div>
            <h3>Byron Canelos Estrella</h3>
            <h4>Pulmonologist, Hospital Metropolitano</h4>
          </div>
        </div>
        <div @click="expandAbstract(12)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-44.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/ethiopia.png" alt="flag" />
              <span>Ethiopia</span>
            </div>
            <h3>Dr. Girma Ababi</h3>
            <h4>LIYANA Healthcare, Vice President for the National Ethiopian Private Health Sector</h4>
          </div>
        </div>
        <div @click="expandAbstract(13)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-61.jpeg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/germany.png" alt="flag" />
              <span>Germany</span>
            </div>
            <h3>Martin Begemann</h3>
            <h4>Max Planck Institute for Experimental Medicine</h4>
          </div>
        </div>
        <div @click="expandAbstract(14)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-6.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/india.png" alt="flag" />
              <span>India</span>
            </div>
            <h3>Prof. Malali Gowda</h3>
            <h4>Head, Bengaluru Genomics Center</h4>
          </div>
        </div>
        <div @click="expandAbstract(15)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-63.jpeg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/india.png" alt="flag" />
              <span>India</span>
            </div>
            <h3>Dr. Prachi Parvatikar</h3>
            <h4>Dept of Physiology, BLDE University</h4>
          </div>
        </div>
        <div @click="expandAbstract(16)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-60.jpeg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/india.png" alt="flag" />
              <span>India</span>
            </div>
            <h3>V. Ravi</h3>
            <h4>National Institute of Mental Health and Neuro-Science</h4>
          </div>
        </div>
        <div @click="expandAbstract(17)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-57.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/india.png" alt="flag" />
              <span>India</span>
            </div>
            <h3>Utpal Tatu</h3>
            <h4>Indian Institute of Science</h4>
          </div>
        </div>
        <div @click="expandAbstract(18)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-48.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/india.png" alt="flag" />
              <span>India</span>
            </div>
            <h3>Dr. Sathyanarayan M.S.</h3>
            <h4>State Level Virus Research & Diagnostic Laboratory</h4>
          </div>
        </div>
        <div @click="expandAbstract(19)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-45.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/india.png" alt="flag" />
              <span>India</span>
            </div>
            <h3>Dr. Chitra Phatabiraman</h3>
            <h4>National Institute of Mental Health and Neuro-Sciences</h4>
          </div>
        </div>
        <div @click="expandAbstract(20)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-8.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/india.png" alt="flag" />
              <span>India</span>
            </div>
            <h3>Prof. Venkatesh Thuppil</h3>
            <h4>Foundation for Quality India</h4>
          </div>
        </div>
        <div @click="expandAbstract(21)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-26.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/india.png" alt="flag" />
              <span>India</span>
            </div>
            <h3>Dr. Gaurav Sharma</h3>
            <h4>Institute of Bioinformatics and Applied Biotechnology</h4>
          </div>
        </div>
        <div @click="expandAbstract(22)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-54.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/india.png" alt="flag" />
              <span>India</span>
            </div>
            <h3>Vaidya P. Rammanohar</h3>
            <h4>Research Director, Amrita School of Ayurveda, Kollam, Kerala</h4>
          </div>
        </div>
        <div @click="expandAbstract(23)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-55.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/india.png" alt="flag" />
              <span>India</span>
            </div>
            <h3>Sanjay Jain</h3>
            <h4>Dept. of Orthopaedics and Traumatology</h4>
          </div>
        </div>
        <div @click="expandAbstract(24)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-12.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/india.png" alt="flag" />
              <span>India</span>
            </div>
            <h3>Prof. Kushal Das</h3>
            <h4>BLDE, UNESCO Academic Leader & Coordinator</h4>
          </div>
        </div>
        <div @click="expandAbstract(25)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-53.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/india.png" alt="flag" />
              <span>India</span>
            </div>
            <h3>Dr. Meera Sudheer</h3>
            <h4>BAMS. MD team dhanvantari, shreehareeyam ayurveda</h4>
          </div>
        </div>
        <div @click="expandAbstract(26)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-29.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/india.png" alt="flag" />
              <span>India</span>
            </div>
            <h3>Dr. Imtiyaz Hassan</h3>
            <h4>Assistant Professor, Centre for Interdisciplinary Research in Basic Sciences</h4>
          </div>
        </div>
        <div @click="expandAbstract(27)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-56.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/india.png" alt="flag" />
              <span>India</span>
            </div>
            <h3>Prof. Sudhir Krishna</h3>
            <h4>NCBS, TIFR</h4>
          </div>
        </div>
        <div @click="expandAbstract(28)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-15.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/iran.png" alt="flag" />
              <span>Iran</span>
            </div>
            <h3>Prof. Hamid Mobasheri</h3>
            <h4>Institute of Biochemistry and Biophysics, University of Tehran, Iran, UNESCO Intetacadrmic Partnership (AP)</h4>
          </div>
        </div>
        <div @click="expandAbstract(29)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-2.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/italy.png" alt="flag" />
              <span>Italy</span>
            </div>
            <h3>Dr. Giuseppe Miserocchi</h3>
            <h4>Universita Milano Biccoca</h4>
          </div>
        </div>
        <div @click="expandAbstract(30)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-34.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/italy.png" alt="flag" />
              <span>Italy</span>
            </div>
            <h3>Dr. Paolo Pelosi</h3>
            <h4>University of Genoa</h4>
          </div>
        </div>
        <div @click="expandAbstract(31)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-50.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/malaysia.png" alt="flag" />
              <span>Malaysia</span>
            </div>
            <h3>Su Datt Lam</h3>
            <h4>Department of Applied Physics, Faculty of Science and Technology</h4>
          </div>
        </div>
        <div @click="expandAbstract(32)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-16.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/mexico.png" alt="flag" />
              <span>Mexico</span>
            </div>
            <h3>Dr. Jose Antonio Carmona</h3>
            <h4>Hospital Juarez</h4>
          </div>
        </div>
        <div @click="expandAbstract(33)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-40.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/mexico.png" alt="flag" />
              <span>Mexico</span>
            </div>
            <h3>Dr. Alberto Lopez</h3>
            <h4>Hospital Juarez</h4>
          </div>
        </div>
        <div @click="expandAbstract(34)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-30.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/mexico.png" alt="flag" />
              <span>Mexico</span>
            </div>
            <h3>Dr. Felipe Montelongo</h3>
            <h4>Intensivist, Hospital General de Ecatepec Las Americas</h4>
          </div>
        </div>
        <div @click="expandAbstract(35)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-11.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/peru.png" alt="flag" />
              <span>Peru</span>
            </div>
            <h3>Dr. Roberto Accinelli</h3>
            <h4>Director, Universidad Cayetano Heredia</h4>
          </div>
        </div>
        <div @click="expandAbstract(36)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-33.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/peru.png" alt="flag" />
              <span>Peru</span>
            </div>
            <h3>Walter Calderon</h3>
            <h4>Intensivist, Seguro Social, Huancayo</h4>
          </div>
        </div>
        <div @click="expandAbstract(37)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-27.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/sa.png" alt="flag" />
              <span>South Africa</span>
            </div>
            <h3>Prof. Ross Hofmeyr</h3>
            <h4>Associate Professor, University of Cape Town, and WildMedix</h4>
          </div>
        </div>
        <div @click="expandAbstract(38)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-46.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/sa.png" alt="flag" />
              <span>South Africa</span>
            </div>
            <h3>Dr. Clint Hendrikse</h3>
            <h4>Lecturer and Joint staff, Division of Emergency Medicine, University of Cape Town</h4>
          </div>
        </div>
        <div @click="expandAbstract(39)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-25.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/sa.png" alt="flag" />
              <span>South Africa</span>
            </div>
            <h3>Dr. Usha Lalla</h3>
            <h4>Head of Tygerberg Hospital ICU</h4>
          </div>
        </div>
        <div @click="expandAbstract(40)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-31.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/uk.png" alt="flag" />
              <span>UK</span>
            </div>
            <h3>Andrew Pollard</h3>
            <h4>Oxford University</h4>
          </div>
        </div>
        <div @click="expandAbstract(41)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-24.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/usa.png" alt="flag" />
              <span>USA</span>
            </div>
            <h3>Dr. Murray Epstein</h3>
            <h4>Professor of Medicine, University of Miami Miller School of Medicine</h4>
          </div>
        </div>
        <div @click="expandAbstract(42)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-10.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/usa.png" alt="flag" />
              <span>USA</span>
            </div>
            <h3>Dr. Oscar Murillo</h3>
            <h4>St. Lukes University</h4>
          </div>
        </div>
        <div @click="expandAbstract(43)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-47.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/usa.png" alt="flag" />
              <span>USA</span>
            </div>
            <h3>Prof. Susanne Doblecki-Lewis</h3>
            <h4>Associate Professor of Clinical Medicine</h4>
          </div>
        </div>
        <div @click="expandAbstract(44)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-37.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/usa.png" alt="flag" />
              <span>USA</span>
            </div>
            <h3>Dr. Robert Gallo</h3>
            <h4>Director of the Institute of Human Virology</h4>
          </div>
        </div>
        <div @click="expandAbstract(45)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-49.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/usa.png" alt="flag" />
              <span>USA</span>
            </div>
            <h3>Dr. Christine Ebert-Santos</h3>
            <h4>Head, Ebert Family Clinic</h4>
          </div>
        </div>
        <div @click="expandAbstract(46)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-58.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/usa.png" alt="flag" />
              <span>USA</span>
            </div>
            <h3>Bob Kuhnhenn</h3>
            <h4>Family Medicine Physician</h4>
          </div>
        </div>
        <div @click="expandAbstract(47)" class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-51.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/usa.png" alt="flag" />
              <span>USA</span>
            </div>
            <h3>Prof. Gordon Dickinson</h3>
            <h4>University of Miami Miller School of Medicine</h4>
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
        h1: "Speakers",
        h4:
          "List of all the prestigious speakers presenting at our conference ordered by country",
        src: "presentation.svg"
      }
    };
  },
  methods: {
    expandAbstract(speaker) {
      console.log(speaker);
      /*
      this.$router.push({
        name: "SpeakerAbstracts",
        params: {
          speaker: speaker
        }
      });*/
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/colors";
.final-speakers {
  min-height: 100vh;
  background-image: $background-1;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0.5rem 1rem;
  .speaker-container {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .card {
      width: 16rem;
      height: 26rem;
      margin: 1.5rem;
      display: grid;
      grid-template-rows: 16rem 10rem;
      border-radius: 0.8rem;
      background: white;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
      overflow: hidden;
      background-image: $gradient;
      .img-cont {
        overflow: hidden;
        //background-image: $gradient;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 16rem;
          height: 16rem;
        }
        .svg {
          width: 120px;
          height: 120px;
        }
      }
      .body {
        background: rgba(black, 0.5);
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 0.5rem;
        .country {
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            margin: 0 0.5rem;
            color: lighten($primary, 20%);
          }
        }
        h3,
        h4 {
          margin: 0;
          font-weight: lighter;
          color: lighten($primary, 20%);
        }
        h3 {
          font-weight: bold;
          padding: 0.5rem;
          margin: 0;
          color: white;
        }
      }
    }
  }
}
</style>