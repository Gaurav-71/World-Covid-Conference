<template>
  <div class="registration">
    <div class="heading-1">
      <h1>Abstract Submission</h1>
      <h4>Personal information provided by the participants with their abstracts</h4>
    </div>
    <table>
      <tr>
        <th>Name</th>        
        <th>Email</th>
        <th>Phone Number</th>
        <th>Affiliation</th>
        <th>Postal Address</th>
        <th>Title</th>
        <th>Authors</th>
        <th>Abstract Submission</th>
      </tr>
      <tr v-for="detail in $store.getters.getAbstracts" :key="detail.id">
        <td>{{detail.detail.name}}</td>        
        <td>{{detail.detail.email}}</td>
        <td>{{detail.detail.phno}}</td>
        <td>{{detail.detail.affiliation}}</td>        
        <td>{{detail.detail.street1}},{{detail.detail.street2}},{{detail.detail.landmark}},{{detail.detail.state}},{{detail.detail.city}},{{detail.detail.pin}},{{detail.detail.country}}</td>
        <td>{{detail.detail.title}}</td>
        <td>{{detail.detail.authors}}</td>
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