<template>
  <div class="header">
    <div class="logos">
      <img src="../assets/Header/bcg-logo.png" class="bgc" alt="logo" />

      <div class="line"></div>
      <img src="../assets/Header/ippa-logo.png" class="ippa" alt="logo" />
    </div>
    <nav>
      <img v-if="!isMenuOpen" @click="showMenu" src="../assets/Header/menu.svg" alt="menu" />
      <img v-else @click="showMenu" src="../assets/Header/close.svg" alt="close" />
      <ul :class="{'list-nav':isMenuOpen}" class="hide">
        <li @click="route(1,'close')">About</li>
        <li @click="route(2,'close')">Speakers</li>
        <li @click="route(3,'close')">Organizers</li>
        <li @click="route(4,'close')">Contact Us</li>
        <li @click="route(5,'close')">Register</li>
      </ul>
      <ul class="flex-nav">
        <li @click="route(1)">About</li>
        <li @click="route(2)">Speakers</li>
        <li @click="route(3)">Organizers</li>
        <li @click="route(4)">Contact Us</li>
        <transition
          name="custom-classes-transition"
          enter-active-class="animated bounceInRight"
          leave-active-class="animated bounceOutRight"          
          :duration="{enter: 800,leave: 500}"
          appear
        >
          <li v-if="$store.state.navItem != 5" @click="route(5)" class="no-padding">
            <div class="btn shake">Register</div>
          </li>
        </transition>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    route(page, menuAction = "ignore") {
      this.$store.state.navItem = page;
      if (menuAction == "close") {
        this.showMenu();
      }
      switch (page) {
        case 1:
          this.$router.push("/");
          break;
        case 2:
          this.$router.push("/speakers");
          break;
        case 3:
          this.$router.push("/organizers");
          break;
        case 4:
          this.$router.push("/contacts");
          break;
        case 5:
          this.$router.push("/registration");
          break;
      }
    },
    showMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/colors";
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 4.5rem;
  background-image: $gradient;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logos {
    display: flex;
    height: 100%;
    align-items: center;
    margin-left: 1rem;
    .ippa {
      width: 50px;
    }
    .line {
      height: 3.5rem;
      width: 1px;
      background: gainsboro;
      margin: 0 1rem;
    }
    .bgc {
      width: 140px;
    }
  }
  nav {
    img {
      width: 2rem;
      height: 2rem;
      margin: 1rem 1.5rem;
      @include desktop {
        display: none;
      }
      @include ipad {
        display: none;
      }
      @include ipad-portrait {
        display: block;
      }
    }
    .hide {
      display: none;
    }
    .list-nav {
      display: block;
      position: fixed;
      top: 4.7rem;
      right: 0;
      left: 0;
      background-image: $gradient;
      color: white;
      list-style-type: none;
      padding: 0 2.5rem;
      margin: 0;
      li {
        margin: 2rem 0;
        padding: 0;
      }
    }
    .flex-nav {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      transition: all 0.4s ease;
      li {
        padding: 0.8rem 1.2rem;
        color: white;
        cursor: pointer;
        transition: all 0.4s ease-in;
      }
      li:hover {
        color: rgb(17, 11, 100);
      }
      li:active {
        transform: scale(0.95);
      }
      .no-padding {
        padding: 0;
        .btn {
          margin: 0 1.2rem 0 0.5rem;
          padding: 0.8rem 1.5rem;
          border-radius: 0.6rem;
          background: #7d62a9;
          box-shadow: 10px 10px 20px rgba(grey, 0.5);
          color: white;
          transition: background 0.3s ease-in;
        }
        .btn:hover {
          background: darken(#7d62a9, 12%);
        }
        .btn:active {
          transform: scale(0.95);
        }
      }
      .no-padding:hover {
        background: none;
      }
    }
    @include iphone {
      .flex-nav {
        display: none;
      }
    }
    @include ipad-portrait {
      .flex-nav {
        display: none;
      }
    }
  }
}
</style>