<template>
  <div class="relative inline-block text-left">
    <div>
      <button
          type="button"
          class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          @click="toggleDropdown"
          :aria-expanded="isDropdownOpen.toString()"
          :aria-haspopup="isDropdownOpen.toString()"
      >
        Categorias
        <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <div
        v-if="isDropdownOpen"
        class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        :aria-orientation="isDropdownOpen ? 'vertical' : ''"
        aria-labelledby="menu-button"
        tabindex="-1"
    >
      <div class="py-1" role="none">
        <a
            v-for="category in categories"
            :key="category.id"
            :href="`#${category.id}`"
            class="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabindex="-1"
            :id="`menu-item-${category.id}`"
            @click="selectCategory(category)"
        >
          {{ category.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "DropdownCategory",
  props: {
    categories: {
      type: Array,
      required: true,
    },
    selectedCategory: {
      type: String, // ou outro tipo adequado para o valor selecionado
      required: false,
    },
  },
  emits: ['categorySelected'],
  setup(props, { emit }) {
    const isDropdownOpen = ref(false);
    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };

    const selectCategory = (category) => {
      emit('categorySelected', [category.id,category.name]);
      isDropdownOpen.value = false;
    };
    return {
      selectCategory,
      isDropdownOpen,
      toggleDropdown,
    }
  }
}
</script>

<style scoped>

</style>