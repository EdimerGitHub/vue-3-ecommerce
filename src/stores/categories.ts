import type { Category } from '../model/types';
import { defineStore } from 'pinia';

export const useCategoriesStore = defineStore('categories', {
    state: () => ({
        categories: [{
            id:1,
            name: 'Colagenos',
            description: 'Descubre nuestra variedad de colagenos como el hidrolizado y los tipo 1, 2 y 3'
        },{
            id:2,
            name: 'Defensas',
            description: 'Descubre nuestra variedad de productos para elevar tus defensas y estar siempre saludable'
        },{
            id:3,
            name: 'Deporte',
            description: 'Descubre nuestra variedad de suplementos deportivos y empieza a rendir al máximo'
        },{
            id:4,
            name: 'Cardiovascular',
            description: 'Descubre nuestra variedad de productos para el cuidado del corazon'
        },{
            id:5,
            name: 'Antioxidante',
            description: 'Descubre nuestra variedad de productos para neutralizar radicales libres y retrasar el daño celular'
        },{
            id:6,
            name: 'Vitaminas',
            description: 'Descubre nuestra variedad de vitaminas a corde a tu necesidad'
        }] as Category[]
    }),
    getters: {
  

    },
    actions: {

    }
})
