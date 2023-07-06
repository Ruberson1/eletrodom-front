<template>
  <div class="mb-4 pt-4">
    <h2 class="text-lg font-semibold">Categorias</h2>
    <div class="flex flex-wrap">
      <div class="bg-white w-full mr-4 border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700">
        <div v-for="(category, index) in categories" :key="index" class="w-1/2 p-4">
          <h3 class="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2 text-base text-gray-900 dark:text-white cursor-pointer">{{ category.name }}</h3>
          <!-- Outros detalhes da categoria -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryCard",
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>