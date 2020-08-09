<template>
  <div class="organizers">
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
      <div class="organizer-container">
        <h1>Conference Directors</h1>
        <div class="directors-container">
          <div class="director">
            <img src="../assets/Speakers/Prof. Gustavo Zubieta-Calleja.jpg" alt />
            <div class="detail">
              <h2>Prof. Dr. Gustavo Zubieta– Calleja</h2>
              <p>
                Prof. Dr. Gustavo Zubieta– Calleja
                Director, High Altitude Pulmonary and Pathology Institute, (HAPPI-IPPA),
                La Paz, Bolivia, South America
              </p>
            </div>
          </div>
          <div class="director">
            <img src="../assets/Speakers/Prof. Malali Gowda.jpg" alt />
            <div class="detail">
              <h2>Prof. Malali Gowda</h2>
              <p>Director, Bengaluru Genomics Center, (BGC) Bengaluru, India</p>
            </div>
          </div>
        </div>
        <h1>Conference Convenors</h1>
        <div class="convenor-container">
          <div class="convenor">
            <h2>Dr Pruthvi Chakravarthi T</h2>
            <p>
              Chief Executive Officer,
              Bengaluru Genomics Center, (BGC) , Bengaluru, India
            </p>
          </div>
          <div class="convenor">
            <h2>Dr. Natalia Zubieta-DeUrioste</h2>
            <p>
              High Altitude Pulmonary and Pathology Institute, (HAPPI-IPPA),
              La Paz, Bolivia, South America
            </p>
          </div>
        </div>
        <h1>Organizing Committee</h1>
        <div class="committee-container">
          <ul>
            <li>Prof. Thuppil Venkatesh (India)</li>
            <li>Prof. Kushal Das (India)</li>
            <li>Prof. Augusto Ittig (Argentina)</li>
            <li>Dr. Giuseppe Miserocchi (Italy)</li>
            <li>Prof. Jorge Soliz (Canada)</li>
            <li>Dr. Mathias Dutschmann(Australia)</li>
            <li>Dr. Oscar Murillo (USA)</li>
            <li>Dr. Jose Antonio Carmona (Mexico)</li>
            <li>Dr. Caroline Dalton (South Africa)</li>
            <li>Prof. Frantisek Kolar (Czech Republic)</li>
            <li>Dr. Byron Canelos-Estrella (Ecuador)</li>
            <li>Prof. Benedito Honorio Machado (Brazil)</li>
            <li>Prof. Jan Marino Ramirez (USA)</li>
            <li>Dr. Roberto Accinelli (Peru)</li>
          </ul>
        </div>
        <h1>Organizing Institutions</h1>
        <div class="institute">
          <div class="name">
            <img src="../assets/organizers/bcg.png" alt="logo" />
          </div>
          <p>
            Bengaluru Genomics Center (BGC) is built on high quality science base for active collaborations/alliances with right partners, who have passion in the areas of genomics. We contribute to growth of life science and genomics science by providing genomic services for academia & industry and assist them in their ongoing investigations. We are proud to harbor game-changing technology, Genomics by transforming biological research in India and beyond.
            Bengaluru Genomics Center (BGC) is aiming to transform COVID research, medicine, health-care, life science and agriculture research through Genomics and functional genomics approaches. And to reduce the gap between academic research and technology innovation through partnership and alliances.
          </p>
        </div>
        <div class="institute">
          <div class="name">
            <img src="../assets/organizers/ippa.jpg" alt="logo" class="ippa" />
          </div>
          <p>
            The High Altitude Pulmonary and Pathology Institute (HAPPI - IPPA’s) mission is to provide the best quality health care services to high altitude visitors and residents, and worldwide training on hypoxia understanding and handling.
            We are interested in developing continuous research and training on the pathophysiology and the management of sportsmen, aerospace medicine, diving, acute, intermittent or chronic hypoxia diseases, as well as any other circumstance where hypoxia comes into place.
            Currently, our aim is to improve COVID-19’s understanding on it’s hypoxic impact and the proposal of several treatments.
          </p>
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
        h1: "Organizers",
        h4: "List of all the organizers who have made this event possible",
        src: "organization.svg"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/colors";
.organizers {
  min-height: 100vh;
  background-image: $background-1;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0.5rem 1rem;
  .organizer-container {
    padding: 0 1rem;
    h1 {
      color: $primary;
      font-weight: lighter;
    }
    h2 {
      color: darken($primary, 20%);
      font-weight: lighter;
    }
    .directors-container {
      width: 100%;
      display: flex;
      justify-content: space-around;
      @include iphone{
        flex-wrap: wrap;
        justify-content: center;
      }
      .director {
        //width: 50%;
        margin-top: 1rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-basis: 45%;
        @include iphone{
          flex-basis: 100%;
          justify-content: center;
          flex-wrap: wrap;
        }
        img {
          width: 12rem;
          height: 12rem;
          border-radius: 50%;
          margin: 0 2rem 0 0;
        }
      }
    }
    .convenor-container {
      margin-left: 2rem;
      h2 {
        margin-bottom: 0rem;
      }
    }
    .institute {
      display: grid;
      grid-template-columns: 15% 85%;
      margin-bottom: 1rem;
      justify-content: flex-start;
      align-items: center;
      @include iphone{
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      p {
        margin-top: 0;
      }
      .name {
        display: flex;
        justify-content: center;
        img {
          width: 200px;
        }
        .ippa {
          width: 120px;
        }
      }
    }
  }
}
</style>