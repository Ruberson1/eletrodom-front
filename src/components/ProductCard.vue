<template>
  <div class="w-full   xl:w-2/6 p-4" v-for="(product, index) in products" :key="index">
    <!-- Conteúdo do card -->
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700 card-wrapper flex flex-col justify-between">
      <a href="#" class="self-start">
        <img class="p-8 rounded-t-lg" :src="getImagePath(product.category.id)" alt="product image" />
      </a>
      <div class="px-5 pb-5">
        <a href="#">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ product.name }}</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
          <Stars />
          <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{{ product.voltage }}</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-gray-900 dark:text-white">${{ product.price }}</span>
          <a href="#" class="text-white bg-amber-500 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-amber-800">Comprar</a>
        </div>
        <div class="pt-4 flex items-center justify-between">
          <svg @click="delProduct(product.id)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-500 cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
          <svg @click="editProduct(product.id)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-amber-500 cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Stars from "./Stars.vue";
import axios from "axios";
import {inject} from "vue";
import {useRouter} from "vue-router";

export default {
  components: {
    Stars,
  },

  props: {
    products: {
      type: Array,
      required: true,
    },
  },

  setup() {
    const swal = inject('$swal');
    const router = useRouter();

    function editProduct(productId) {
      console.log(productId);
      router.push({ name: 'product-form', params: { productId: productId }});
    }

    const getImagePath = (categoryId) => {
      if (categoryId === 1) {
        return require("../../public/images/geladeira.png");
      } else if (categoryId === 2) {
        return require("../../public/images/lavadoura.png");
      } else if (categoryId === 3) {
        return require("../../public/images/fogao.png");
      } else {
        return require("../../public/images/microondas.png");
      }
    };

    async function delProduct(productId) {
      swal({
        imageUrl: 'https://media.giphy.com/media/pPhyAv5t9V8djyRFJH/giphy.gif',
        imageWidth: 150,
        imageHeight: 150,
        title: 'Oops...',
        text: 'Tem certeza que deseja excluir o produto?',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Delete?'
      }).then((result) => {
        if (result.isConfirmed) {
          try {
            axios.delete(`http://localhost:8000/api/v1/product/${productId}`)
              .then(() => {
                swal(
                    'Deletado!',
                    'O produto foi deletado!',
                    'success'
                ).then(() => {
                  location.reload();
                })

              })
          } catch (e) {
            console.error(e);
          }
        }
      });
    }

    return {
      editProduct,
      delProduct,
      getImagePath,
    };
  },
};
</script>

<style>
.card-wrapper {
  width: 300px;
  height: 500px;
}

</style>
