<script lang="ts" setup>
const day = "apr";

</script>

<template>
  <div class="w-10 h-10 flex flex-col items-center justify-center mt-1 relative">
    <img class="absolute inset-0 w-full h-full" src="~/assets/images/calendar-icon.png" alt="Calendar Icon">
    <div class="month z-10 py-0.5">{{ day }}</div>
    <div class="day z-10 font-medium"><span>5</span></div>
  </div>
</template>

<style scoped>

.month {
    color: #fff;
    font-size: 8px;
    height: 13px;
    line-height: 1;
    text-align: center;
    text-transform: uppercase;
    width: 2.5rem;
}
</style>
