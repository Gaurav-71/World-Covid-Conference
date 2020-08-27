<template>
  <div class="abstracts"></div>
</template>

<script>
export default {
  props: {
    speaker: Number
  },
  data() {
    return {
      allSpeakersAbstracts: [
        {
          name: "Dr. Augusto Ittig",
          affiliation: "Director, Iberoamerican Network of Digital health",
          country: "Argentina"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/colors";
.abstracts {
  min-height: 100vh;
  width: 100%;
  background-image: $background-1;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  @include ipad-portrait {
    padding: 0.5rem 0;
  }
  .btn,
  .btn-1 {
    width: 8rem;
    padding: 1rem 2rem;
    background: $primary;
    border-radius: 0.8rem;
    color: white;
    cursor: pointer;
    text-align: center;
    transition: all 0.3s ease-in;
    margin: 1rem 0;
  }
  .btn-1 {
    background-image: $gradient-red;
  }
  .btn:hover {
    background: darken($primary, 10%);
  }
  .transparent {
    background: #e4e3e3;
    color: #333;
    color: black;
  }
  .transparent:hover {
    background: darken(#e4e3e3, 10%);
  }
  .btn:active {
    transform: scale(0.95);
  }
}
</style>