<template>
  <div class="discounts">
    <newPromoCode v-if="$store.state.createNewPromoCode" />
    <div class="heading-container">
      <div class="heading-1">
        <h1>Active Promotion Codes</h1>
        <h4>Promotion codes are automatically generated during hackathon & speaker registration</h4>
      </div>
      <img src="../../assets/Login/plus.svg" alt="add" class="grow" @click="openCreatePromoCode" />
    </div>
    <div class="line"></div>
    <div class="card-container">
      <div v-for="detail in $store.getters.getPromoCodes" :key="detail.id" class="card">
        <h3>{{detail.promo.code}}</h3>
        <p>{{detail.promo.discount}}%</p>
      </div>
    </div>
  </div>
</template>

<script>
import newPromoCode from "../../components/AddCode";
export default {
  name: "Discounts",
  components: {
    newPromoCode
  },
  data() {
    return {
      unsubscribe: null
    };
  },
  methods: {
    openCreatePromoCode() {
      this.$store.state.createNewPromoCode = !this.$store.state
        .createNewPromoCode;
    }
  },
  mounted() {
    this.$store
      .dispatch("loadPromoCodes")
      .then(resp => {
        this.unsubscribe = resp;
      })
      .catch(err => {
        alert(err);
      });
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/colors";
.discounts {
  width: 100%;
  min-height: calc(100vh - 4.5rem);
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 0 0.7rem;
  .heading-container {
    width: 100%;
    padding: 0.7rem 0 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .heading-1 {
      text-align: left;
      h1,
      h4 {
        margin: 0.5rem;
        padding: 0;
        font-weight: lighter;
      }
      h1 {
        color: $primary;
      }
      h4 {
        color: black;
      }
    }
    img {
      width: 40px;
      height: 40px;
      margin: 1.5rem 4.5rem 0 0;
      cursor: pointer;
    }
    img:active {
      transform: scale(0.95);
    }
    @media print {
      display: none;
    }
  }
  .line {
    width: 100%;
    height: 1px;
    background: lightgrey;
    @media print {
      display: none;
    }
  }
  .card-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    .card {
      width: max-content;
      margin: 0.8rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0.2rem 2rem;
      background: white;
      border-radius: 0.8rem;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
      p {
        color: $primary;
        margin-left: 2rem;
      }
      h3 {
        font-weight: lighter;
        color: gray;
      }
    }
    @media print {
      display: none;
    }
  }
}
</style>