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
                    image:'/products/colageno.png',
                    categoryId: 1
                },
                {name: 'Proteina',price: 160000, id: 2, 
                    image:'/products/proteina.webp',
                    categoryId: 3
                },
                {name: 'Calcio', price: 57000, id: 3, 
                    image:'/products/calcio.webp',
                    categoryId: 1
                },
                {name: 'Calostro', price: 65000, id: 4, 
                    image:'/products/calostro.webp',
                    categoryId: 2
                },
                {name: 'Te verde',price: 32000, id: 5, 
                    image:'/products/TeVerde.webp',
                    categoryId: 5
                }, 
                {name: 'Omega 3',price: 52500, id: 6, 
                    image:'/products/omega.webp',
                    categoryId: 4
                },   
                {name: 'Mi vitamina',price: 57300, id: 7 ,categoryId: 6},               
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