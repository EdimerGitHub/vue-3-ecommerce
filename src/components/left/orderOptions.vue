<script lang="ts">
import { useProductsStore } from '@/stores/products';
import { mapActions, mapState } from 'pinia';
    export default {
        methods: {
            ...mapActions(useProductsStore, [
                'orderByName', 'orderByNameDesc',
                'orderByPrice', 'orderByPriceDesc'
            ])
        },
        computed: {
            ...mapState(useProductsStore, ['order'])
        }
    }
</script>

<template>
    <v-list-subheader>
        Ordenar por
    </v-list-subheader>

    <v-list-item
        title="Precio menor"
        link
        @click="orderByPrice"
        :active="order === 'price'">
    </v-list-item>
    <v-list-item
        title="Precio mayor"
        link
        @click="orderByPriceDesc"
        :active="order === 'priceDesc'">
    </v-list-item>

    <v-list-item
        title="Nombre (A-Z)"
        link
        @click="orderByName"
        :active = " order === 'name'">
    </v-list-item>
    <v-list-item
        title="Nombre (Z-A)"
        link
        @click="orderByNameDesc"
        :active = " order === 'nameDesc'">
    </v-list-item>

</template>