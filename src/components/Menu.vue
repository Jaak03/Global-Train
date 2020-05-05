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
          @click="go('stats')"
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
          @click="go('settings')"
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
          @click="go('home')"
          v-show="pages.home"
        >
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn
          class="menu-fab"
          style="color: rgb(216, 216, 216);"
          fab
          dark
          small
          color="rgb(0, 45, 87)"
          @click="go('logout')"
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
        pages: {
          home: this.$router.history.current.name !== 'home'
        }
      }
    },
    methods: {
      go(action) {
        switch(action) {
          case 'logout':
              if(localStorage.token) localStorage.removeItem('token');
              this.$router.replace('/');
              break;
          case 'home':
            this.$router.replace('/home');
            break;
          case 'settings':
            this.$router.replace('/settings');
            break;
          case 'stats':
            this.$router.replace('/statistics');
            break;
        }
      },
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