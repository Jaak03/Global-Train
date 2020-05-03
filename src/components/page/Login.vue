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
          <button 
            class="ma-2 base-button si-button"
            type="submit"
          >Sign in</button>
          <button 
            class="ma-2 base-button su-button"
            type="submit"
          >Sign up</button>
        </div>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false,
      state: 'login'
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

  .base-button {
    width: 32;
  }

  .si-button {
    background-color: rgb(0, 45, 87);
    color: rgb(216, 216, 216);
  }

  .su-button {
    background-color: rgb(201, 222, 241);
    color: rgb(61, 61, 61);
  }

  @media (max-width: 405px) {
    .ma-2 {
      width: 30vh;
    }
  }
</style>