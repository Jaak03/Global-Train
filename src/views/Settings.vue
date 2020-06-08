<template>
  <div class="settings-container">
    <v-row justify="center" align="center">
      <h1>Settings</h1>
    </v-row>
    <v-row
      justify="center"
      align="center"
      class="saved-container"
    >
      <div class="spacer">
      </div>
    </v-row>
   
   <v-row
      justify="center"
      align="center"
   >
     <p>Please commit to one or more of the available sessions.</p>
   </v-row>
   <v-row
      v-for="item in (settings.sessions || [])"
      :key="item.id"
      justify="center"
      align="center"
    >
      <v-checkbox
        v-model="item.active"
        :label="item.time"
        @change="checkSession($event, item)"
      >
      </v-checkbox>
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
import { generateRequest } from '../helpers/http';

export default {
  mounted() {
    this.$store.commit('changeMenuVisibility', { visibility: true });
    this.setSettings();
    console.log(this.settings);
  },
  data() {
    return {
      settings: {},
      form: {
        scheduleOption: [],
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
    setSettings() {
      if (this.$store.state.settings) {
        this.settings = this.$store.state.settings;
      } else {
        this.settings = JSON.parse(localStorage.getItem('settings'));
        this.$store.state.settings = this.settings;
      }
    },
    async save(next) {
      this.saving = true;
      const url = this.$store.state.api.API_URL;
      const options = generateRequest({
          settings: this.settings,
        }, this);
      
      try {
        const settingsUpdate = await fetch(`${url}user/settings`, options);
        const response = await settingsUpdate.json();
  
        this.changed = false;
        this.saving = false;

        localStorage.setItem('settings', this.getSessionList());
        this.$store.commit('showMessage', { msg: response.msg });
        next();
      } catch (e) {
        this.$store.commit('showMessage', { msg: 'Could not update user settings.' });
        next();
      }
    },
    checkSession(event, name) {
      this.change();
      console.log({ event, name, opt: this.$store.state.settings });
    },
  },
  beforeRouteLeave (to, from , next) {
    if(this.changed) this.save(next);
    else next();
  }
};
</script>

<style>
  .settings-container {
    margin: 0rem 1rem;
  }

  .saving-dialog {
    padding: 1rem 0 0 0;
    font-size: 1rem;
    color: rgb(216, 216, 216);
  }

  .spacer { 
    height: 3rem;
    margin: 0 50%;
  }

  .v-snackbar {
    padding: 2rem;
    height: 3rem;
  }
</style>
