<template>
  <v-app>
    <v-navigation-drawer
      v-model='drawer'
      dark
      right
      app
      temporary
    >
      <v-list dense>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <span>Home</span>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/about">
          <v-list-tile-action>
            <v-icon>question_answer</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <span>About</span>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark app color="#209CEE">
      <v-toolbar-title class='branding'>
        UCourse
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-side-icon @click="drawer = !drawer" />
    </v-toolbar>
    <v-content class='custom-layout'>
      <v-container>
      <slot/>
      </v-container>
    </v-content>
    <!--
    <div class="custom-layout">
      <slot/>
    </div>
    -->
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

export default {
  data: () => ({
    drawer: null,
  }),
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
    margin: 0 auto;
    width: 100%;
    margin-top: 20px;
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
.branding {
  font-family: 'Leckerli One', cursive;
  font-size: 20pt;
}
</style>
