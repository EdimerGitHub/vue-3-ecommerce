<script lang="ts">
import type { Category } from '@/model/types';
    export default {
        data() {
            return{
                categories: [{
                    id:1,
                    name: 'Technology'
                },{
                    id:2,
                    name: 'Toys'
                }] as Category[]
            }
        }
    }
</script>
<template>
    <v-sheet rounded="lg">
        <v-list rounded="lg">
            <v-list-item
                v-for="category in categories"
                :key="category.id"
                :title= "category.name"
                link
            ></v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item
                color="grey-lighten-4"
                title="Order by price"
                link
            ></v-list-item>
        </v-list>
    </v-sheet>    
</template>