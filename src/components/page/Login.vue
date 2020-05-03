<template>
  <v-card>
    <v-card-text>
      <v-form>
        <v-text-field
          label="Username"
          prepend-icon="mdi-account-circle"
        />
        <v-text-field
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="toggleShowPassword"
        />
        <div class="submit-options">
          <v-btn class="ma-2 btn-si" type="submit" large color="primary">Sign in</v-btn>
          <v-btn class="ma-2 btn-su" type="submit" large color="secondary">Sign up</v-btn>
        </div>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false
    }
  },
  methods: {
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    }
  }
}
</script>

<style>
  .v-form {
    margin: 5%;
    display: flex;
    flex-flow: column wrap;
    transition-duration: 15ms;
  }

  .v-form > .v-text-field {
    min-width: 100px;
  }

  .submit-options {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  .ma-2 {
    width: 50vh;
  }

  @media (max-width: 405px) {
    .ma-2 {
      width: 30vh;
    }
  }
</style>