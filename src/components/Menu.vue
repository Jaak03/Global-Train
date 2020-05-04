<template>
  <div v-show="this.$store.state.showFab" class="menu">
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
            style="color: rgb(216, 216, 216);"
            color="rgb(0, 45, 87)"
            dark
            fab
            medium
          >
            <v-icon v-if="fab">mdi-close</v-icon>
            <v-icon v-else>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-btn
          color="rgb(0, 45, 87)"
          style="color: rgb(216, 216, 216);"
          fab
          dark
          small
        >
          <v-icon>mdi-weight-lifter</v-icon>
        </v-btn>
        <v-btn
          class="menu-fab"
          style="color: rgb(216, 216, 216);"
          fab
          dark
          small
          color="rgb(0, 45, 87)"
        >
          <v-icon>mdi-cog</v-icon>
        </v-btn>
        <v-btn
          class="menu-fab"
          style="color: rgb(216, 216, 216);"
          fab
          dark
          small
          color="rgb(0, 45, 87)"
          @click="logout"
        >
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </v-speed-dial>
    </v-fab-transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        direction: 'left',
        fab: false,
        fling: false,
        hover: true,
        tabs: null,
        top: false,
        right: false,
        bottom: false,
        left: false,
        transition: 'slide-y-reverse-transition',
      }
    },
    methods: {
      logout() {
        if(localStorage.token) localStorage.removeItem('token');
        this.$router.push('/');
      }
    }
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