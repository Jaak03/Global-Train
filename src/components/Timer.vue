<template>
  <div class="timer-container">
    <p class="timer">TIMER</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .timer-container {
    border: solid rgb(26, 51, 87);
    height: 20rem;
    width: 20rem;
    border-radius: 20rem;
    
    position: absolute;
    top:0;
    bottom: 5rem;
    left: 0;
    right: 0;
      
    margin: auto;
  }

  .timer {
    color: rgb(122, 122, 122);
    text-align: center;
    padding: 7rem 0;
    font-size: 4rem;
  }
</style>