<script lang="ts">//componente padre
//vue____________________________
import ProductCard from './ProductCard.vue'
import { useProductsStore } from '../stores/products'
import { mapState } from 'pinia';


export default {
    components: {
        ProductCard
    },
    computed: {
        ...mapState(useProductsStore,['products'])
 
    }

}
</script>

<template>

    <v-row>
        <v-col v-for="p in products" :key="p.id" cols="12" sm="6" md="4" lg="3">
            <ProductCard 
                :product="p"
            />
        </v-col>
    </v-row>
    
</template>