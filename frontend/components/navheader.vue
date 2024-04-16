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
        <div class="flex flex-row gap-2">
          <div class="flex items-center relative">
            <!-- Notification toggle button -->
            <button type="button" @click="toggleNotifications" class="ml-4 focus:outline-none">
              <!-- Icon for notification toggle -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
              </svg>
              <!--  -->
            </button>
            <!-- Notification badge (optional) -->
            <span v-if="notificationsEnabled"
              class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              2 <!-- Number of notifications -->
            </span>
            <div v-if="notificationsEnabled"
              class="absolute top-full right-0 z-50 my-4 bg-white rounded-lg shadow-lg overflow-hidden">
              <Card class="m-0 w-[400px]">
                <CardHeader>
                  <CardTitle class="text-sm">
                    <div
                      class="flex justify-between items-center font-medium border-b border-gray-200 dark:border-gray-700">
                      Notification
                      <div class="">
                        <!-- Tab navigation -->
                        <ul
                          class="flex flex-row -mb-px text-sm font-light text-center text-gray-500 dark:text-gray-400">
                          <li v-for="(tab, index) in tabs" :key="index" class="me-2">
                            <NuxtLink :to="`#${tab.id}`"
                              class="inline-flex items-center justify-center p-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                              :class="{ 'text-blue-600 border-b-2 border-blue-600': activeTab === tab.id }"
                              @click="activateTab(tab.id)">
                              {{ tab.title }}
                            </NuxtLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <!-- Tab content -->
                  <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === tab.id">
                    {{ tab.content }}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div class="flex items-center relative gap-x-2">

            <div class="flex items-center ms-3" @click="toggleDropdown">
              <div>
                <button type="button">
                  <span class="sr-only">Open user menu</span>
                  <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo">
                </button>
              </div>
              <div v-if="isOpen"
                class="absolute top-full right-0 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg dark:bg-gray-700 dark:divide-gray-600">
                <div class="px-4 py-3" role="none">
                  <p class="text-sm text-gray-900 dark:text-white" role="none">
                    {{ auth.user?.name }}
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                    {{ auth.user?.email }}
                  </p>
                </div>
                <ul class="py-1" role="none">
                  <li v-for="(menuItem, index) in menuItems" :key="index">
                    <NuxtLink v-if="menuItem.route" :to="menuItem.route"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem">
                      {{ menuItem.text }}
                    </NuxtLink>
                    <!-- Call action function if it exists -->
                    <button v-if="menuItem.action" @click="menuItem.action"
                      class="block px-4 py-2 text-sm w-full text-start text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem">
                      {{ menuItem.text }}
                    </button>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const auth = useAuthStore()

// Fetch user data if not already fetched
onBeforeMount(async () => {
  // Fetch user data before the component mounts
  await auth.fetchUser();
});

type MenuItem = {
  text: string;
  route?: any;
  action?: () => void;
};

const isOpen = ref(false);
// State for notifications toggle
const notificationsEnabled = ref(false);

const activeTab = ref('');
const tabs = [
  { id: 'unread', title: 'Unread', content: 'Unread tab content' },
  { id: 'all', title: 'All', content: 'All tab content' },
];

function activateTab(tabId: string) {
  activeTab.value = tabId;
}

// Toggle notifications
const toggleNotifications = () => {
  notificationsEnabled.value = !notificationsEnabled.value;
};

const handleLogout = () => {
  auth.logout(); // Call the logout action provided by the auth store
  // Optionally, redirect to the login page or another route after logout
  router.push({ name: 'login' });
};

const menuItems = ref<MenuItem[]>([
  { text: 'Dashboard', route: { name: 'user' } },
  // { text: 'Settings', route: { name: 'settings' } },
  // { text: 'Earnings', route: { name: 'earnings' } },
  { text: 'Sign out', action: handleLogout }, // Include a "Sign out" option with an action
]);

const router = useRouter();


const isActive = (menuItem: MenuItem) => {
  return menuItem.route && router.currentRoute.value.name === menuItem.route.name;
};


const handleMenuItemClick = (menuItem: MenuItem) => {
  console.log('Clicked:', menuItem.text);
  isOpen.value = false;

  if (menuItem.route && !isActive(menuItem)) {
    router.push(menuItem.route);
  } else if (menuItem.action) {
    menuItem.action();
  }
};

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};


</script>
