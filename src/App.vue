<template>
  <div id="app">
    <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <Header />
    <div class="spacer"></div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import "./scss/colors";

::-webkit-scrollbar {
  width: 0.35rem;
}

::-webkit-scrollbar-track {
  background: none;
}

::-webkit-scrollbar-thumb {
  background-color: #08e1ae;
  background-image: linear-gradient(
    90deg,
    rgb(252, 108, 53),
    rgb(170, 18, 159)
  );
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 3rem;
}

.spacer {
  margin-top: 4rem;
  @media print {
    display: none;
  }
}

body {
  padding: 0;
  margin: 0;
  letter-spacing: 1px;
  overflow-x: hidden;
  font-family: "Roboto", sans-serif;
  // margin-bottom: 2rem;
}
</style>
