
<script lang="ts">
import ProductList from '@/components/ProductList.vue';
import LeftMenu from '@/components/left/LeftMenu.vue';
import { useProductsStore } from '@/stores/products';

function updateCategoryFromRouteParams(categoryIdParam: string|string[]){
  const productsStore = useProductsStore();
  const categoryId = Number(categoryIdParam);
  productsStore.selectCategory(categoryId);

}

  export default {
    components: {
      ProductList,
      LeftMenu
    },
    methods: {
     
    },
    beforeRouteEnter(to) {
      updateCategoryFromRouteParams(to.params.categoryId)
    },
    beforeRouteUpdate(to) {
      updateCategoryFromRouteParams(to.params.categoryId)
    }
  }
</script>

<template>

  <v-row>
    <v-col cols="2">
      <LeftMenu/>
    </v-col>
    <v-col cols="10">
      <ProductList />
    </v-col>
  </v-row>

</template>
