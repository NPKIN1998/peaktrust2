<script lang="ts" setup>
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const formSchema = toTypedSchema(z.object({
  email: z.string().min(8).max(50),
  password: z.string().min(8).max(50),
}))

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
})
// const form = ref({
//   email: "",
//   password: "",
// })

// const auth = useAuthStore()

// async function handleLogin() {
//     const {error} = await auth.login(form.value);

//     console.log(error);
// }
</script> 

const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
})

const auth = useAuthStore()

async function handleRegister() {
    const {error} = await auth.register(form.value);

    if (!error.value) {
      navigateTo("/")      
    }
    console.log(error);
}


<form @submit.prevent="handleRegister">
  <label>
    Name
    <input v-model="form.name" type="text">
  </label>
  <label>
    Email
    <input v-model="form.email" type="email">
  </label>
  <label>
    Password
    <input v-model="form.password" type="password">
  </label>
  <label>
    Password confirmation
    <input v-model="form.password_confirmation" type="password">
  </label>
  <button>Register</button>
</form>


<!-- <div class="flex items-center">
          <div class="flex items-center ms-3">
            <div>
              <button type="button"
                class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="user photo">
              </button>
            </div>
            <div
              class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
              id="dropdown-user">
              <div class="px-4 py-3" role="none">
                <p class="text-sm text-gray-900 dark:text-white" role="none">
                  Neil Sims
                </p>
                <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                  neil.sims@flowbite.com
                </p>
              </div>
              <ul class="py-1" role="none">
                <li>
                  <a href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem">Dashboard</a>
                </li>
                <li>
                  <a href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem">Settings</a>
                </li>
                <li>
                  <a href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem">Earnings</a>
                </li>
                <li>
                  <a href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem">Sign out</a>
                </li>
              </ul>
            </div>
          </div>
        </div> -->



<!-- <script lang="ts" setup>
import { ref } from 'vue';

const isOpen = ref(false);
const menuItems = ref(['Dashboard', 'Settings', 'Earnings', 'Sign out']);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const handleMenuItemClick = (item: any) => {
  console.log('Clicked:', item);
  isOpen.value = false; // Close the dropdown after clicking an item
};
</script>

<template>
  <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start rtl:justify-end">
          <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
              </path>
            </svg>
          </button>
          <NuxtLink to="/user" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Boardable</span>
          </NuxtLink>
        </div>
        <div class="flex items-center">
          <div class="flex items-center ms-3" @click="toggleDropdown">
            <div>
              <button type="button"
                :aria-expanded="isOpen ? 'true' : 'false'" >
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="user photo">
              </button>
            </div>
            <div v-if="isOpen"
              class="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600">
              <div class="px-4 py-3" role="none">
                <p class="text-sm text-gray-900 dark:text-white" role="none">
                  Neil Sims
                </p>
                <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                  neil.sims@flowbite.com
                </p>
              </div>
              <ul class="py-1" role="none">
                <li v-for="(item, index) in menuItems" :key="index">
                  <a href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem" @click.prevent="handleMenuItemClick(item)">
                    {{ item }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
 -->


  <Card class="m-0 w-[400px]">
              <CardHeader>
                <CardTitle class="text-sm">
                  <div class="flex justify-between items-center font-normal">
                    Notification
                    <div class="border-b border-gray-200 dark:border-gray-700">


                      <!-- Tab navigation -->
                      <ul class="flex flex-row -mb-px text-sm font-light text-center text-gray-500 dark:text-gray-400">
                        <li v-for="(tab, index) in tabs" :key="index" class="me-2">
                          <NuxtLink :to="`#${tab.id}`"
                            class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                            :class="{ 'text-blue-600 border-b-2 active:border-blue-600': activeTab === tab.id }"
                            @click="activateTab(tab.id)">
                            {{ tab.title }}
                          </NuxtLink>
                        </li>
                      </ul>

                      <!-- <ul class="flex flex-row -mb-px text-sm font-light text-center text-gray-500 dark:text-gray-400">
                        <li class="me-2">
                          <NuxtLink to="#"
                            class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                            :class="{ 'text-blue-600  border-b-2 active:border-blue-600': activeTab === 'unread' }"
                            @click="activeTab = 'unread'">
                            Unread
                          </NuxtLink>
                        </li>
                        <li class="me-2">
                          <NuxtLink to="#"
                            class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                            aria-current="page" :class="{ 'text-blue-600  border-b-2 active:border-blue-600': activeTab === 'all' }"
                            @click="activeTab = 'all'">
                            All
                          </NuxtLink>
                        </li>
                      </ul> -->
                      <!-- <ul
                        class="flex flex-row -mb-px text-sm font-light text-center text-gray-500 dark:text-gray-400">
                        <li class="me-2">
                          <NuxtLink to="#"
                            class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                            @click="activeTab = 'unread'">
                            Unread
                          </NuxtLink>
                        </li>
                        <li class="me-2">
                          <NuxtLink to="#"
                            class="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                            aria-current="page" @click="activeTab = 'all'">
                            All
                          </NuxtLink>
                        </li>
                      </ul> -->
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <!-- Tab content -->
                <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === tab.id">
                  {{ tab.content }}
                </div>
                <!-- Tab content -->
                <!-- <div v-if="activeTab === 'unread'"> -->
                <!-- Content for unread tab -->
                <!-- Unread tab content -->
                <!-- </div> -->
                <!-- <div v-else-if="activeTab === 'all'"> -->
                <!-- Content for all tab -->
                <!-- All tab content -->
                <!-- </div> -->
              </CardContent>
            </Card>