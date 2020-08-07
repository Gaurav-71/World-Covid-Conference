<template>
  <footer class="footer">
    <div class="company">
      <div class="bgc">
        <p>Bengaluru Genomics Center</p>
        <ul style="list-style-type: none;">
            <li>
              <i class="fa fa-phone" aria-hidden="true" style="margin:10px; color:white"></i>
            </li>
            <li>
              <i class="fa fa-envelope" aria-hidden="ture" style="margin:10px; color:white"></i>
            </li>
            <li>
              <a href=""> <i class="fa fa-instagram fa-2x" aria-hidden="ture" style=" margin:15px; color:white"></i></a>
              <a href=""> <i class="fa fa-facebook fa-2x" aria-hidden="true" style=" margin:15px; color:white"></i></a>
              <a href=""> <i class="fa fa-linkedin fa-2x" aria-hidden="ture" style=" margin:15px; color:white"></i></a>
            </li>
        </ul>
      </div>
      <div class="happi">
        <p>High Altitude Pulmonary and Pathology Institute</p>
        <ul style="list-style-type: none;">
            <li>
              <i class="fa fa-phone" aria-hidden="true" style="margin:10px; color:white"></i>
            </li>
            <li>
              <i class="fa fa-envelope" aria-hidden="ture" style="margin:10px; color:white"></i>
            </li>
            <li>
              <a href=""> <i class="fa fa-instagram fa-2x" aria-hidden="ture" style=" margin:15px; color:white"></i></a>
              <a href=""> <i class="fa fa-facebook fa-2x" aria-hidden="true" style=" margin:15px; color:white"></i></a>
              <a href=""> <i class="fa fa-linkedin fa-2x" aria-hidden="ture" style=" margin:15px; color:white"></i></a>
            </li>
        </ul>
      </div>
      <div @click="route" class="admin">Admin</div>
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
    name: 'Footer',
    methods:{
        route(){
            this.$router.push("/login");
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../scss/colors";
footer {
  color: white;
  margin-top: 3rem;
  width: 100%;
  padding: 1rem 0;
  background: $gradient;
  display: flex;
  flex-direction: column;
  align-items: center;
  .company{
      width: 100%;
      display: flex;
      justify-content: space-around;    
      .admin{
        cursor: pointer;
      }
  }
  .developer {
    width: 100%;
    color: white;
    text-align: center;
    .line {
      width: 100%;
      height: 1px;
      background:black;
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
}
</style>