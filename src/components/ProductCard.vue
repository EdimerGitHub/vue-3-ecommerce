<script lang="ts">//componente hijo
import type { PropType } from "vue";
import type { Product } from "../model/types";
import { useCartStore } from '@/stores/cart';

export default {
        props: {
            product: {
                type: Object as PropType<Product>,
                required: true
            }
        },
        methods: {
            OnAddButtonClick(){
                const cartStore = useCartStore();
                cartStore.addProduct(this.product);
            }
        },
        computed: {
            productImageUrl(){
                return this.product.image ?? 'https://images.ecestaticos.com/qT3qXnjQDbmACTey4MBI4Q4NUU4=/31x106:1859x1477/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Ffe8%2F436%2Fb96%2Ffe8436b9686c43e0fb4278c7871f0ec7.jpg';
            }
        }
}

</script>

<template>
    <v-card>
        <v-img
        height="200px"
        :src="productImageUrl"
        cover
        ></v-img>

        <v-card-title>
            {{ product.name }}
        </v-card-title>

        <v-card-text>
            <p class="mb-4">
                Esta es una descripcion que describe la descripcion de lo descrito.
            </p>
            <v-chip>
                $ {{ product.price }}
            </v-chip>
        </v-card-text>

        <v-card-actions>
            <v-btn @click="OnAddButtonClick" color="orange-lighten-2">Agregar al carrito</v-btn>
        </v-card-actions>

    </v-card>
</template>