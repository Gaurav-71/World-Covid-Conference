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
            <img src="../assets/Speakers/Prof. Venkatesh Thuppil.jpg" alt="mg" />
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
            <img src="../assets/Speakers/Prof. Gustavo Zubieta-Calleja.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/bolivia.png" alt="flag" />
              <span>Bolivia</span>
            </div>
            <h3>Prof. Gustavo Zubieta</h3>
            <h4>High Altitude Pulmonary and Pathology Institute</h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/Speakers/Dr. Augusto Ittig1.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/argentina.png" alt="flag" />
              <span>Argentina</span>
            </div>
            <h3>Dr. Augusto Ittig</h3>
            <h4>Iberoamerican Network of Digital health</h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/Speakers/Prof. Malali Gowda1.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/india.png" alt="flag" />
              <span>India</span>
            </div>
            <h3>Prof. Malali Gowda</h3>
            <h4>Bengaluru Genomics Center</h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/Speakers/kushal.jpg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/india.png" alt="flag" />
              <span>India</span>
            </div>
            <h3>Prof. Kushal Das </h3>
            <h4>BLDE, UNESCO Academic Leader & Coordinator </h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/Speakers/Dr. Giuseppe Miserocchi1.jpg" alt="mg" />
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
            <img src="../assets/Speakers/oscar.png" alt="mg" />
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
            <img src="../assets/Heading/presentation.svg" class="svg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/canada.png" alt="flag" />
              <span>Canada</span>
            </div>
            <h3>Prof. Jorge Soliz</h3>
            <h4></h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/Heading/presentation.svg" class="svg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/australia.png" alt="flag" />
              <span>Australia</span>
            </div>
            <h3>Dr. Mathias Dutschmann </h3>
            <h4></h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/Heading/presentation.svg" class="svg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/mexico.png" alt="flag" />
              <span>Mexico</span>
            </div>
            <h3>Dr. Jose Antonio Carmona</h3>
            <h4></h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/Heading/presentation.svg" class="svg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/sa.png" alt="flag" />
              <span>South Africa</span>
            </div>
            <h3>Dr. Caroline Dalton</h3>
            <h4></h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/Heading/presentation.svg" class="svg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/ecuador.png" alt="flag" />
              <span>Ecuador</span>
            </div>
            <h3>Dr. Byron Canelos-Estrella </h3>
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
            <h3>Prof. Jan Marino Ramirez </h3>
            <h4></h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/Heading/presentation.svg" class="svg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/peru.png" alt="flag" />
              <span>Peru</span>
            </div>
            <h3>Dr. Roberto Accinelli</h3>
            <h4></h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/Heading/presentation.svg" class="svg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/colombia.png" alt="flag" />
              <span>Colombia</span>
            </div>
            <h3>Prof. Ivan Solarte Rodriguez</h3>
            <h4></h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/Heading/presentation.svg" class="svg" alt="mg" />
          </div>
          <div class="body">
            <div class="country">
              <img src="../assets/Flags/iran.png" alt="flag" />
              <span>Iran</span>
            </div>
            <h3>Prof. Hamid Mobasheri</h3>
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
            <h3>Dr. Murray Epstein</h3>
            <h4></h4>
          </div>
        </div>
        <div class="card">
          <div class="img-cont">
            <img src="../assets/Heading/presentation.svg" class="svg" alt="mg" />
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
      grid-template-rows: 70% 30%;
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
          width: 100%;
        }
        .svg {
          width: 120px;
          height: 120px;
        }
      }
      .body {
        //background-image: $gradient;
        background: rgba(black, 0.5);
        text-align: center;
        .country {
          margin-top: 0.65rem;
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