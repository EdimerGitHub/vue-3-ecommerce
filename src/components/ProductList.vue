<script lang="ts">//componente padre
//vue____________________________
import ProductCard from './ProductCard.vue'
import Cart from './Cart.vue'
import type { CartDetail,Product } from '../model/types';


export default {
    components: {
        ProductCard,
        Cart
    },
    props: ['details'],
    data() {
        return{
            products: <Array<Product>>[
                {name: 'Silla', price: 56, id: 4},
                {name: 'Monitor', price: 450, id: 7},
                {name: 'Microfono',price: 120, id: 5},
                {name: 'Silla', price: 56, id: 4},
                {name: 'Monitor', price: 450, id: 7},
                {name: 'Microfono',price: 120, id: 5},                
            ]
        }
    },
    methods: {
        OnProductAdded(productId: number){
  
        }
    },

}
</script>

<template>

    <v-row>
        <v-col v-for="p in products" cols="4">
            <ProductCard 
                :product="p"
                @addProduct="OnProductAdded(p.id)"
            />
        </v-col>
    </v-row>
    
</template>