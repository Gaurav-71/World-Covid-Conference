<template>
  <div class="home">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutRight"
      appear
    >
      <Heading :obj="headingObj" />
    </transition>
    <div class="pills-container">
      <div @click="route(1)" class="pill" :class="{ active: page == 1 }">Activity</div>
      <div @click="route(2)" class="pill" :class="{ active: page == 2 }">Registrations</div>
    </div>
    <transition
      name="custom-classes-transition-2"
      enter-active-class="animated fadeInLeft"
      leave-active-class="animated fadeOutRight"
      mode="out-in"
      :duration="{leave: 450}"
      appear
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
import Heading from "../../components/Heading";

export default {
  name: "Register",
  components: {
    Heading
  },
  data() {
    return {
      page: 1,
      headingObj: {
        h1: "Administrator",
        h4: "Manage all your data with ease",
        src: "admin.svg"
      }
    };
  },
  methods: {
    route(page) {
      this.page = page;
      switch (page) {
        case 1:
          this.$router.push("/admin/home/");
          break;
        case 2:
          this.$router.push("/admin/registrations");
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/colors";
.home {
  min-height: calc(100vh - 4.5rem);
  background-image: $background-1;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  .pills-container {
    width: 36%;
    display: flex;
    justify-content: space-around;
    background: rgba(lighten($primary, 30%), 0.3);
    padding: 1rem 0;
    margin: 0 0.5rem;
    margin-bottom: 1rem;
    border-radius: 0.8rem;
    @include ipad-portrait {
      width: 60%;
    }
    .pill {
      width: 12rem;
      text-align: center;
      padding: 0.8rem 0;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: all 0.3s ease-in;
      @include ipad-portrait {
        width: auto;
        padding: 0.8rem 2rem;
      }
    }
    .pill:hover {
      background: rgba($primary, 0.2);
    }
    .active {
      background: $primary;
      color: white;
      box-shadow: 5px 8px 7px rgba(0, 0, 0, 0.25);
    }
    .active:hover {
      background: $primary;
      color: white;
    }
  }
}
</style>