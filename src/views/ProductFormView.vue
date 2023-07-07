<template>
  <div class="min-h-screen p-0 sm:p-12">
    <div class="mx-auto max-w-md px-6 py-12 border-2 shadow-lg sm:rounded-3xl">
      <h1 class="text-2xl font-bold mb-8">Formulário de Produto</h1>
      <form id="form" novalidate>

        <div class="flex flex-wrap pb-8 space-x-36">
          <DropdownCategory :categories="categories" @categorySelected="handleCategorySelected" />
          <DropdownBrand :brands="brands" @brandSelected="handleBrandSelected"/>
        </div>
        <div class="relative z-0 w-full mb-5">
          <input
              v-model="selectedCategory[1]"
              type="text"
              name="name"
              placeholder="Selecione uma categoria no botão acima"
              required
              class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
        </div>
        <div class="relative z-0 w-full mb-5">
          <input
              v-model="selectedBrand[1]"
              type="text"
              name="name"
              placeholder="Selecione uma marca no botão acima"
              required
              class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
        </div>
        <div class="relative z-0 w-full mb-5">
          <input
              v-model="formValues.name"
              type="text"
              name="name"
              placeholder="Nome do produto"
              required
              class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
        </div>
        <div class="relative z-0 w-full mb-5">
          <input
              v-model="formValues.voltage"
              type="text"
              name="voltage"
              placeholder="Voltagem"
              required
              class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
        </div>
        <div class="relative z-0 w-full mb-5">
          <input
              v-model="formValues.color"
              type="text"
              name="color"
              placeholder="Cor"
              required
              class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
        </div>
        <div class="relative z-0 w-full mb-5">
          <input
              v-model="formValues.description"
              type="text"
              name="description"
              placeholder="Descrição"
              required
              class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
        </div>
        <div class="relative z-0 w-full mb-5">
          <input
              v-model="formValues.price"
              type="text"
              name="price"
              placeholder="R$ 0.00"
              required
              class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
        </div>
        <button
            @click="createOrUpdateProduct"
            id="button"
            type="button"
            class="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-amber-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
        >
          {{ isEditing ? 'Atualizar' : 'Salvar' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {computed, inject, reactive, ref, watch} from "vue";
import { useRoute, useRouter } from "vue-router";
import DropdownCategory from "@/components/DropdownCategory";
import DropdownBrand from "@/components/DropdownBrand";

export default {
  name: "ProductForm",
  components: { DropdownCategory, DropdownBrand },
  setup() {
    const router = useRouter();
    const selectedCategory = ref("");
    const selectedBrand = ref("");
    const route = useRoute();
    const categories = ref([]);
    const brands = ref([]);
    const swal = inject("$swal");
    const isEditing = ref(false);

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

    const handleCategorySelected = (value) => {
      selectedCategory.value = value;
    };

    const handleBrandSelected = (value) => {
      selectedBrand.value = value;
    };

    const formValues = reactive({
      category_id: "",
      brand_id: "",
      name: "",
      voltage: "",
      color: "",
      description: "",
      price: "",
    });

    watch(
        () => selectedCategory.value[0],
        (newValue) => {
          formValues.category_id = newValue;
        }
    );

    watch(
        () => selectedBrand.value[0],
        (newValue) => {
          formValues.brand_id = newValue;
        }
    );

    const createOrUpdateProduct = () => {
      const productId = route.params.productId;
      const url = productId
          ? `http://localhost:8000/api/v1/product/${productId}`
          : "http://localhost:8000/api/v1/product";

      const method = productId ? "put" : "post";

      axios[method](url, formValues)
          .then((response) => {
            if (response.data.error) {
              swal({
                title: productId ? "Erro ao atualizar" : "Erro ao cadastrar",
                imageUrl: "https://media.giphy.com/media/vyTnNTrs3wqQ0UIvwE/giphy.gif",
                imageWidth: 150,
                imageHeight: 150,
                text: response.data.error_description.description,
              });
            } else {
              swal({
                imageUrl: "https://media.giphy.com/media/bzE1WAm8BifiE/giphy.gif",
                imageWidth: 150,
                imageHeight: 150,
                title: "Yeah!!!...",
                text: productId ? "Atualizada com sucesso!" : "Criada com sucesso!",
              }).then((result) => {
                router.push({ name: "home" });
              });
            }
          })
          .catch((error) => {
            console.error(error);
          });
    };

    return {
      formValues,
      selectedCategory,
      selectedBrand,
      createOrUpdateProduct,
      handleBrandSelected,
      handleCategorySelected,
      getBrands,
      isEditing,
      getCategories,
      categories,
      brands,
      route,
    };
  },
  mounted() {
    const productId = this.route.params.productId;
    this.getCategories();
    this.getBrands();
    if (productId) {
      this.isEditing = true;
      axios
          .get(`http://localhost:8000/api/v1/product/${productId}`)
          .then((response) => {
            const product = response.data.data;
            this.formValues.name = product.name;
            this.formValues.voltage = product.voltage;
            this.formValues.color = product.color;
            this.formValues.description = product.description;
            this.formValues.price = product.price;
            this.formValues.category_id = product.category.name;
            this.formValues.brand_id = product.brand.name;
          })
          .catch((error) => {
            console.error(error);
          });
    }
  },
};
</script>
