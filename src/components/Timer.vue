<template>
  <div class="timer-container">
    <p class="timer">{{timeString}}</p>
  </div>
</template>

<script>
const moment = require('moment');
export default {
  mounted() {
    let times = localStorage.getItem('settings').split(',');
    
    times = times.map((time) => moment().format(`YYYY-MM-DDT${time}:00`))
      .sort((a, b) => moment(a) - moment(b));
    
    let i = 0;
    let time;
    while(moment(times[i]).isBefore(moment()) && i < times.length) {
      time = moment(times[i]);
      i += 1;
    }
    const current = moment();
    console.log({ current, time, diff: current - time });
    this.time = current - time;
  },
  data() {
    return {
      time: moment(),
      timeString: ''
    }
  },
  watch: {
    time: function() {
      this.timeString = moment(this.time).format('HH:mm:ss');
    }
  }
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