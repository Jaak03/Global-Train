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

</style>