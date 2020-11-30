<template>
  <div class="organizers-container">
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
      <div class="organizers-wrapper">
        <div class="organizers">
          <section class="section">
            <div class="title">
              <h1>Conference Directors</h1>
              <div class="small-line"></div>
            </div>
            <div class="flex-main">
              <div class="organizer">
                <img src="../assets/organizers/org-6.jpg" alt="organizer" />
                <h3>Prof. Malali Gowda</h3>
                <div class="country">
                  <img src="../assets/Flags/india.png" alt="country" />
                  <h4>India</h4>
                </div>
                <h4>Bengaluru Genomics Center</h4>
              </div>
              <div class="organizer">
                <img src="../assets/organizers/org-9.jpg" alt="organizer" />
                <h3>Prof. Dr. Gustavo Zubieta</h3>
                <div class="country">
                  <img src="../assets/Flags/bolivia.png" alt="country" />
                  <h4>Bolivia</h4>
                </div>
                <h4>High Altitude Pulmonary and Pathology Institute</h4>
              </div>
            </div>
          </section>
          <div class="line-main"></div>
          <section class="section">
            <div class="title">
              <h1>Conference Convenors</h1>
              <div class="small-line"></div>
            </div>
            <div class="flex-main">
              <div class="organizer">
                <img src="../assets/organizers/org-22.jpg" alt="organizer" />
                <h3>Dr. Pruthvi Chakravarthi</h3>
                <div class="country">
                  <img src="../assets/Flags/india.png" alt="country" />
                  <h4>India</h4>
                </div>
                <h4>Bengaluru Genomics Center</h4>
              </div>
              <div class="organizer">
                <img src="../assets/organizers/org-23.jpeg" alt="organizer" />
                <h3>Dr. Natalia Zubieta</h3>
                <div class="country">
                  <img src="../assets/Flags/bolivia.png" alt="country" />
                  <h4>Bolivia</h4>
                </div>
                <h4>High Altitude Pulmonary and Pathology Institute</h4>
              </div>
            </div>
          </section>
        </div>
        <div class="line"></div>
        <div class="organizers">
          <section class="section">
            <div class="title">
              <h1>Organizing Committe</h1>
              <div class="small-line"></div>
            </div>
            <div class="flex">
              <div class="organizer">
                <img src="../assets/organizers/org-24.jpg" alt="organizer" />
                <h3>Dr. Murray Epstein</h3>
                <div class="country">
                  <img src="../assets/Flags/usa.png" alt="country" />
                  <h4>USA</h4>
                </div>
                <h4>
                  Professor of Medicine, University of Miami Miller School of
                  Medicine
                </h4>
              </div>
              <div class="organizer">
                <img src="../assets/organizers/org-12.jpg" alt="organizer" />
                <h3>Prof. Kushal Das</h3>
                <div class="country">
                  <img src="../assets/Flags/india.png" alt="country" />
                  <h4>India</h4>
                </div>
                <h4>BLDE, UNESCO Academic Leader & Coordinator</h4>
              </div>
              <div class="organizer">
                <img src="../assets/organizers/org-18.jpg" alt="organizer" />
                <h3>Prof. Ivan Solarte Rodriguez</h3>
                <div class="country">
                  <img src="../assets/Flags/colombia.png" alt="country" />
                  <h4>Colombia</h4>
                </div>
                <h4>Professor Titular, Neumología Hospital Universitario</h4>
              </div>
              <div class="organizer">
                <img src="../assets/organizers/org-21.jpg" alt="organizer" />
                <h3>Dr. Alan Hargens</h3>
                <div class="country">
                  <img src="../assets/Flags/usa.png" alt="country" />
                  <h4>USA</h4>
                </div>
                <h4>
                  Professor and Director, Orthopaedic Lab at the University of
                  California
                </h4>
              </div>
              <div class="organizer">
                <img src="../assets/organizers/org-20.jpg" alt="organizer" />
                <h3>Prof. Frantisek Kolar</h3>
                <div class="country">
                  <img src="../assets/Flags/czech.png" alt="country" />
                  <h4>Czech Republic</h4>
                </div>
                <h4>Head Institute of Physiology Academy of Sciences</h4>
              </div>
              <div class="organizer">
                <img src="../assets/organizers/org-7.jpg" alt="organizer" />
                <h3>Dr. Benedito Honorio Machado</h3>
                <div class="country">
                  <img src="../assets/Flags/brazil.png" alt="country" />
                  <h4>Brazil</h4>
                </div>
                <h4>Professor of Physiology, Universidade de São Paulo</h4>
              </div>
              <div class="organizer">
                <img src="../assets/organizers/org-1.jpg" alt="organizer" />
                <h3>Dr. L. Gabriel Navar</h3>
                <div class="country">
                  <img src="../assets/Flags/usa.png" alt="country" />
                  <h4>USA</h4>
                </div>
                <h4>Professor & Chair, Tulane University School of Medicine</h4>
              </div>
              <div class="organizer">
                <img src="../assets/organizers/org-11.jpg" alt="organizer" />
                <h3>Dr. Roberto Accinelli</h3>
                <div class="country">
                  <img src="../assets/Flags/peru.png" alt="country" />
                  <h4>Peru</h4>
                </div>
                <h4>Director, Universidad Cayetano Heredia</h4>
              </div>
              <div class="organizer">
                <img src="../assets/organizers/org-14.jpg" alt="organizer" />
                <h3>Prof. Jan Marino Ramirez</h3>
                <div class="country">
                  <img src="../assets/Flags/usa.png" alt="country" />
                  <h4>USA</h4>
                </div>
                <h4>Director, Seattle Children’s Research Institute</h4>
              </div>

              <div class="organizer">
                <img src="../assets/organizers/org-15.jpg" alt="organizer" />
                <h3>Prof. Hamid Mobasheri</h3>
                <div class="country">
                  <img src="../assets/Flags/iran.png" alt="country" />
                  <h4>Iran</h4>
                </div>
                <h4>
                  Head of Lab Membrane Biophysics & Macromolecule, University of
                  Tehran
                </h4>
              </div>

              <div class="organizer">
                <img src="../assets/organizers/org-4.jpg" alt="organizer" />
                <h3>Prof. Augusto Ittig</h3>
                <div class="country">
                  <img src="../assets/Flags/argentina.png" alt="country" />
                  <h4>Argentina</h4>
                </div>
                <h4>Director, Iberoamerican Network of Digital Health</h4>
              </div>
              <div class="organizer">
                <img src="../assets/organizers/org-13.jpg" alt="organizer" />
                <h3>Dr. Matthias Dutschman</h3>
                <div class="country">
                  <img src="../assets/Flags/australia.png" alt="country" />
                  <h4>Australia</h4>
                </div>
                <h4>
                  The University of Melbourne Melbourne Neuroscience Institute
                </h4>
              </div>
              <div class="organizer">
                <img src="../assets/organizers/org-10.jpg" alt="organizer" />
                <h3>Oscar Murillo</h3>
                <div class="country">
                  <img src="../assets/Flags/usa.png" alt="country" />
                  <h4>USA</h4>
                </div>
                <h4>St. Lukes University Hospital</h4>
              </div>
              <div class="organizer">
                <img src="../assets/organizers/org-8.jpg" alt="organizer" />
                <h3>Prof. Thuppil Venkatesh</h3>
                <div class="country">
                  <img src="../assets/Flags/india.png" alt="country" />
                  <h4>India</h4>
                </div>
                <h4>Foundation for Quality India</h4>
              </div>
              <div class="organizer">
                <img src="../assets/organizers/org-19.jpg" alt="organizer" />
                <h3>Dr. Byron Canelos-Estrella</h3>
                <div class="country">
                  <img src="../assets/Flags/ecuador.png" alt="country" />
                  <h4>Ecuador</h4>
                </div>
                <h4>Hospital Metropolitano Quito</h4>
              </div>
              <div class="organizer">
                <img src="../assets/organizers/org-17.jpg" alt="organizer" />
                <h3>Prof. Jorge Soliz</h3>
                <div class="country">
                  <img src="../assets/Flags/canada.png" alt="country" />
                  <h4>Canada</h4>
                </div>
                <h4>Assistant Professor, Laval University</h4>
              </div>
              <div class="organizer">
                <img src="../assets/organizers/org-16.jpg" alt="organizer" />
                <h3>Dr. Jose Antonio Carmona</h3>
                <div class="country">
                  <img src="../assets/Flags/mexico.png" alt="country" />
                  <h4>Mexico</h4>
                </div>
                <h4>Hospital Juarez</h4>
              </div>
              <div class="organizer">
                <img src="../assets/organizers/org-3.jpg" alt="organizer" />
                <h3>Dr. Caroline Dalton</h3>
                <div class="country">
                  <img src="../assets/Flags/sa.png" alt="country" />
                  <h4>South Africa</h4>
                </div>
                <h4>University of Cape Town</h4>
              </div>
              <div class="organizer">
                <img src="../assets/organizers/org-5.jpg" alt="organizer" />
                <h3>Michael Moretti</h3>
                <div class="country">
                  <img src="../assets/Flags/usa.png" alt="country" />
                  <h4>USA</h4>
                </div>
                <h4>Anthropologist Washington</h4>
              </div>
              <div class="organizer">
                <img src="../assets/organizers/org-2.jpg" alt="organizer" />
                <h3>Dr. Giuseppe Miserocchi</h3>
                <div class="country">
                  <img src="../assets/Flags/italy.png" alt="country" />
                  <h4>Italy</h4>
                </div>
                <h4>
                  Department of Medicine and Surgery, Università Milano Bicocca
                </h4>
              </div>
              <div class="organizer">
                <img src="../assets/organizers/org-39.jpg" alt="organizer" />
                <h3>Lucrecia De Urioste</h3>
                <div class="country">
                  <img src="../assets/Flags/bolivia.png" alt="country" />
                  <h4>Bolivia</h4>
                </div>
                <h4>High Altitude Pulmonary and Pathology Institute</h4>
              </div>
              <div class="organizer">
                <img src="../assets/organizers/org-41.jpg" alt="organizer" />
                <h3>Dr. Rosayda Zubieta</h3>
                <div class="country">
                  <img src="../assets/Flags/bolivia.png" alt="country" />
                  <h4>Bolivia</h4>
                </div>
                <h4>Director, IBESE Mental Health Institute Bolivia</h4>
              </div>
            </div>
          </section>
        </div>
        <div class="line"></div>
        <div class="organizers">
          <section class="section">
            <div class="title">
              <h1>Executive Team</h1>
              <div class="small-line"></div>
            </div>
            <div class="flex">
              <div class="organizer">
                <img src="../assets/organizers/org-65.jpg" alt="organizer" />
                <h3>Gaurav V</h3>
                <div class="country">
                  <img src="../assets/Flags/india.png" alt="country" />
                  <h4>India</h4>
                </div>
                <h4>Website Designer & Developer</h4>
              </div>
              <div class="organizer">
                <img src="../assets/organizers/org-85.jpg" alt="organizer" />
                <h3>Fatima Tuz Zehra</h3>
                <div class="country">
                  <img src="../assets/Flags/india.png" alt="country" />
                  <h4>India</h4>
                </div>
                <h4>
                  Secretariat, Communications, Streaming, Hackathon, Social
                  Media and Website Content Co-ordinator
                </h4>
              </div>
              <div class="organizer">
                <img src="../assets/organizers/org-66.jpg" alt="organizer" />
                <h3>Mahesh Kumar</h3>
                <div class="country">
                  <img src="../assets/Flags/india.png" alt="country" />
                  <h4>India</h4>
                </div>
                <h4>Hosting, Schedule & Speakers co-ordinator</h4>
              </div>
              <div class="organizer">
                <img src="../assets/organizers/org-67.jpeg" alt="organizer" />
                <h3>Pranesh Rangarajan</h3>
                <div class="country">
                  <img src="../assets/Flags/india.png" alt="country" />
                  <h4>India</h4>
                </div>
                <h4>Volunteer - Hackathon Co-ordinator</h4>
              </div>
              <div class="organizer">
                <img src="../assets/organizers/org-74.jpeg" alt="organizer" />
                <h3>Yeshua Pena Lilo</h3>
                <div class="country">
                  <img src="../assets/Flags/bolivia.png" alt="country" />
                  <h4>Bolivia</h4>
                </div>
                <h4>Ads & Social Media Manager</h4>
              </div>
              <div class="organizer">
                <img src="../assets/organizers/org-69.jpg" alt="organizer" />
                <h3>Beatriz Pineiro Pinelo and Team "Colectivo Marketero"</h3>
                <div class="country">
                  <img src="../assets/Flags/bolivia.png" alt="country" />
                  <h4>Bolivia</h4>
                </div>
                <h4>Digital Marketing</h4>
              </div>

              <div class="organizer">
                <img src="../assets/organizers/org-73.jpeg" alt="organizer" />
                <h3>Rafaela Zubieta-DeUrioste</h3>
                <div class="country">
                  <img src="../assets/Flags/bolivia.png" alt="country" />
                  <h4>Bolivia</h4>
                </div>
                <h4>Recordings and Video Editing</h4>
              </div>

              <div class="organizer">
                <img src="../assets/organizers/org-71.jpeg" alt="organizer" />
                <h3>Dr. Ajeet Kumar</h3>
                <div class="country">
                  <img src="../assets/Flags/india.png" alt="country" />
                  <h4>India</h4>
                </div>
                <h4>Volunteer Social Media, Hackathon</h4>
              </div>
              <div class="organizer">
                <img src="../assets/organizers/org-70.jpeg" alt="organizer" />
                <h3>Dr. Shadma Shahin</h3>
                <div class="country">
                  <img src="../assets/Flags/india.png" alt="country" />
                  <h4>India</h4>
                </div>
                <h4>Volunteer - Hackathon</h4>
              </div>

              <div class="organizer">
                <img src="../assets/organizers/org-72.jpeg" alt="organizer" />
                <h3>Pribin K Benny</h3>
                <div class="country">
                  <img src="../assets/Flags/india.png" alt="country" />
                  <h4>India</h4>
                </div>
                <h4>Volunteer - Invitations, Hackathon</h4>
              </div>

              <div class="organizer">
                <img
                  src="../assets/organizers/people.svg"
                  class="no-shadow"
                  alt="organizer"
                />
                <h3>M. O. Farooque</h3>
                <div class="country">
                  <img src="../assets/Flags/india.png" alt="country" />
                  <h4>India</h4>
                </div>
                <h4>Event Hosting</h4>
              </div>
              <div class="organizer">
                <img
                  src="../assets/organizers/people.svg"
                  class="no-shadow"
                  alt="organizer"
                />
                <h3>Abhinaya</h3>
                <div class="country">
                  <img src="../assets/Flags/india.png" alt="country" />
                  <h4>India</h4>
                </div>
                <h4>Volunteer - Hackathon</h4>
              </div>
              <div class="organizer">
                <img
                  src="../assets/organizers/people.svg"
                  class="no-shadow"
                  alt="organizer"
                />
                <h3>Faba Susan Santosh</h3>
                <div class="country">
                  <img src="../assets/Flags/india.png" alt="country" />
                  <h4>India</h4>
                </div>
                <h4>Volunteer - Invitations, Hackathon</h4>
              </div>
            </div>
          </section>
        </div>
        <div class="line"></div>
        <div class="institutions">
          <div class="title">
            <h1>Organizing Institutions</h1>
            <div class="small-line"></div>
          </div>
          <div class="institute">
            <img src="../assets/organizers/bcg-1.png" alt="logo" />
            <p>
              Bengaluru Genomics Center (BGC) is built on high quality science
              base for active collaborations/alliances with right partners, who
              have passion in the areas of genomics. We contribute to growth of
              life science and genomics science by providing genomic services
              for academia & industry and assist them in their ongoing
              investigations. We are proud to harbor game-changing technology,
              Genomics by transforming biological research in India and beyond.
              Bengaluru Genomics Center (BGC) is aiming to transform COVID
              research, medicine, health-care, life science and agriculture
              research through Genomics and functional genomics approaches. And
              to reduce the gap between academic research and technology
              innovation through partnership and alliances.
            </p>
          </div>
          <div class="institute">
            <img src="../assets/organizers/ippa-1.png" alt="logo" />
            <p>
              The High Altitude Pulmonary and Pathology Institute (HAPPI -
              IPPA’s) mission is to provide the best quality health care
              services to high altitude visitors and residents, and worldwide
              training on hypoxia understanding and handling. We are interested
              in developing continuous research and training on the
              pathophysiology and the management of sportsmen, aerospace
              medicine, diving, acute, intermittent or chronic hypoxia diseases,
              as well as any other circumstance where hypoxia comes into place.
              Currently, our aim is to improve COVID-19’s understanding on it’s
              hypoxic impact and the proposal of several treatments.
            </p>
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
.organizers-container {
  min-height: 100vh;
  background-image: $background-1;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0.5rem 1rem;
  .organizers-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    .organizers {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .line-main {
        @include iphone {
          width: 100%;
          height: 1px;
          background: gray;
        }
      }
      @include iphone {
        flex-wrap: wrap;
      }
      .section {
        width: 100%;
        text-align: center;
        .title {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          h1 {
            font-size: xx-large;
            color: #333;
            font-weight: lighter;
            margin-bottom: 0;
          }
          .small-line {
            width: 8%;
            height: 3px;
            background: $primary;
            margin: 1.2rem 0 2.5rem 0;
            text-align: center;
          }
        }
        .flex,
        .flex-main {
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-wrap: wrap;
          //margin-top: 2rem;
          .organizer {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 300px;
            height: 22rem;
            // background-image: $gradient;
            margin: 1rem 0;
            text-align: center;
            .no-shadow {
              box-shadow: none;
            }
            h3,
            h4 {
              margin: 0;
            }
            h3 {
              color: darken($primary, 10%);
              margin: 0.5rem 0;
            }
            h4 {
              font-weight: lighter;
            }
            img {
              width: 210px;
              height: 210px;
              border-radius: 0.5rem;
              margin-bottom: 0.8rem;
              box-shadow: 5px 8px 10px rgba(0, 0, 0, 0.25);
            }
            .country {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 0 0 0.5rem 0;
              img {
                width: 30px;
                height: 20px;
                border-radius: 0;
                margin-right: 0.5rem;
                margin-bottom: 0;
              }
            }
          }
        }
        .flex-main {
          justify-content: center;
        }
      }
    }
    .line {
      width: 100%;
      height: 1px;
      background: gray;
      margin: 1rem 0;
    }
    .institutions {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
          font-size: xx-large;
          color: #333;
          font-weight: lighter;
          margin-bottom: 0;
          @include iphone {
            font-size: x-large;
          }
        }
        .small-line {
          width: 8%;
          height: 3px;
          background: $primary;
          margin: 1.2rem 0 2.5rem 0;
          text-align: center;
        }
      }
      .institute {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 1rem;
        @include iphone {
          flex-wrap: wrap;
          justify-content: center;
        }
        img {
          width: 200px;
          height: 200px;
        }
        p {
          padding: 0.5rem 2rem;
          line-height: 1.8rem;
        }
      }
    }
  }
}
</style>