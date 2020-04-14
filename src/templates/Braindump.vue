<template>
  <Layout class='braindump'>
    <v-container>
      <VueRemarkContent class='questions' />
    </v-container>
  </Layout>
</template>

<script>
import Layout from '~/layouts/Braindump'

export default {
components: {
  Layout,
            }
}
</script>

<style>
.braindump {
  background-color: white !important;
}
.questions {
  padding: 1em;
  border: dashed 1px #999;
}
</style>
