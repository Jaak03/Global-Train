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
    
    this.times = times.map((time) => moment().utc().format(`YYYY-MM-DDT${time}:00`))
      .sort((a, b) => moment(a) - moment(b));

    this.next = this.times[0];
    this.next = moment().format('YYYY-MM-DDT19:53:00');

    this.defineNext();

    const time = moment(this.next);

    const current = moment();
    this.time = time - current;

    this.start();
  },
  data() {
    return {
      time: moment(),
      timeString: '',
      next: 0,
      times: [],
      countingDown: true,
      workingOut: false,
      // sound: new Audio("http://s1download-universal-soundbank.com/wav/nudge.wav"),
      i: 0
    }
  },
  watch: {
    time: function() {
      this.timeString = moment(this.time).utc().format('HH:mm:ss');
    }
  },
  methods: {
    defineNext() {
      while(moment(this.next).isBefore(moment())) {
        this.i += 1;
        if(this.i % this.times.length === 0)
          this.next = moment(this.times[0]).clone().add(1, 'day');
      }
    },
    tick() {
      const current = moment();

      this.time = moment(this.next) - moment(current);
      if (this.time < 1000 && !this.workingOut) {
        this.next = moment().utc().add(5, 'minute');
        this.workingOut = true;
      } else if (this.time < 1000 && this.workingOut) {
        this.defineNext();
        this.workingOut = false;
      }
    },
    stop () {
      this.countingDown = false
      clearInterval(this.timer)
      this.timer = null
    },
    start () {
      this.countingDown = true
      if (!this.timer) {
        this.timer = setInterval( () => {
          this.tick();
        }, 1000 )
      }
    },
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