<template>
  <div class="registration">
    <div class="heading-1">
      <h1>Transaction Details | {{$store.getters.getParticipants.length}}</h1>
      <h4>All participants fee and transaction details</h4>
    </div>
    <table>
      <tr>
        <th>Time</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Profession</th>
        <th>Country</th>
        <th>Discount</th>
        <th>Fee</th>
        <th>Transaction ID</th>
        <th>Transaction Proof</th>
      </tr>
      <tr v-for="detail in $store.getters.getParticipants" :key="detail.id">
        <td>{{detail.detail.timestamp}}</td>
        <td>{{detail.detail.name}}</td>
        <td>{{detail.detail.email}}</td>
        <td>{{detail.detail.phno}}</td>
        <td v-if="detail.detail.profession == 's'">Student</td>
        <td v-else>
          <span v-if="detail.detail.qualification == 1">Faculty/Researcher</span>
          <span v-else-if="detail.detail.qualification == 2">Industry Personnel</span>
          <span v-else>Other</span>
        </td>
        <td>{{detail.detail.country}}</td>
        <td>{{detail.detail.discount}}%</td>
        <td v-if="detail.detail.country == 'India'">&#8377;{{detail.detail.finalAmount}}</td>
        <td v-else>${{detail.detail.finalAmount}}</td>
        <td>{{detail.detail.transactionID}}</td>
        <td>
          <a :href="detail.detail.transactionProof" target="_blank">Download</a>
        </td>
      </tr>
    </table>
    <div class="heading-1">
      <h1>Student Details</h1>
      <h4>All student participants information</h4>
    </div>
    <table>
      <tr>
        <th>Name</th>
        <th>Gender</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>University Name</th>
        <th>Stream</th>
        <th>Student ID</th>
      </tr>
      <tr v-for="detail in $store.getters.getParticipants" :key="detail.id">
        <td v-if="detail.detail.profession == 's'">{{detail.detail.name}}</td>
        <td v-if="detail.detail.profession == 's'">{{detail.detail.gender}}</td>
        <td v-if="detail.detail.profession == 's'">{{detail.detail.email}}</td>
        <td v-if="detail.detail.profession == 's'">{{detail.detail.phno}}</td>
        <td>{{detail.detail.universityName}}</td>
        <td>{{detail.detail.stream}}</td>
        <td v-if="detail.detail.profession == 's'">
          <a :href="detail.detail.studentIdProof" target="_blank">Download</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Conference",
  data() {
    return {
      unsubscribe: null
    };
  },
  mounted() {
    this.$store
      .dispatch("loadParticipants")
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