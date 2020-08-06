<template>
  <div id="app">
    <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css" />
    <Header />
    <div class="spacer"></div>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  components: {
    Header
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
}

body {
  padding: 0;
  margin: 0;
  letter-spacing: 1px;
  overflow-x: hidden;
  font-family: "Roboto", sans-serif;
  margin-bottom: 2rem;
}
</style>
