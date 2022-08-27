<template>
  <v-card class="ma-1">
    <v-card-title>{{ title }}</v-card-title>
    <v-img :src="imgURL" contain max-height="300" />
    <v-card-text>{{ content }}</v-card-text>
    <v-btn>sdf</v-btn>
  </v-card>
</template>

<script>
export default {
  name: "LandingPageCard",

  props: {
    title: String,
    imgURL: String,
    content: String,
  },

  data: () => ({
    //
  }),
};
</script>

<style></style>
