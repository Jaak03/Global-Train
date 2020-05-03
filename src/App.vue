<template>
  <v-app>
    <Base/>
  </v-app>
</template>

<script>
import Base from './components/page/Base';

export default {
  name: 'App',
  components: {
    Base,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
  .base-button {
    border-radius: 50px;
    transition: width 100ms;
    height: 50px;
    box-shadow: 2px 2px 3px #d6d6d6;
    font-size: 1.5em;
  }

  .v-text-field {
    font-size: 1.5em;
  }

  button:focus {
    outline:0;
  }
</style>