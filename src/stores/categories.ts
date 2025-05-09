import type { Category } from '../model/types';
import { defineStore } from 'pinia';

export const useCategoriesStore = defineStore('categories', {
    state: () => ({
        categories: [] as Category[]
    }),
    getters: {
  

    },
    actions: {
        fetchCategories() {
            fetch('/data/categories.json')
            .then(response => response.json())
            .then((data) =>  {
                this.categories = data;
            })
        },

    }
})
