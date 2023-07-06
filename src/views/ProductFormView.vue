<template>
  <div class="min-h-screen p-0 sm:p-12">
    <div class="mx-auto max-w-md px-6 py-12 border-2 shadow-lg sm:rounded-3xl">
      <h1 class="text-2xl font-bold mb-8">Formulário de Produto</h1>
      <form id="form" novalidate>

        <div class="relative inline-block text-left">
          <div>
            <button
                type="button"
                class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                @click="toggleDropdown"
                :aria-expanded="isDropdownOpen.toString()"
                :aria-haspopup="isDropdownOpen.toString()"
            >
              Options
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
              >
                {{ category.name }}
              </a>
            </div>
          </div>
        </div>

        <div class="relative z-0 w-full mb-5">
          <input
              type="text"
              name="name"
              placeholder=" "
              required
              class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
          <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Nome do Produto</label>
        </div>
        <div class="relative z-0 w-full mb-5">
          <input
              type="text"
              name="name"
              placeholder=" "
              required
              class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
          <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Voltagem</label>
        </div>
        <div class="relative z-0 w-full mb-5">
          <input
              type="text"
              name="name"
              placeholder=" "
              required
              class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
          <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Cor</label>
        </div>
        <div class="relative z-0 w-full mb-5">
          <input
              type="text"
              name="name"
              placeholder=" "
              required
              class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
          <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Preço</label>
        </div>
        <button
            id="button"
            type="button"
            class="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-amber-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
        >
          Salvar
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {inject, ref} from "vue";
import {useRoute} from "vue-router";

export default {
  name: "ProductForm",

  setup() {
    const route = useRoute();
    const swal = inject('$swal');
    const isDropdownOpen = ref(false);
    const categories = ref([]);

    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };
    setTimeout(() => {
      categories.value = [
        { id: 0, name: 'Account settings' },
        { id: 1, name: 'Support' },
        { id: 2, name: 'License' },
      ];
    }, 2000);

    return {
      isDropdownOpen,
      categories,
      toggleDropdown,
      route
    }
  },

  mounted() {
    const productId = this.route.params.productId;
    if(productId) {
      axios.get(`http://localhost:8000/api/v1/product/${productId}`)
        .then(response => {

        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
</script>

<style scoped>
.-z-1 {
  z-index: -1;
}

.origin-0 {
  transform-origin: 0%;
}

input:focus ~ label,
input:not(:placeholder-shown) ~ label,
textarea:focus ~ label,
textarea:not(:placeholder-shown) ~ label,
select:focus ~ label,
select:not([value='']):valid ~ label {
  /* @apply transform; scale-75; -translate-y-6; */
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate))
  skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  --tw-scale-x: 0.75;
  --tw-scale-y: 0.75;
  --tw-translate-y: -1.5rem;
}

input:focus ~ label,
select:focus ~ label {
  /* @apply text-black; left-0; */
  --tw-text-opacity: 1;
  color: rgba(0, 0, 0, var(--tw-text-opacity));
  left: 0px;
}
</style>