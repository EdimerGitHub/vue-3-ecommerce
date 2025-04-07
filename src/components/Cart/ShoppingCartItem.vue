<script lang="ts">
import type { CartDetail } from '@/model/types';
import { useCartStore } from '@/stores/cart';
import { mapActions } from 'pinia';
import type { PropType } from 'vue';

export default {
    props: {
        detail: {
            type: Object as PropType<CartDetail>,
            required: true
        },
    },
    methods: {
        ...mapActions(useCartStore ,{
            decrementQuantity: 'decrement',
            incrementQuantity: 'increment',
            deleteProduct: 'deleteProduct'
        })
    },
    computed: {
        productImageUrl(){
            return this.detail.product.image ?? 'https://images.ecestaticos.com/qT3qXnjQDbmACTey4MBI4Q4NUU4=/31x106:1859x1477/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Ffe8%2F436%2Fb96%2Ffe8436b9686c43e0fb4278c7871f0ec7.jpg';
        },
        subTotal() {
            return this.detail.product.price * this.detail.quantity;
        }
    }
}
</script>

<template>
    <tr>
        <td>       
            <v-avatar size="40px">
                <v-img :src="productImageUrl"/>
            </v-avatar>
            {{ detail.product.name}} 
        </td>
        <td class="text-center">
            <v-btn 
                class="ml-2"
                icon="mdi-minus"
                size="x-small"
                @click="decrementQuantity(detail.product.id)">
            </v-btn>
            {{detail.quantity}}
            <v-btn 
                icon="mdi-plus"
                size="x-small"
                @click="incrementQuantity(detail.product.id)">
            </v-btn>            
        </td>
        <td> $ {{ detail.product.price }}</td>
        <td> {{ subTotal }} </td>
        <td>
            <v-btn 
                class="ml-2"
                icon="mdi-delete"
                size="x-small"
                @click="deleteProduct(detail.product.id)">                            
            </v-btn>
        </td>
    </tr>

</template>