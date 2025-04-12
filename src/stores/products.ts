import { defineStore } from "pinia";
import type { Product } from '../model/types';

export const useProductsStore = defineStore('products', {
    state: () => ({
        order: 'price' as string,
        categoryId: null as number|null,
        _products: [
            {   
                name: 'Colageno', price: 75000, id: 1, 
                image:'/products/colageno.png',
                categoryId: 1
            },
            {   
                name: 'Proteina',price: 160000, id: 2, 
                image:'/products/proteina.webp',
                categoryId: 3
            },
            {   
                name: 'Calcio', price: 57000, id: 3, 
                image:'/products/calcio.webp',
                categoryId: 1
            },
            {   
                name: 'Calostro', price: 65000, id: 4, 
                image:'/products/calostro.webp',
                categoryId: 2
            },
            {   
                name: 'Te verde',price: 32000, id: 5, 
                image:'/products/TeVerde.webp',
                categoryId: 5
            }, 
            {   
                name: 'Omega 3',price: 52500, id: 6, 
                image:'/products/omega.webp',
                categoryId: 4
            },   
            {   
                name: 'Mi vitamina',price: 57300, id: 7 ,categoryId: 6
            },               
        ] as Product[]
    }),
    getters: {
        products(state) {
            let products = null;

            //Filter
            if(state.categoryId){
                products = state._products.filter(p => p.categoryId === state.categoryId);
            } else {
                products = state._products;
            }

            // Order
            if (state.order === '') {
                return products;
            }

            if (state.order === 'price') {
                return products.sort((a, b) => a.price - b.price);
            }
            if (state.order === 'priceDesc') {
                return products.sort((a, b) => b.price - a.price);
            }

            if (state.order === 'name') {
                return products.sort((a, b) => a.name.localeCompare(b.name));
            }
            if (state.order === 'nameDesc') {
                return products.sort((a, b) => b.name.localeCompare(a.name));
            }

                
        }

    },
    actions: {
        selectCategory(categoryId : number){
            this.categoryId = categoryId;
        },
        orderByPrice(){
            this.order = 'price';
        },
        orderByPriceDesc(){
            this.order = 'priceDesc';
        },
        orderByName(){
            this.order = 'name';
        },
        orderByNameDesc(){
            this.order = 'nameDesc';
        }
        
    },
})