<template>
  <!-- App.vue -->

  <v-app>
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import axios from "axios"
export default {
  name: "App",
  components: {
    
  },
  created(){
    axios.post(

    )
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>