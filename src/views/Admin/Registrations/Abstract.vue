<template>
  <div class="registration">
    <div class="heading-1">
      <h1>Poster Submission | {{$store.getters.getAbstracts.length}}</h1>
      <h4>Personal information provided by the participants with their poster</h4>
    </div>
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Affiliation</th>
        <th>Country</th>
        <th>Title</th>
        <th>Authors</th>
        <th>Poster</th>
        <th>Abstract</th>
      </tr>
      <tr v-for="detail in $store.getters.getAbstracts" :key="detail.id">
        <td>{{detail.detail.name}}</td>
        <td>{{detail.detail.email}}</td>
        <td>{{detail.detail.phno}}</td>
        <td>{{detail.detail.affiliation}}</td>
        <td>{{detail.detail.country}}</td>
        <td>{{detail.detail.title}}</td>
        <td>{{detail.detail.authors}}</td>
        <td>
          <a :href="detail.detail.posterFile" target="_blank">Download</a>
        </td>
        <td>
          <a :href="detail.detail.abstractFile" target="_blank">Download</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Abstacts",
  data() {
    return {
      unsubscribe: null
    };
  },
  mounted() {
    this.$store
      .dispatch("loadAbstracts")
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
@import "../../../scss/registrations";
</style>