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
        <div class="card">
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
        <div class="card">
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
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-15.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/iran.png" alt="flag" />
              <span>Iran</span>
            </div>
            <h3>Prof. Hamid Mobasheri</h3>
            <h4>Head of Lab Membrane Biophysics & Macromolecule, University of Tehran</h4>
          </div>
        </div>

        <div class="card">
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
        <div class="card">
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

        <div class="card">
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

        <div class="card">
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
        <div class="card">
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
        <div class="card">
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

        <div class="card">
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
        <div class="card">
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
        <div class="card">
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
        <div class="card">
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

        <div class="card">
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

        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-29.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/india.png" alt="flag" />
              <span>India</span>
            </div>
            <h3>Dr. Imtaiyaz Hassan</h3>
            <h4>Jamia Millia Islamia</h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-28.jpg" alt="mg" />
          </div>
          <div class="body">
            <!--<div class="country">
              <img src="../assets/Flags/iran.png" alt="flag" />
              <span></span>
            </div>-->
            <h3>Dr. Christian Arias Reyes</h3>
            <h4></h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-30.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/mexico.png" alt="flag" />
              <span>Mexico</span>
            </div>
            <h3>Dr. Felipe Montelongo</h3>
            <h4></h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/Heading/presentation.svg" class="svg" alt="mg" />
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
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-32.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/canada.png" alt="flag" />
              <span>Canada</span>
            </div>
            <h3>Prof. Jim Russel</h3>
            <h4></h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/Heading/presentation.svg" class="svg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/usa.png" alt="flag" />
              <span>USA</span>
            </div>
            <h3>Dr. Robert Gallo</h3>
            <h4></h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-31.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/uk.png" alt="flag" />
              <span>UK</span>
            </div>
            <h3>Andrew Pollard</h3>
            <h4></h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-34.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <!--<img src="../assets/Flags/uk.png" alt="flag" />
              <span>UK</span>-->
            </div>
            <h3>Paolo Pelosi</h3>
            <h4></h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-35.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/colombia.png" alt="flag" />
              <span>Colombia</span>
            </div>
            <h3>Dr. Milena Garcia</h3>
            <h4></h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-36.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/bolivia.png" alt="flag" />
              <span>Bolivia</span>
            </div>
            <h3>Antonio Viruez</h3>
            <h4></h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/organizers/org-33.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/peru.png" alt="flag" />
              <span>Peru</span>
            </div>
            <h3>Walter Calderon</h3>
            <h4></h4>
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
        h4: "List of all the reputed speakers presenting at our conference",
        src: "presentation.svg"
      }
    };
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