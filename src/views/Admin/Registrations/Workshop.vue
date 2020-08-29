<template>
  <div class="registration">
    <div class="heading-1">
      <h1>Transaction Details | {{$store.getters.getWorkshop.length}}</h1>
      <h4>All participants fee and transaction details</h4>
    </div>
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone Number</th>
      </tr>
      <tr v-for="detail in $store.getters.getWorkshop" :key="detail.id">
        <td>{{detail.detail.name}}</td>
        <td>{{detail.detail.email}}</td>
        <td>{{detail.detail.phno}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Workshop",
  data() {
    return {
      unsubscribe: null
    };
  },
  mounted() {
    this.$store
      .dispatch("loadWorkshop")
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