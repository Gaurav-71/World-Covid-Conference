<template>
  <div class="activity">
    <div v-for="detail in $store.getters.getActivity" :key="detail.id">
      <div class="card">
        <div class="img">
          <img
            v-if="detail.detail.type == 'Conference'"
            src="../../assets/Register/target.svg"
            alt="type"
          />
          <img
            v-else-if="detail.detail.type == 'Abstract'"
            src="../../assets/Register/abstract.svg"
            alt="type"
          />
          <img
            v-else-if="detail.detail.type == 'Workshop'"
            src="../../assets/Register/workshop.svg"
            alt="type"
          />
          <img
            v-else-if="detail.detail.type == 'Speaker'"
            src="../../assets/Register/presentation.svg"
            alt="type"
          />
          <img
            v-else-if="detail.detail.type == 'Sponsor'"
            src="../../assets/Register/sponsor.svg"
            alt="type"
          />
          <img
            v-else-if="detail.detail.type == 'Hackathon'"
            src="../../assets/Register/hackathon.svg"
            alt="type"
          />
        </div>
        <div class="card-item">
          <div>{{detail.detail.type}}</div>
          <div>{{detail.detail.name}}</div>
          <div>{{detail.detail.phno}}</div>
          <div>{{detail.detail.email}}</div>
          <div>{{detail.detail.time}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Activity",
  data() {
    return {
      unsubscribe: null
    };
  },
  methods: {
    getImgUrl(src) {
      return require("../../assets/Register/" + src);
    }
  },
  mounted() {
    this.$store
      .dispatch("loadActivity")
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
.activity {
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