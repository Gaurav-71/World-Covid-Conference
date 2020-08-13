<template>
  <footer class="footer">
    <div class="company">
      <div class="bgc">
        <div class="image-cont">
          <img src="../assets/Header/bcg-logo.png" alt="logo" />
        </div>
        <h3>Bengaluru Genomics Centre</h3>
        <ul style="list-style-type: none;">
          <li>
            <i class="fa fa-phone" aria-hidden="true" style="margin:10px; color:white"></i> +91-6364335551
          </li>
          <li>
            <i class="fa fa-globe" aria-hidden="ture" style="margin:10px; color:white"></i>
            <a href="https://www.bgc-genomics.com" target="_blank">www.bgc-genomics.com</a>
          </li>
          <li>
            <a href="https://www.instagram.com/bengalurugenomics/" target="_blank">
              <i
                class="fa fa-instagram"
                aria-hidden="true"
                style=" margin:15px 15px 15px 10px; color:white"
              ></i>
            </a>
            <a href="https://facebook.com/bengaluru.genomics.center" target="_blank">
              <i class="fa fa-facebook" aria-hidden="true" style=" margin:15px; color:white"></i>
            </a>
            <a href="https://www.linkedin.com/in/bengaluru-genomics-center" target="_blank">
              <i class="fa fa-linkedin" aria-hidden="ture" style=" margin:15px; color:white"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="happi">
        <div class="image-cont">
          <img src="../assets/Header/ippa-logo.png" alt="logo" />
        </div>
        <h3>High Altitude Pulmonary and Pathology Institute</h3>
        <ul style="list-style-type: none;">
          <li>
            <i class="fa fa-phone" aria-hidden="true" style="margin:10px; color:white"></i> +591-77585175
          </li>
          <li>
            <i class="fa fa-globe" aria-hidden="ture" style="margin:10px; color:white"></i>
            <a href="https://www.altitudeclinic.com" target="_blank">www.altitudeclinic.com</a>
          </li>
          <li>            
            <a href="https://www.facebook.com/IPPA.BOLIVIA/" target="_blank">
              <i class="fa fa-facebook" aria-hidden="true" style=" margin:15px; color:white"></i> Facebook
            </a>            
          </li>
        </ul>
      </div>
      <div class="admin">
        <div class="conf-email">
          <h3>Conference Email</h3>
          <span>
            <i class="fa fa-envelope" aria-hidden="ture" style="margin:10px; color:white"></i> info@worldcovidconf.com
          </span>
          <a
            href="https://www.facebook.com/Advances-in-COVID-110800634049499/?modal=admin_todo_tour"
          >
            <i class="fa fa-facebook" aria-hidden="true" style=" margin:15px; color:white"></i> Facebook
          </a>
        </div>
        <div class="admin-container">
          <h3>Administrator</h3>
          <ul style="list-style-type: none;">
            <li @click="route" style="cursor: pointer;">
              <i class="fa fa-user" aria-hidden="true" style="margin:10px; color:white"></i> Login
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="developer grow">
      <div class="line"></div>
      <a href="http://linkedin.com/in/gaurav-v-941368194">
        <span>Made by</span> Gaurav V
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    route() {
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/colors";
footer {
  color: white;
  width: 100%;
  margin-top: 3rem;
  padding: 1rem 0;
  background: $gradient;
  display: flex;
  flex-direction: column;
  align-items: center;
  @include ipad-portrait {
    flex-wrap: wrap;
  }
  flex-wrap: wrap;
  .company {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    @include ipad-portrait {
      width: 90%;
      text-align: center;
    }
    ul {
      margin: 0;
      padding: 0;
      li {
        margin: 0;
        a {
          text-decoration: none;
          color: white;
        }
        a:hover {
          color: rgb(17, 11, 100);
        }
      }
      li:hover {
        color: rgb(17, 11, 100);
      }
    }
    .bgc {
      .image-cont {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
        img {
          margin-top: 0.5rem;
          width: 220px;
          height: 60px;
        }
      }
    }
    .happi {
      .image-cont{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
        img{
          width: 65px;
          height: 75px;
        }
      }      
    }
  }
  .conf-email {
    display: flex;
    flex-direction: column;
    a {
      text-decoration: none;
      color: white;
    }
    a:hover {
      color: rgb(17, 11, 100);
    }
  }
  .developer {
    width: 100%;
    color: white;
    text-align: center;
    .line {
      width: 100%;
      height: 1px;
      background: black;
      margin: 1rem 0;
    }
    a {
      text-decoration: none;
      color: white;
    }
    a:hover {
      color: rgb(17, 11, 100);
    }
    span {
      color: white;
    }
  }
  @media print {
    display: none;
  }
}
</style>