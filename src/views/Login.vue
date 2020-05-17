<template>
  <div class="login-container">
    <v-form>
      <v-text-field
        label="Email address"
        v-model="loginDetails.email"
        type="email"
        prepend-icon="mdi-mail"
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
import { generateRequest } from '../helpers/http';

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
        password: '1234567',
        email: 'jaak@gmail.com',
        password2: '1234567'
      },
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
      try {
        const url = this.$store.state.api.API_URL;
        const options = generateRequest({
            email: this.loginDetails.email,
            password: this.loginDetails.password
          }, this);
        
        const loginRequest = await fetch(`${url}user/login`, options);
  
        return loginRequest.json().then(res => {
          if (res.user) {
            localStorage.setItem('settings', JSON.stringify(res.user.settings));
          }
  
          if (res.token) {
            localStorage.setItem('token', res.token);
            return res;
          } else {
            return { msg: res.msg || 'The login request failed.' };
          }
        });
      } catch (e) {
        return { msg: 'The login request failed.' }
      }
    },
    async registerUser() {
      if (this.loginDetails.password !== this.loginDetails.password2) {
        this.$store.commit('showMessage', { msg: 'Passwords do not match.'});
      }

      const url = this.$store.state.api.API_URL;
      const options = generateRequest({
        email: this.loginDetails.email,
        password: this.loginDetails.password,
        gender: 1,
        age: 12,
      }, this);

      const registerRequest = await fetch(`${url}user/register`, options);
      registerRequest.json().then(result => {
        if (result.msg === 'Successfully registered new user.') {
          this.$store.commit('showMessage', { msg: result.msg });
          this.loginDetails.password2 = '';
          this.toggleRegister('si');
          this.toggleLogin();
        }
      });
    },
    async clickLogin() {
      event.preventDefault(); 
      this.toggleRegister('si');
      if (this.login) this.toggleLogin();
      else {
        const loggedIn = await this.loginWithDetails();
        const settings = localStorage.getItem('settings');
        const token = localStorage.getItem('token');
        if(loggedIn) {
          if(settings && token) {
            console.log({ settings, token });
            this.$store.commit('showMessage', { msg: `${loggedIn.msg} Please commit to some session times.` });
            this.$router.push('/settings');
          } else {
            this.$store.commit('showMessage', { msg: loggedIn.msg });
            this.$router.push('/home');
          }
        } else {
            this.$store.commit('showMessage', { msg: loggedIn.msg });
        }
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
            if (this.register) {
              this.registerUser();
            } else {
              this.register = true;
            }
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