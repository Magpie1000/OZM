<template>
    <v-app-bar
      app
      color="dark"
      dark
    >
      <div class="d-flex align-center">
        <v-icon class="mx-2">
          mdi-noodles
        </v-icon>
      </div>
      <v-toolbar-title>멀캠 오점무</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

  <!-- <div>
    <p>111</p>
  </div> -->
</template>

<script>
export default {
  name: 'TheNavBar',
  
  components: {

  },

  data: () => ({

  }),
  
}
</script>

<style>

</style>