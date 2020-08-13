<template>
  <div class="query">
    <div v-for="detail in $store.getters.getMessages" :key="detail.id">
      <div class="card">
        <div class="img">
          <img src="../../assets/Heading/questions.svg" alt="questions" />
        </div>
        <div class="card-item">
          <div>{{detail.detail.name}}</div>
          <div>{{detail.detail.email}}</div>
          <div>{{detail.detail.message}}</div>          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Queries",
  data() {
    return {
      unsubscribe: null
    };
  },
  mounted() {
    this.$store
      .dispatch("loadMessages")
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
.query {
  width: 97%;
  min-height: calc(100vh - 4.5rem);
  display: flex;
  flex-direction: column;
  align-items: left;
  .card {
    margin: 0.5rem;
    width: 100%;
    padding: 1rem;
    background: white;
    color: black;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 0.8rem;
    display: grid;
    grid-template-columns: 10% 90%;
    justify-content: center;
    @include ipad-portrait {
      width: 95%;
      flex-wrap: wrap;
    }
    .img {
      display: flex;
      justify-content: center;
      img {
        width: 60px;
        height: 60px;
      }
    }
    .card-item {
      display: flex;
      justify-content: space-around;
      align-items: center;
      @include ipad-portrait {
        flex-wrap: wrap;
      }
    }
  }
}
</style>