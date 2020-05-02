<template>
  <v-app>
    <Login/>
  </v-app>
</template>

<script>
import Login from './components/page/Login';

export default {
  name: 'App',

  components: {
    Login,
  },

  data: () => ({
    //
  }),
};
</script>
