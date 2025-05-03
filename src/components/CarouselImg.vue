<template>
    <v-carousel
      height="400"
      show-arrows="hover"
      cycle
      hide-delimiter-background
    >
        <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        cover
        ></v-carousel-item>
    </v-carousel>
  </template>

<script lang="ts">
    export default {
        data (){
            return{
                items: [
                {
                src: '/carousel/descuento.png',
                },
                {
                src: '/carousel/miel.png',
                },
                {
                src: '/carousel/aceites.png',
                },
                ]
            }
        }

    }

</script>
