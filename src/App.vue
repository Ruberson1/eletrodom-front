<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>



<script>
import {ref, onMounted, watch} from "vue";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import { useToggle } from "@vueuse/core";
import axios from "axios";
import CategoryCard from "@/components/CategoryCard";
import BrandCard from "@/components/BrandCard";
import { useRoute } from "vue-router";

export default {
  components: {
    CategoryCard,
    ProductCard,
    BrandCard,
    Navbar,
  },

  setup() {

    const { value: isDarkMode, toggle: toggleDarkMode } = useToggle(false);
    return {
      isDarkMode,
    };
  },
};
</script>


<style>
.dark {
--bg-color: #1f2937;
--text-color: #cecece;
background-color: var(--bg-color);
color: var(--text-color);
}

</style>
