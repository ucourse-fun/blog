<template>
<div>
  <v-layout row wrap>
    <v-flex xs12 sm6 md4 lg3 class='px-1 py-2'
      justify-space-between
      v-for='course in courses'
      :key='course.id'
    >
      <CourseCard 
        :course='course' 
      />
    </v-flex>
  </v-layout>
</div>
</template>

<script>
import CourseCard from './CourseCard'

export default{
  components: {
    CourseCard,
  },
  props: {
    courses: Array,
  }
}
</script>
