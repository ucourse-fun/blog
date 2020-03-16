<template>
  <v-card
    class='mx-auto'
    max-width='360'
  >
    <v-img
      class='white--text align-end'
      height='200px'
      :src='course.featuredImage'
    >
      <span class='headline pa-2'>
        {{ course.title }}
      </span>
    </v-img>
    <v-card-text class='pa-2'>
      <div>{{ course.excerpt }}</div>
      <div class='grey--text text--darken-1'>等級：{{ course.level }}</div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    course: Object,
  },
}
</script>
