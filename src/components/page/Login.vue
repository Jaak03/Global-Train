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
            v-bind:class="{ 'off-button fa fa-sign-in': login }"
            @click="clickLogin"
          >{{labelSI}}</button>
          <button
            class="ma-2 base-button su-button"
            v-bind:class="{ 'off-button fa fa-user-plus': !login }"
            @click="clickSignup"
            append-icon="mdi-login"
          >{{labelSU}}</button>
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
      login: false,
      labelSU: '',
      labelSI: 'Sign in'
    }
  },
  methods: {
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
    clickLogin() {
      event.preventDefault(); 
      if (this.login) this.toggleLogin();
    },
    clickSignup() {
      event.preventDefault(); 
      if(!this.login) this.toggleLogin();
    },
    toggleLogin() {
      this.login = !this.login;
      this.labelSU = this.login ? 'Sign up' : '';
      this.labelSI = this.login ? '' : 'Sign in';
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

  .base-button {
    width: 50vh;
  }

  .si-button {
    background-color: rgb(0, 45, 87);
    color: rgb(216, 216, 216);
  }

  .su-button {
    background-color: rgb(201, 222, 241);
    color: rgb(61, 61, 61);
  }

  .off-button {
    width: 50px;
    border: gray;
    border-width: 2px;
    border-style: solid;
  }

  @media (max-width: 500px) {
    .base-button {
      width: 20vh;
    }

    .off-button {
      width: 50px;
      border: gray;
      border-width: 2px;
      border-style: solid;
    }
  }
</style>