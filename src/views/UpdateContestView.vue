<script setup>
import UpdateEventCard from "../components/UpdateEventCard.vue";
</script>

<template>
  <div class="w-full text-white">
    <h1 class="mt-10 text-4xl font-medium text-center">Update Event Details</h1>
    <h2 class="mt-8 text-2xl font-medium">Light Music</h2>
    <!-- Update Details Card -->
    <div class="flex flex-col items-center gap-2">
      <UpdateEventCard title="First Place" points="10" />
      <UpdateEventCard title="Second Place" points="5" />
      <UpdateEventCard title="Third Place" points="3" />
      <button
        class="w-[12rem] py-2 mt-5 mb-10 text-xl font-medium rounded-md text-primary bg-accent hover:bg-accent/90 transition duration-200"
      >
        Submit
      </button>
    </div>
  </div>
</template>
