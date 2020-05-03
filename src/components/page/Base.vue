<template>
  <div class="base-container">
    <div class="router-link">
      <h1>{{title}}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Base',
    components: {
    },
    data: () => ({
      title: 'Toets hier'
    })
  }
</script>

<style>
  .base-container {
    min-height: 100%;
    display: grid;
    grid-template-columns: 50px auto 50px;
    grid-template-rows: 50px auto 50px;
  }

  .router-link {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 2;
    background-color: cornflowerblue;
  }
</style>