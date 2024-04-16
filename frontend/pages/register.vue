<script lang="ts" setup>
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { useAuthStore } from '@/stores/useAuthStore';
import * as z from 'zod';


definePageMeta({
  layout: "guest"
})

const authStore = useAuthStore();

const formSchema = toTypedSchema(z.object({
  name: z.string().min(8).max(50),
  email: z.string().min(8).max(50),
  password: z.string().min(8).max(50),
  password_confirmation: z.string().min(8).max(50),
}));

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit(async (values) => {
  try {
    await authStore.register(values);
    console.log('User register successful!');
    // navigateTo("/login")
  } catch (error) {
    console.error('User registration failed:', error);
  }
});

</script>

<template>
  <Card class="w-[500px] gap-0">
      <CardHeader class="gap-0">
        <CardTitle>Create account with Boardable</CardTitle>
        <CardDescription>A place to easy board meeting.</CardDescription>
      </CardHeader>
      <CardContent>
        <form class="w-full" @submit="onSubmit">
          <FormField v-slot="{ componentField }" name="name">
            <FormItem>
              <FormLabel>Enter your name:</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Joe Doe" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="email">
            <FormItem>
              <FormLabel>Enter your email address:</FormLabel>
              <FormControl>
                <Input type="email" placeholder="j.doe@email.com" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="password">
            <FormItem>
              <FormLabel>Create password:</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="password_confirmation">
            <FormItem>
              <FormLabel>Confirm your password:</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <Button type="submit" class="w-full">
            Register
          </Button>
        </form>
      </CardContent>
    </Card>
</template>

<style scoped></style>
