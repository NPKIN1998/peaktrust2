import { defineStore } from "pinia";

type User = {
    id: number;
    name: string;
    email: string;
}

type Credentials = {
    email: string;
    password: string;
}

type RegistrationInfo = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null);
    const isLoggedIn = computed(() => !!user.value);
    
    async function logout() {
        await useApiFetch("/logout",{method: "POST"});
        user.value = null;
        navigateTo("/login")
    }

    async function fetchUser() {
        const {data, error} = await useApiFetch("/api/user");
        console.log(error);
        user.value = data.value as User;

        console.log(data);
    }

    async function login(credentials: Credentials) {
        await useApiFetch("/sanctum/csrf-cookie", { 
           credentials: "include"
          });
          
          const login = await useApiFetch("/login", { 
           method: "POST",
           body: credentials,
          });

          await fetchUser();

          return login;
    }

    async function register(info: RegistrationInfo) {
        await useApiFetch("/sanctum/csrf-cookie", { 
           credentials: "include"
          });
          
          const register = await useApiFetch("/register", { 
           method: "POST",
           body: info,
          });

          await fetchUser();

          return register;
    }

    return { user, login, isLoggedIn, fetchUser, logout, register}
  })