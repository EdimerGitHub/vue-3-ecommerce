<script lang="ts">
import type { Category } from '@/model/types';
    export default {
        data() {
            return{
                categories: [{
                    id:1,
                    name: 'Colagenos',
                    description: 'Descubre nuestra variedad de colagenos como el hidrolizado y los tipo 1, 2 y 3'
                },{
                    id:2,
                    name: 'Defensas',
                    description: 'Descubre nuestra variedad de productos para elevar tus defensas y estar siempre saludable'
                },{
                    id:3,
                    name: 'Deporte',
                    description: 'Descubre nuestra variedad de suplementos deportivos y empieza a rendir al máximo'
                },{
                    id:4,
                    name: 'Cardiovascular',
                    description: 'Descubre nuestra variedad de productos para el cuidado del corazon'
                },{
                    id:5,
                    name: 'Antioxidante',
                    description: 'Descubre nuestra variedad de productos para neutralizar radicales libres y retrasar el daño celular'
                },{
                    id:6,
                    name: 'Vitaminas',
                    description: 'Descubre nuestra variedad de vitaminas a corde a tu necesidad'
                }] as Category[]
            }
        }
    }
</script>
<template>
    <v-sheet rounded="lg">
        <v-list rounded="lg">
            <v-list-item
                v-for="category in categories"
                :key="category.id"
                :title= "category.name"
                link
            ></v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item
                color="grey-lighten-4"
                title="Order by price"
                link
            ></v-list-item>
        </v-list>
    </v-sheet>    
</template>