<script lang="ts" setup>
const auth = useAuthStore()

async function handleLogout(){
  await auth.logout()
}
</script>

<template>
  <div>
    <Button v-if="auth.isLoggedIn" @click="handleLogout">Logout</Button>
    <pre>{{ auth.user }}</pre>
    <header>
    <nav>
      <ul>
        <li><NuxtLink to="/" class="text-3xl font-bold underline">Home</NuxtLink></li>
        <li><NuxtLink to="/login">Login</NuxtLink></li>
        <li><NuxtLink to="/register">Register</NuxtLink></li>
        <li><NuxtLink to="/user">User</NuxtLink></li>
      </ul>
    </nav>
  </header>
    <!-- Layout: default -->
    <slot />
  </div>
</template>

<style scoped></style>
