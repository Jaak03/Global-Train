<template>
  <div class="settings-container">
    <!-- <v-snackbar
      v-model="saving"
      color="rgb(0, 45, 87)"
      :timeout="snackbar.timeout"
      :top=true
      :vertical="snackbar.vertical"
    >
      <v-row
        justify="center"
        align="center"
      >
        <h2>Saved!</h2>
      </v-row>
      <v-row
        justify="center"
        align="center"
      >
        <v-btn
          dark
          text
          @ended="endNotification"
          @click="endNotification"
        >
          Close
        </v-btn>
      </v-row>
    </v-snackbar> -->

    <v-row justify="center" align="center">
      <h1>Settings</h1>
    </v-row>
    <v-row
      justify="center"
      align="center"
      class="saved-container"
    >
      <div class="spacer">
        <!-- <v-progress-circular
          v-show="saving"
          indeterminate
          large
          color="primary"
        ></v-progress-circular> -->
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" md="6" lg="3">
        <v-select
          v-model="form.scheduleOption"
          :items="session.schedule"
          color="pink"
          label="Sessions"
          @change="change()"
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
          @change="change()"
        ></v-select>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" md="6" lg="3">
        <v-checkbox
          v-model="form.notifyOption"
          @change="change()"
          label="Receive a notification">
        </v-checkbox>
      </v-col>
    </v-row>

    <v-dialog
      v-model="saving"
      hide-overlay
      persistent
      height="4rem"
      width="90%"
    >
      <v-card
        color="rgb(0, 45, 87)"
      >
        <v-card-text>
          <p class="saving-dialog">Saving your changes.</p>
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
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
        timeourt: 200,
        vertical: true,
      },
      next: null,
      saving: false,
      changed: false,
    }
  },
  methods: {
    change() {
      this.changed = true;
    },
    async save(next) {
      this.saving = true;
      setTimeout(() => {
        console.log(this.form);
        this.changed = false;
        this.saving = false;
        next();
      }, 3000);
    }
  },
  beforeRouteLeave (to, from , next) {
    if(this.changed) this.save(next);
    else next();
  }
};
</script>

<style>
  .settings-container {
    margin: 2rem 1rem;
  }

  .saving-dialog {
    padding: 1rem 0 0 0;
    font-size: 1rem;
    color: rgb(216, 216, 216);
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

  .v-snackbar {
    padding: 2rem;
    height: 3rem;
  }
</style>
