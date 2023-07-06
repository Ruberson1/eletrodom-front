<template>
  <div class="navbar bg-cyan-800 dark:bg-cyan-600">
    <div class="flex items-center justify-between px-4 py-2">
      <div class="flex items-center">
        <a href="/">
          <img src="../../public/images/logo.svg" alt="Logo" class="w-10 h-10 mr-2">
        </a>
        <input type="text" placeholder="Pesquisar" class="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <button class="bg-amber-500 text-white py-2 px-4 ml-2 rounded-lg">Buscar</button>
        <a href="/product-form" class="bg-amber-500 text-white py-2 px-4 ml-2 rounded-lg">Cadastrar</a>
      </div>
      <div class="flex items-center">
        <div @click="toggleDark()" v-if="isDark" class="flex items-center mr-4 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
        </div>
        <div @click="toggleDark()" v-else class="flex items-center mr-4 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>

        </div>
        <div class="flex items-center mr-4 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          <span class="bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">3</span>
        </div>
        <div class="flex items-center cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
          </svg>
          <span class="bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">7</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useDark, useToggle } from "@vueuse/core";
import {useThemeStore} from "@/store/themeStore";

export default {
  setup() {
    const themeStore = useThemeStore();
    const isDark = useDark();
    const toggleDark = useToggle(isDark);

    return {
      themeStore,
      isDark,
      toggleDark,
    };
  },
};
</script>
