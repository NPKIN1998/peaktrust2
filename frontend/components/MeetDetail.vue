<script lang="ts" setup>
const day = "apr";
const meetings = [
    {
        id: 1,
        title: 'Test Board Meeting',
        date: '2024-04-23',
        location: 'Conference Room A'
    },
    {
        id: 2,
        title: 'Meeting 2',
        date: '2024-04-05',
        location: 'Conference Room B'
    },
    // Add more meeting objects as needed
];

const getFormattedDate = (dateString: string) => {
  const date = new Date(dateString);
  const month = date.toLocaleString('en-US', { month: 'short' });
  const dayOfMonth = date.getDate();
  return `${month} ${dayOfMonth}`;
};

const getDay = (dateString: string) => {
  return new Date(dateString).getDate();
};
</script>

<template>
    <ul>
        <li v-for="meeting in meetings" :key="meeting.id">
            <NuxtLink class="">
                <div class="flex gap-1 space-y-2 justify-center items-center">
                    <div class="w-10 h-10 flex flex-col items-center justify-center mt-1 relative">
                        <img class="absolute inset-0 w-full h-full" src="~/assets/images/calendar-icon.png"
                            alt="Calendar Icon">
                        <div class="month z-10 py-0.5">{{ getFormattedDate(meeting.date) }}</div>
                        <div class="day z-10 font-medium"><span>{{ getDay(meeting.date) }}</span></div>
                    </div>
                    <div class="flex-1 px-2">
                        <h1 class="text-xl capitalize font-semibold ">{{ meeting.title }}</h1>
                        <p>{{ meeting.date }}</p>
                    </div>
                </div>
            </NuxtLink>
        </li>
    </ul>
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
