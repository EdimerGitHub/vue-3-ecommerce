<script lang="ts">
import { useCartStore } from '@/stores/cart';
import { mapState } from 'pinia';
import ShoppingCartItem from './ShoppingCartItem.vue';

export default {
    components: {
        ShoppingCartItem
    },
    computed: {
        ...mapState(useCartStore, ['details'])
    }
}
</script>


<template>
    <v-card>    
        <v-card-title>
                Productos agregados al carrito
        </v-card-title>

        <v-card-text>  
            <v-table v-if="details.length > 0">
                <thead>
                    <tr>
                        <th class="text-left">
                            Producto
                        </th>
                        <th class="text-center">
                            Cantidad
                        </th>
                        <th class="text">
                            precio
                        </th>
                        <th class="text-left">
                            Subtotal
                        </th>
                        <th class="text-left">
                            <span class="d-sr-only">
                                Eliminar
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <shoppingCartItem 
                        v-for="detail in details" 
                        :key="detail.product.id" 
                        :detail="detail"/>
                </tbody>
            </v-table>     
            <p v-else>
                Aun no has agregado productos a tu carrito de compras.
                Haz <RouterLink to="/">clic aqui</RouterLink> para ver los productos
            </p>

        </v-card-text>

    </v-card>
</template>
