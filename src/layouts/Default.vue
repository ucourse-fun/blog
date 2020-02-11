<template>
  <v-app>
    <Navbar />
    <div class="custom-layout">
      </header>
      <slot/>
    </div>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar,
  }
}

</script>
<style lang="scss" scoped>
  $margin-size: 20px;

  body {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.5;
  }

  .custom-layout {
    max-width: 760px;
    margin: 0 auto;
    width: 100%;
    padding-left: $margin-size;
    padding-right: $margin-size;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: $margin-size;
    height: 80px;
  }

  .nav__link {
    margin-left: $margin-size;
  }
</style>
