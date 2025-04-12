<script lang="ts">
import OrderOptions from './orderOptions.vue';
import categoryOption from './categoryOption.vue';

    export default {
        components: {
            OrderOptions,
            categoryOption
        }
    }
</script>

<template>
    <v-sheet rounded="lg">
        <v-list rounded="lg">

            <categoryOption/>
            <v-divider class="my-2"></v-divider>
            <OrderOptions/>
            
        </v-list>
    </v-sheet>   
</template>