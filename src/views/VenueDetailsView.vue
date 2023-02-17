<script setup>
import { ref } from "vue";

// 0 -> Event Wise, 1 -> Venue Wise
const filterChip = ref(0);
</script>

<template>
  <div class="text-white">
    <h1 class="mt-10 text-4xl font-medium text-center">Venue Details</h1>
    <h2 class="mt-8 text-xl font-medium">Search Event / Venue</h2>
    <input
      type="text"
      placeholder="Enter Event / Venue Name"
      class="w-full h-10 px-3 mt-2 rounded-md outline outline-1 outline-accent bg-secondary"
    />
    <!-- Filter Chips -->
    <div class="flex items-center justify-start gap-3 mt-5">
      <div
        class="px-4 py-1 transition border-2 rounded-full cursor-pointer bg-secondary border-accent"
        :class="{ 'bg-accent/50': filterChip == 0 }"
        @click="filterChip = 0"
      >
        Event Wise
      </div>
      <div
        class="px-4 py-1 transition border-2 rounded-full cursor-pointer bg-secondary border-accent"
        :class="{ 'bg-accent/50': filterChip == 1 }"
        @click="filterChip = 1"
      >
        Venue Wise
      </div>
    </div>
    <!-- Cards -->
    <div class="flex flex-col w-full gap-3 mt-4">
      <div
        class="flex flex-col w-full gap-2 p-3 duration-200 cursor-pointer rounded-xl bg-secondary hover:bg-sechover"
      >
        <h3 class="text-xl font-medium">Classical Dance</h3>
        <div class="font-medium text-accent">Stage 1</div>
        <div>Open Auditorium</div>
      </div>
      <div
        class="flex justify-between w-full p-3 duration-200 cursor-pointer rounded-xl bg-secondary hover:bg-sechover"
      >
        <div class="flex flex-col gap-2">
          <h3 class="text-xl font-medium">Pencil Drawing</h3>
          <div class="font-medium text-accent">Stage 3</div>
          <div>Civil Drawing Hall</div>
        </div>
        <div
          class="flex flex-col items-center justify-center px-4 rounded-md bg-primary/50"
        >
          <div class="flex text-3xl font-medium text-accent">
            10:00
            <div class="ml-2 text-xs -rotate-90">AM</div>
          </div>
          <div>12 March</div>
        </div>
      </div>
    </div>
  </div>
</template>
