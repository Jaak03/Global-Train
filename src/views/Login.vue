<template>
  <div class="login-container">
    <v-form>
      <v-text-field
        label="Username"
        v-model="loginDetails.username"
        prepend-icon="mdi-account-circle"
      />
      <v-text-field
        label="Password"
        v-model="loginDetails.password"
        :type="showPassword ? 'text' : 'password'"
        prepend-icon="mdi-lock"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="toggleShowPassword"
      />
      <v-text-field
        label="Password"
        v-show="register"
        v-model="loginDetails.password2"
        :type="showPassword ? 'text' : 'password'"
        prepend-icon="mdi-lock"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="toggleShowPassword"
      />
      <v-text-field
        label="Email address"
        v-show="register"
        v-model="loginDetails.email"
        type="email"
        prepend-icon="mdi-mail"
      />
      <div class="submit-options">
        <button
          class="ma-2 base-button si-button"
          v-bind:class="{ 'off-button': login, 'fa fa-sign-in': login_icon }"
          @click="clickLogin"
        >{{labelSI}}</button>
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
      register: false,
      login_icon: false,
      labelSU: '',
      labelSI: 'Sign in',
      loginDetails: {
        username: '',
        password: '',
        email: '',
        password2: ''
      }
    }
  },
  mounted() {
    this.$store.commit('changeMenuVisibility', { visibility: false });
  },
  methods: {
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
    async loginWithDetails() {
      console.log(this.loginDetails);
      return true;
    },
    async clickLogin() {
      event.preventDefault(); 
      this.toggleRegister('si');
      if (this.login) this.toggleLogin();
      else {
        const loggedIn = await this.loginWithDetails();
        if(loggedIn) this.$router.push('/home');
      }
    },
    clickSignup() {
      event.preventDefault(); 
      this.toggleRegister('su');
      if(!this.login) this.toggleLogin();
    },
    toggleLogin() {
      this.login = !this.login;
      setTimeout(() => {
        this.login_icon = !this.login_icon;
        this.labelSU = this.login ? 'Sign up' : '';
        this.labelSI = this.login ? '' : 'Sign in';
      }, 10); 
    },
    toggleRegister(flag = null) {     
      if(flag) {
        switch(flag) {
          case 'si':
            this.register = false;
            break;
          case 'su':
            this.register = true;
            break;
          default:
            this.register = !this.register;
        }
      }
    }
  }
}
</script>

<style>
  .v-form {
    padding: 5rem 0rem;
    display: flex;
    flex-flow: column wrap;
  }

  .v-form > .v-text-field {
    min-width: 80%;
  }

  .submit-options {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  .base-button {
    width: 45%;
  }

  .v-spacer {
    height: 1rem;
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