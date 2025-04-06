<script lang="ts">//componente padre
//vue____________________________
import ProductCard from './ProductCard.vue'
import type { Product } from '../model/types';


export default {
    components: {
        ProductCard
    },
    data() {
        return{
            products: [
                {name: 'Silla', price: 56, id: 4},
                {name: 'Monitor', price: 450, id: 7},
                {name: 'Microfono',price: 120, id: 5},
                {name: 'Silla', price: 56, id: 4},
                {name: 'Monitor', price: 450, id: 7},
                {name: 'Microfono',price: 120, id: 5},                
            ] as Product[]
        }
    },

}
</script>

<template>

    <v-row>
        <v-col v-for="p in products" :key="p.id" cols="4">
            <ProductCard 
                :product="p"
            />
        </v-col>
    </v-row>
    
</template>