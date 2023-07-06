<template>
  <div class="flex">
    <div class="flex flex-col w-4/5">
      <div class="flex flex-wrap">
        <ProductCard :products="products" class="w-1/3" />
      </div>
    </div>
    <div class="w-1/5">
      <CategoryCard :categories="categories" />
      <div>
        <BrandCard :brands="brands" />
      </div>
    </div>
  </div>
</template>

<script >

import BrandCard from "@/components/BrandCard.vue";
import ProductCard from "@/components/ProductCard.vue";
import CategoryCard from "@/components/CategoryCard.vue";
import {onMounted, ref} from "vue";
import axios from "axios";

export default {
  components: {CategoryCard, ProductCard, BrandCard},
  setup() {
    const products = ref([]);
    const categories = ref([]);
    const brands = ref([]);

    const getProducts = async () => {
      try {
        const resp = await axios.get("http://localhost:8000/api/v1/products");
        products.value = resp.data.data.data;
      } catch (e) {
        console.error(e);
      }
    };

    const getCategories = async () => {
      try {
        const resp = await axios.get("http://localhost:8000/api/v1/categories");
        categories.value = resp.data.data.data;
      } catch (e) {
        console.error(e);
      }
    };

    const getBrands = async () => {
      try {
        const resp = await axios.get("http://localhost:8000/api/v1/brands");
        brands.value = resp.data.data.data;
      } catch (e) {
        console.error(e);
      }
    };
    onMounted(getProducts);
    onMounted(getCategories);
    onMounted(getBrands);
    return {
      products,
      getCategories,
      getBrands,
      categories,
      brands,
    }
  }
}

</script>


<style scoped>

</style>