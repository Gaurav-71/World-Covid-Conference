<template>
  <div class="registration">
    <div class="heading-1">
      <h1>Idea Submission | Registered : {{$store.getters.getHackathon.length}}, Submitted : {{submittedParticipants}}</h1>
      <h4>Personal information provided by the participants with their idea submissions</h4>
    </div>
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Profession</th>
        <th>Submission</th>
      </tr>
      <tr v-for="detail in $store.getters.getHackathon" :key="detail.id">
        <td>{{detail.detail.name}}</td>
        <td>{{detail.detail.email}}</td>
        <td>{{detail.detail.phno}}</td>
        <td>{{detail.detail.profession}}</td>
        <td v-if="detail.detail.file.length <= 2">No submission</td>
        <td v-else>
          <a :href="detail.detail.file" target="_blank">Download</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "AdminHackathon",
  data() {
    return {
      unsubscribe: null,
      submitted: 0
    };
  },
  methods: {
    incrementSubmissions() {
      this.submitted += 1;
    }
  },
  mounted() {
    this.$store
      .dispatch("loadHackathon")
      .then(resp => {
        this.unsubscribe = resp;
      })
      .catch(err => {
        alert(err);
      });
  },
  computed: {
    submittedParticipants: function() {
      for (var i = 0; i < this.$store.getters.getHackathon.length; i++) {
        if (this.$store.getters.getHackathon[i].detail.file.length > 2) {
          this.incrementSubmissions();
        } else {
          break;
        }
      }
      return this.submitted / 2;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/registrations";
</style>