<template>
  <v-app>
    <Base/>
  </v-app>
</template>

<script>
import Base from './views/Base';

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
    font-size: 1rem;
  }

  .v-text-field {
    font-size: 1rem;
  }

  h1 {
    font-size: 4rem;
  }

  button:focus {
    outline:0;
  }

  .v-row {
    padding: 50px 50px; 
  }

  a {
    background-color: lightblue;
    color: inherit;
    text-decoration: none;
  }

</style>