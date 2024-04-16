<script lang="ts" setup>
const {card} = defineProps(['card'])
</script>

<template>
  <Card class="h-48 mb-4 rounded dark:bg-gray-800">
    <CardHeader class="border-b-2 border-gray-200 my-0.5 py-2">
      <CardTitle class="flex flex-row justify-between items-center">
        <div class="text-base font-medium">{{ card.title }}</div>
        <div class="space-x-2 font-normal items-start">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger as-child>
                <Button variant="outline" class="p-2 h-5">
                  +
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p >{{ card.title }}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <NuxtLink :to="card.route" class="text-base font-normal">{{ card.link }}</NuxtLink>
        </div>
      </CardTitle>
    </CardHeader>
    <CardContent class="my-2">
      <slot/>
    </CardContent>
  </Card>
</template>


