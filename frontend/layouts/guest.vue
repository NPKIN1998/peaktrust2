<script lang="ts" setup>
import { definePageMeta } from '#imports';
definePageMeta({
  middleware: ["auth"], 
})
</script>

<template>
  <div class="bg-teal-300 h-screen overflow-y-scroll">
    <header>
      <nav class="bg-white border-gray-200  dark:bg-gray-900">
        <div class="flex flex-wrap items-center justify-between max-w-screen-xl p-4">
          <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Boardable</span>
          </NuxtLink>
          <div class="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
            <NuxtLink to="/login"
              class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
              Login
            </NuxtLink>
            <NuxtLink to="/register"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Sign up
            </NuxtLink>
            <button data-collapse-toggle="mega-menu-icons" type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mega-menu-icons" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

    </header>
    <div class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 mt-5">
      <slot />
    </div>
  </div>
</template>
