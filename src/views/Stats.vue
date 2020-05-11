<template>
  <div>
    <v-row justify="center" align="center">
      <h1>Statistics</h1>
    </v-row>
    <v-row justify="center" align="center">
      <v-col>
        <v-row 
          class="progress-tracker"
          v-for="{ label, total, done } in trackbars"
          :key="label"
        >
          <label for="v-progress-linear">{{ label }}</label>
          <v-progress-linear
              :value="done/total*100"
              color="blue-grey"
              height="25"
              reactive
            >
              <template>
                <strong>{{ done }}/{{ total }}</strong>
              </template>
            </v-progress-linear>
        </v-row>
      </v-col>
    </v-row> 
  </div>
</template>

<script>
  export default {
    data() {
      return {
        trackbars: [
          {
            label: 'Sessions for day',
            total: 4,
            done: 1
          },
          {
            label: 'Sessions for week',
            total: 23,
            done: 18
          },
          {
            label: 'Sessions for month',
            total: 37,
            done: 30
          },
          {
            label: 'Total sessions',
            total: 102,
            done: 78
          }
        ]
      }
    }
  }
</script>

<style>
  .v-progress-linear {
    border-radius: 50px;
  }

  .progress-tracker {
    padding: 1rem 2rem 0 2rem;
  }
</style>