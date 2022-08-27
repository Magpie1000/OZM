<template>
  <v-app-bar app dark>
    <div class="d-flex align-center mx-2">
      <v-icon color="ssafyBlue"> mdi-noodles </v-icon>
    </div>
    <v-toolbar-title class="ml-2">멀캠 오점무</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn target="_blank" icon>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
    <v-btn target="_blank" icon>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
    <v-btn target="_blank" icon>
      <v-icon>mdi-cog</v-icon>
    </v-btn>
  </v-app-bar>

  <!-- <div>
    <p>111</p>
  </div> -->
</template>

<script>
export default {
  name: "TheNavBar",

  components: {},

  data: () => ({}),
};
</script>

<style></style>
