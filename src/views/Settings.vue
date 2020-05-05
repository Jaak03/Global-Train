<template>
  <div class="settings-container">
    <v-snackbar
      color="rgb(0, 45, 87)"
      :timeout="snackbar.timeout"
      top="true"
      :vertical="snackbar.vertical"
    >
      Saved!
      <v-btn
        dark
        text
        @ended="endNotification"
        @click="endNotification"
      >
        Close
      </v-btn>
    </v-snackbar>

    <v-row justify="center" align="center">
      <h1>Settings</h1>
    </v-row>
    <v-row
      justify="center"
      align="center"
      class="saved-container"
    >
      <div class="spacer">
        <v-progress-circular
          v-show="saving"
          indeterminate
          large
          label="toets"
          color="primary"
        ></v-progress-circular>
      </div>
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
          v-model="saving"
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
      },
      snackbar: {
        timeourt: 3000,
        vertical: true,
      },
      saving: true
    }
  },
  methods: {
    endNotification() {
      this.saving = !this.saving;
    }
  }
};
</script>

<style>
  .settings-container {
    margin: 2rem 1rem;
  }

  h1 {
    font-size: 4rem;
  }

  .spacer { 
    height: 3rem;
    margin: 0 50%;
  }

  .v-row {
    padding: 50px 50px; 
  }
</style>
