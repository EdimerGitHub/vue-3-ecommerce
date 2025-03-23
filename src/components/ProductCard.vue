<script lang="ts">//componente hijo
import type { PropType } from "vue";
import type { Product } from "../model/types";

export default {
        props: {
            product: {
                type: Object as PropType<Product>,
                required: true
            }
        },
        emits : ['addProduct'],
        methods: {
            OnAddButtonClick(){
                //console.log('Agregando producto'+ this.product.id);
                this.$emit('addProduct')
            }
        }
}

</script>

<template>
    <v-card>
        <v-img
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        cover
        ></v-img>

        <v-card-title>
            {{ product.name }}
        </v-card-title>

        <v-card-text>
            <p class="mb-2">
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