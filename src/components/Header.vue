<template>
  <div class="header">
    <div class="logos">
      <img src="../assets/virus.png" alt="logo" />
    </div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutRight"
      appear
    >
      <nav v-if="!$store.state.isLoggedIn">
        <img
          v-if="!isMenuOpen"
          @click="showMenu"
          src="../assets/Header/menu.svg"
          alt="menu"
        />
        <img
          v-else
          @click="showMenu"
          src="../assets/Header/close.svg"
          alt="close"
        />
        <ul :class="{ 'list-nav': isMenuOpen }" class="hide">
          <li @click="route(1, 'close')">Home</li>
          <li @click="route(10, 'close')">Highlights</li>
          <li @click="route(5, 'close')">Research Papers</li>
          <li @click="route(9, 'close')">Recordings</li>
          <li @click="route(3, 'close')">Organizers</li>
          <li @click="route(2, 'close')">Speakers</li>
          <li @click="route(7, 'close')">Hackathon</li>
          <li @click="route(8, 'close')">Workshop</li>
          <li @click="route(4, 'close')">Contact Us</li>
        </ul>
        <ul class="flex-nav">
          <li @click="route(1)">Home</li>
          <li @click="route(10)">Highlights</li>
          <li @click="route(5)">Research Papers</li>
          <li @click="route(9)">Recordings</li>
          <li @click="route(3)">Organizers</li>
          <li @click="route(2)">Speakers</li>
          <li @click="route(7)">Hackathon</li>
          <li @click="route(8)">Workshop</li>
          <li @click="route(4)">Contact Us</li>
        </ul>
      </nav>
      <a v-else @click="logOut" class="signout">
        <img src="../assets/Login/signout.svg" alt="signout" />
        <span>Sign out</span>
      </a>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isMenuOpen: false,
      unsubscribe: null
    };
  },
  methods: {
    route(page, menuAction = "ignore") {
      this.$store.state.navItem = page;
      this.$store.state.validUser = false;
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
          this.$router.push("/research-papers");
          break;
        case 6:
          this.$router.push("/highlights");
          break;
        case 7:
          this.$router.push("/hackathon/about");
          break;
        case 8:
          this.$router.push("/workshop");
          break;
        case 9:
          this.$router.push("/recordings/login");
          break;
        case 10:
          this.$router.push("/highlights");
          break;
      }
    },
    showMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    logOut() {
      this.$store
        .dispatch("logOut")
        .then(() => {
          this.$store.state.isLoggedIn = false;
          this.$router.push("/");
        })
        .catch(err => {
          alert(err);
        });
    }
  },
  mounted() {
    this.$store
      .dispatch("loadRecordingsUsers")
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
@import "../scss/colors";
.header {
  z-index: 100;
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
    background: rgba(black, 0.5);
    //background-image: linear-gradient(346deg, rgba(55, 55, 55,0.04) 0%, rgba(55, 55, 55,0.04) 22%,rgba(140, 140, 140,0.04) 22%, rgba(140, 140, 140,0.04) 69%,rgba(225, 225, 225,0.04) 69%, rgba(225, 225, 225,0.04) 100%),linear-gradient(31deg, rgba(55, 55, 55,0.04) 0%, rgba(55, 55, 55,0.04) 42%,rgba(140, 140, 140,0.04) 42%, rgba(140, 140, 140,0.04) 85%,rgba(225, 225, 225,0.04) 85%, rgba(225, 225, 225,0.04) 100%),linear-gradient(55deg, rgba(55, 55, 55,0.04) 0%, rgba(55, 55, 55,0.04) 13%,rgba(140, 140, 140,0.04) 13%, rgba(140, 140, 140,0.04) 72%,rgba(225, 225, 225,0.04) 72%, rgba(225, 225, 225,0.04) 100%),linear-gradient(90deg, rgb(0,0,0),rgb(0,0,0));
    img {
      width: 65px;
      margin: 0 1rem;
    }
    .ippa {
      width: 50px;
    }
    .line {
      height: 3.5rem;
      width: 1px;
      background: gainsboro;
      //margin: 0 1rem;
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
        color: darken($primary, 35%);
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
          background: darken($primary, 5%);
          border: 0.5px solid white;
          box-shadow: 10px 10px 20px rgba(black, 0.5);
          box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25);
          color: white;
          transition: background 0.3s ease-in;
        }
        .btn:hover {
          background: darken($primary, 15%);
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
  .signout {
    position: fixed;
    right: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
    img {
      width: 25px;
      height: 25px;
    }
    span {
      display: none;
    }
  }
  .signout:hover {
    background: rgba(lighten($primary, 30%), 0.3);
    padding: 0.8rem 1rem;
    border-radius: 1rem;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    span {
      display: block;
      margin-left: 0.7rem;
      text-shadow: 1px 0.5px 1px black;
      @include iphone {
        display: none;
      }
    }
  }
  @media print {
    display: none;
  }
}
</style>