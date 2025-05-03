<script lang="ts">
import { useCartStore } from '../stores/cart';
export default{
    computed: {
        itemsCount(){
            const cartStore = useCartStore();
            return cartStore.cartItemsCount;
        }
    }
}
</script>

<template>
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-center">
        <v-avatar
          class="me-4 "
          size="90">
          <v-img src="/Herbal Therapy Logo.png"/>
        </v-avatar>

        <RouterLink to="/" custom v-slot="{navigate}">
          <v-btn  :active="$route.name === 'home'" variant="text" @click="navigate">
                <v-icon icon="mdi-home-variant"></v-icon>
            <span class="d-none d-sm-flex">Inicio</span>
          </v-btn>
        </RouterLink>

        <RouterLink to="/cart" custom v-slot="{navigate}">
          <v-badge :content="itemsCount" :model-value="itemsCount > 0" color="orange-lighten-2">
            <v-btn  :active="$route.name === 'cart'" variant="text" @click="navigate">
                <v-icon icon="mdi-cart"></v-icon>
              <span class="d-none d-sm-flex">Carrito</span>
            </v-btn>
          </v-badge>
        </RouterLink>

        <RouterLink to="/about" custom v-slot="{navigate}">
          <v-btn  :active="$route.name === 'about'" variant="text" @click="navigate">
            <v-icon icon="mdi-information"></v-icon>
            <span class="d-none d-sm-flex">Acerca de</span>
          </v-btn>
        </RouterLink>

        <v-spacer></v-spacer>

        <v-responsive max-width="160">
          <v-text-field
            density="compact"
            label="Search"
            rounded="lg"
            variant="solo-filled"
            flat
            hide-details
            single-line
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>
</template>