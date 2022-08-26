<template>
  <v-app>
    <TheNavBar />
    <v-main>
      <LandingPage />
    </v-main>
  </v-app>
</template>

<script>
import TheNavBar from './components/bar/TheNavBar.vue';
import LandingPage from './views/LandingPage.vue';

export default {
  name: 'App',

  components: {
    TheNavBar,
    LandingPage,
  },

  data: () => ({
    //
  }),
};
</script>
