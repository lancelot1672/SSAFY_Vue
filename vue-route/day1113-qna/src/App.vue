<template>
  <v-app>
    <v-app-bar app color="white" flat>
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs centered class="ml-n9" color="grey darken-1">
        <v-tab v-for="link in links" :key="link">
          {{ link }}
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12">
          <v-sheet min-height="10vh" rounded="lg" class="select_section">
            <router-view />
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
    links: ["Dashboard", "Messages", "Profile", "Updates"],
  }),
};
</script>
