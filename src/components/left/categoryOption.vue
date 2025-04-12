<script lang="ts">
import { mapState } from 'pinia';
import { useCategoriesStore } from '@/stores/categories';

    export default {
        computed: {
            ...mapState(useCategoriesStore, ['categories'])
        },
        methods: {
            clearCategory(){
                this.$router.push({
                    name: 'home'
                });
            },
            goToCategory(categoryId: number) {
                this.$router.push({
                    name: 'category',
                    params: { categoryId }
                })
            },
        }

    }
</script>

<template>
    <v-list-subheader>
        categorias
    </v-list-subheader>

    <v-list-item 
        link 
        @click="clearCategory()" 
        :active="$route.name === 'home'"
        title="Todas">
    </v-list-item>

    <v-list-item
        v-for="category in categories"
        :key="category.id"
        :title= "category.name" 
        link
        :active="$route.name === 'category' && Number($route.params.categoryId) === category.id"
        @click="goToCategory(category.id)">
    </v-list-item>
</template>
