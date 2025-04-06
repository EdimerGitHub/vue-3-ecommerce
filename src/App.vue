<script lang="ts">
import TopBar from './components/TopBar.vue';

export default {
  components: {
    TopBar
  }
}
</script>

<template>

  <v-app>
    <TopBar />

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
    
  </v-app>
  
</template>