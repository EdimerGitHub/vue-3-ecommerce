
<script lang="ts">
import type { CartDetail } from "./types";
export default {
    props: {
        details: {
            type: Object as PropType<Array<CartDetail>>,
            required: true
        }
    }
    // data() {
    //     return {
    //         details: <array<CartDetail>>[]
    //     };
    //}
}
</script>


<template>
    <v-card class="mt-4">    
        <v-card-text>
            <v-card-title>
                Productos agregados al carrito
            </v-card-title>
            
            <v-list>
                <v-list-item v-for="detail in details" :value="detail.productId">
                    <v-list-item-title>
                        Product {{ detail.productId }} 
                        (Qty: {{detail.quantity}})
                    </v-list-item-title>
                </v-list-item>
            </v-list>

        </v-card-text>

    </v-card>
</template>
