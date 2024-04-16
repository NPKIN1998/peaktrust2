<script lang="ts" setup>
definePageMeta({
  layout: "guest"
})
</script>

<template>
  <main class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 text-center lg:py-16 lg:px-12">
        <NuxtLink
          to="/"
          class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          role="alert"
        >
          <span class="text-xs bg-skin-primary rounded-full text-skin-inverted px-4 py-1.5 mr-3"
            >Board</span
          >
          <span class="text-sm font-medium">Tana water agency</span>
          <svg
            class="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </NuxtLink>
        <h1
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-skin-base md:text-5xl lg:text-6xl dark:text-white"
        >
          Meeting made easy by Eboard
        </h1>
        <p
          class="mb-8 text-lg font-normal text-skin-base lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
        >
          Eboard a solution focusing on enabling and empowering board meeting, 
          Document storing with ease retrival eboard a solution for all.
        </p>
        <div
          class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
        >
          <NuxtLink
            to="/login"
            class="inline-flex justify-center items-center py-3 px-5 text-base text-center text-skin-inverted rounded-lg bg-skin-button-accent hover:bg-skin-button-accent-hover focus:ring-4 focus:ring-primary uppercase font-semibold dark:focus:ring-primary"
          >
            <ArrowLeftOnRectangleIcon class="w-5 h-5 mr-3" />
            Login
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
