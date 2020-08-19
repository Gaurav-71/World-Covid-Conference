<template>
  <div class="registration">
    <div class="heading-1">
      <h1>Transaction Details | {{$store.getters.getSponsors.length}}</h1>
      <h4>All sponsors fee and transaction details</h4>
    </div>
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Company</th>
        <th>Designation</th>
        <th>Country</th>
        <th>Fee</th>
        <th>Transaction ID</th>
        <th>Transaction Proof</th>
      </tr>
      <tr v-for="detail in $store.getters.getSponsors" :key="detail.id">
        <td>{{detail.detail.name}}</td>
        <td>{{detail.detail.email}}</td>
        <td>{{detail.detail.phno}}</td>
        <td>{{detail.detail.company}}</td>
        <td>{{detail.detail.designation}}</td>
        <td>{{detail.detail.country}}</td>
        <td v-if="detail.detail.country == 'India'">&#8377;{{detail.detail.fee}}</td>
        <td v-else>${{detail.detail.fee}}</td>
        <td>{{detail.detail.transactionID}}</td>
        <td>
          <a :href="detail.detail.transactionProof" target="_blank">Download</a>
        </td>
      </tr>
    </table>
    <div class="heading-1">
      <h1>Business Details</h1>
      <h4>Business information provided by the sponsors</h4>
    </div>
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Company Number</th>
        <th>Company</th>
        <th>Designation</th>
        <th>Company Address</th>
        <th>ID</th>
      </tr>
      <tr v-for="detail in $store.getters.getSponsors" :key="detail.id">
        <td>{{detail.detail.name}}</td>
        <td>{{detail.detail.email}}</td>
        <td>{{detail.detail.phno}}</td>
        <td>{{detail.detail.landline2}}</td>
        <td>{{detail.detail.company}}</td>
        <td>{{detail.detail.designation}}</td>
        <td>{{detail.detail.locality2}},{{detail.detail.landmark2}},{{detail.detail.state2}},{{detail.detail.city2}},{{detail.detail.pin2}},{{detail.detail.country2}}</td>
        <td>
          <a :href="detail.detail.sponsorIdProof" target="_blank">Download</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Sponsors",
  data() {
    return {
      unsubscribe: null
    };
  },
  mounted() {
    this.$store
      .dispatch("loadSponsors")
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