<template>
  <div v-show="showMenu" class="menu">
    <v-fab-transition>
      <v-speed-dial
        v-model="fab"
        :top="top"
        :bottom="bottom"
        :right="right"
        :left="left"
        :direction="direction"
        :open-on-hover="hover"
        :transition="transition"
      >
        <template v-slot:activator>
          <v-btn
            v-model="fab"
            color="blue darken-2"
            dark
            fab
          >
            <v-icon v-if="fab">mdi-close</v-icon>
            <v-icon v-else>mdi-account-circle</v-icon>
          </v-btn>
        </template>
        <v-btn
          fab
          dark
          small
          color="green"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="indigo"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="red"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-speed-dial>
      <!-- <v-btn color="success" fab x-large dark>
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-fab-transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showMenu: true,
        direction: 'left',
        fab: false,
        fling: false,
        hover: false,
        tabs: null,
        top: false,
        right: false,
        bottom: false,
        left: false,
        transition: 'slide-y-reverse-transition',
      }
    },
  }
</script>

<style>
  .menu {
    width: 5rem;
    height: 5rem;
    margin: auto;
  }

  #create .v-btn--floating {
    position: relative;
  }
</style>