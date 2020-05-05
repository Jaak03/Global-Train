<template>
  <div class="settings-container">
    <v-row justify="center" align="center">
      <p>Settings</p>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" md="6" lg="3">
        <v-select
          v-model="form.scheduleOption"
          :items="session.schedule"
          color="pink"
          label="Sessions"
          required
        ></v-select>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" md="6" lg="3">
        <v-select
          v-model="form.durationOption"
          :items="session.duration"
          color="pink"
          label="Duration"
          required
        ></v-select>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" md="6" lg="3">
        <v-checkbox
          v-model="form.notifyOption"
          label="Receive a notification">
        </v-checkbox>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      session: {
        schedule: [
          '06:00',
          '10:00',
          '14:00',
          '18:00'
        ],
        duration: [5,10,15,20]
      },
      form: {
        scheduleOption: '',
        durationOption: 0,
        notifyOption: false
      }
    }
  }
};
</script>

<style>
  .settings-container {
    margin: 2rem 1rem;
  }

  p {
    font-size: 4rem;
  }

  .v-row {
    padding: 50px 50px; 
  }
</style>
