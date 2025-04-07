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
                {name: 'Colageno', price: 75000, id: 1, 
                    image:'https://acdn-us.mitiendanube.com/stores/232/602/products/edercolag-edervit1-db2123f490da9b6b3515832699991329-640-0.png'
                },
                {name: 'Proteina',price: 160000, id: 2, 
                    image:'https://www.levennatural.com/wp-content/uploads/2021/09/GMN14.jpg'
                },
                {name: 'Calcio', price: 57000, id: 3, 
                    image:'https://cdnx.jumpseller.com/mis-vitaminas/image/3743696/resize/1200/1200?1654967356'
                },
                {name: 'Calostro', price: 65000, id: 4, 
                    image:'https://molinatural.com/wp-content/uploads/2021/02/Diseno-sin-titulo-29-1.png'
                },
                {name: 'Te verde',price: 32000, id: 5, 
                    image:'https://cdnx.jumpseller.com/mis-vitaminas/image/8278259/resize/1200/1200?1651951340'
                }, 
                {name: 'Omega 3',price: 52500, id: 5, 
                    image:'https://dexter-media-prod-co.s3.amazonaws.com/__sized__/products/__filtered__/79078603__webp__-thumbnail-1080x1080-70.webp'
                },   
                {name: 'Mi vitamina',price: 57300, id: 5},               
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