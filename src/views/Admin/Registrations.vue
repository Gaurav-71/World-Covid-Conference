<template>
  <div class="registrations">
    <div class="pills-container">
      <div @click="route(1)" class="pill" :class="{ active: page == 1 }">Conference</div>
      <div @click="route(2)" class="pill" :class="{ active: page == 2 }">Abstract</div>
      <div @click="route(3)" class="pill" :class="{ active: page == 3 }">Workshop</div>
      <div @click="route(4)" class="pill" :class="{ active: page == 4 }">Speakers</div>
      <div @click="route(5)" class="pill" :class="{ active: page == 5 }">Sponsors</div>
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
export default {
  name: "Register",
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
          this.$router.push("/admin/registrations");
          break;
        case 2:
          this.$router.push("/admin/registrations/abstract");
          break;
        case 3:
          this.$router.push("/admin/registrations/workshop");
          break;
        case 4:
          this.$router.push("/admin/registrations/speakers");
          break;
        case 5:
          this.$router.push("/admin/registrations/sponsors");
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/colors";
.registrations {
  width: 99%;
  min-height: calc(100vh - 4.5rem);  
  display: flex;
  flex-direction: column;
  align-items: left;
  .pills-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    background: rgba(lighten($primary, 30%), 0.3);
    padding: 1rem 0;
    margin: 0 0.5rem;
    margin-bottom: 1rem;
    border-radius: 0.8rem;
    .pill {
      width: 12rem;
      text-align: center;
      padding: 0.8rem 0;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: all 0.3s ease-in;
      @include ipad-portrait {
        width: auto;
        padding: 0.8rem 1rem;
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