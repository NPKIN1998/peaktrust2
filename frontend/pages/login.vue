<script setup>
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { useAuthStore } from '@/stores/useAuthStore';
import * as z from 'zod';

definePageMeta({
  layout: "guest"
})

const authStore = useAuthStore();

const formSchema = toTypedSchema(z.object({
  email: z.string().min(8).max(50),
  password: z.string().min(8).max(50),
}));

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit(async (values) => {
  try {
    await authStore.login(values);
    console.log('Login successful!');
    navigateTo("/user")
  } catch (error) {
    console.error('Login failed:', error);
  }
});
</script>
<template>
    <Card class="w-[350px]">
      <CardHeader>
        <CardTitle>Login to Boardable</CardTitle>
        <CardDescription>A place to easy board meeting.</CardDescription>
      </CardHeader>
      <CardContent>
        <form class="w-full space-y-6" @submit.prevent="onSubmit">
          <FormField v-slot="{ componentField }" name="email">
            <FormItem>
              <FormLabel>Enter your email address:</FormLabel>
              <FormControl>
                <Input type="email" placeholder="example@email.com" v-bind="componentField" />
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
          <Button type="submit" class="w-full">
            Login
          </Button>
        </form>
      </CardContent>
    </Card>

</template>

