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
    <v-toolbar dark app dense inverted-scroll scroll-threshold='150' color="rgba(32,156,238,0.85)">
      <v-toolbar-title class='branding'>
        UCourse
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-side-icon @click="drawer = !drawer" />
    </v-toolbar>
    <slot/>
    <!--
    <div>
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

  body {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.5;
  }
  
  .custom-layout {
    margin: 0 auto;
    padding: 0;
    width: 100%;
  }

.branding {
  font-family: 'Leckerli One', cursive;
  font-size: 20pt;
}
</style>
