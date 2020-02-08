<template>
  <v-app>
    <div class="custom-layout">
      <header class="header">
        <strong>
          <g-link to="/">{{ $static.metadata.siteName }}</g-link>
        </strong>
        <nav class="nav">
          <g-link class="nav__link" to="/">Home</g-link>
          <g-link class="nav__link" to="/about/">About</g-link>
        </nav>
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
