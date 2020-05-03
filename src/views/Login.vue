<template>
  <div>
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
          v-bind:class="{ 'off-button': login, 'fa fa-sign-in': login_icon }"
          @click="clickLogin"
        >
          <router-link to="/home">{{labelSI}}</router-link>
        </button>
        <button
          class="ma-2 base-button su-button"
          v-bind:class="{ 'off-button': !login, 'fa fa-user-plus': !login_icon }"
          @click="clickSignup"
        >{{labelSU}}</button>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false,
      login: false,
      login_icon: false,
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
      console.log(this.$router);
      if(!this.login) this.toggleLogin();
      else this.$router.push('/home');
    },
    toggleLogin() {
      this.login = !this.login;
      setTimeout(() => {
        this.login_icon = !this.login_icon;
        this.labelSU = this.login ? 'Sign up' : '';
        this.labelSI = this.login ? '' : 'Sign in';
      }, 5); 
    }
  }
}
</script>

<style>
  .v-form {
    padding: 25% 0% 25% 0%;
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
    width: 45%;
  }

  .si-button {
    background-color: rgb(0, 45, 87);
    color: rgb(216, 216, 216);
  }

  .si-button a{
    color: rgb(216, 216, 216);
  }

  .su-button {
    background-color: rgb(201, 222, 241);
    color: rgb(61, 61, 61);
    border: gray;
    border-width: 2px;
    border-style: solid;
  }

  .off-button {
    width: 50px;
    border: gray;
    border-width: 2px;
    border-style: solid;
  }
</style>