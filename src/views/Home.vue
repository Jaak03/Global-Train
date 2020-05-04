<template>
  <div>
    <Timer/>
    
  </div>
</template>

<script>
import Timer from '../components/Timer';

export default {
  name: 'Home',
  mounted() {
    this.$store.commit('changeMenuVisibility', { visibility: true });
  },
  components: {
    Timer,
  }
}
</script>

<style>

</style>