<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-title>TSUTENN</v-app-bar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn icon @click="goToHome">
        <v-icon>mdi:mdi-home</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>

  <v-footer style="background-color: #eee;">
    <v-row justify="center" no-gutters>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>{{ author }}</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      profile: undefined
    }
  },

  computed: {
    author() {
      return this.profile && this.profile.name ? this.profile.name : "Kaiwen Li"
    }
  },

  async created() {
    try {
      const response = await fetch('/profile.json');
      this.profile = await response.json();
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  },

  mounted() {
    document.title = "Tsutenn's Page";
  }
}
</script>

<style>
@import '~vuetify/styles';
</style>
