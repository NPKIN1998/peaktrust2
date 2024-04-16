<script lang="ts" setup>
import { definePageMeta } from '#imports';
definePageMeta({
  middleware: ["auth"],
  layout: "auth",
})
const userName = "peter";
// meetings.js
const meetings = [
  {
    id: 1,
    title: 'Meeting 1',
    date: '2024-04-01',
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



const meetingData = {
  title: 'Meeting',
  route: 'meeting', // Adjust route according to your application's routing setup
  link: 'view all',
  detail: 'Meeting details',
  userName: userName
}

const discussionData = {
  title: 'Discussion',
  route: 'discussion', // Adjust route according to your application's routing setup
  link: 'view all',
  detail: 'Discussion details'
}

const pollData = {
  title: 'Poll',
  route: 'polls', // Adjust route according to your application's routing setup
  link: 'view all',
  detail: 'Polls details'
}

const tastData = {
  title: 'Task',
  route: 'tasks', // Adjust route according to your application's routing setup
  link: 'view all',
  detail: 'Tasks details'
}

</script>

<template>
  <div class="p-4 sm:ml-64">
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <div class="grid grid-cols-3 gap-4 mb-4">
        <div
          class="flex text-center items-center justify-center h-24 rounded border border-gray-600 bg-gray-50 dark:bg-gray-800">
          <p class="text-2xl text-center text-gray-900 dark:text-gray-500">
            <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 18 18">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 1v16M1 9h16" />
            </svg>
            <span>Board</span>
          </p>
        </div>
        <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
          <p class="text-2xl text-gray-400 dark:text-gray-500">
            <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 18 18">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 1v16M1 9h16" />
            </svg>
          </p>
        </div>
        <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
          <p class="text-2xl text-gray-400 dark:text-gray-500">
            <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 18 18">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 1v16M1 9h16" />
            </svg>
          </p>
        </div>
      </div>
      <div class="bg-blue-500 grid grid-cols-3 gap-2">
        <div class="col-span-2 gap-2">
            <Cardlayout :card="meetingData">
              <MeetDetail/>
            </Cardlayout>
            <Cardlayout class="bg-slate-300" :card="pollData" />
            <Cardlayout class="bg-yellow-300" :card="tastData" />
        </div>
        <Cardlayout class="bg-rose-400"  :card="discussionData"/>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
