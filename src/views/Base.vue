<template>
  <div class="base-container">
    <div class="router-link">
      <router-view/>
    </div>
    <Menu class="menu"/>
  </div>
</template>

<script>
  import Menu from '../components/Menu';
  export default {
    name: 'Base',
    mounted() {
      console.log('No token found');
      if(!localStorage.token) this.$router.push('/login');
    },
    components: {
      Menu,
    },
    data: () => ({
      title: 'Toets hier'
    }),
    methods: {}
  }
</script>

<style>
  .base-container {
    display: grid;
    grid-template-columns: 5rem auto 5rem;
    grid-template-rows: 5rem auto 5rem;
  }

  .router-link {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  .menu {
    position: absolute;
    display: block;
    right: 0px;
    bottom: 0px;
  }
</style>