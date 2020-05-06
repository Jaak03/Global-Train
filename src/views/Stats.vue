<template>
  <div>
    <v-row justify="center" align="center">
      <v-col>
        <v-row></v-row>
        <label for="v-progress-linear">Toets</label>
         <v-progress-linear
            v-model="skill"
            color="blue-grey"
            height="25"
            reactive
          >
            <template v-slot="{ value }">
              <strong>{{ Math.ceil(value) }}%</strong>
            </template>
          </v-progress-linear>
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
            label: 'Toets',
            total: 10,
            done: 4,
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
</style>