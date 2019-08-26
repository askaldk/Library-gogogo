<template>
    <v-row align="center" justify="center">
    <v-img
      :src="ImageSrc"
      lazy-src="https://picsum.photos/id/11/10/6"
      aspect-ratio="1"
      class="grey lighten-2"
      max-width="500"
      max-height="300"
    ></v-img>
  </v-row>
</template>

<script>
export default {
    name:"HoodCho",
    data(){
        return{
            ImageSrc:"./pictures/characters/HoodCho.jpg"
        }
    }
}
</script>