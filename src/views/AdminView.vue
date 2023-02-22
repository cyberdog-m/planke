<script setup>
import { useRouter } from "vue-router";
import PlusCircleIcon from "vue-material-design-icons/PlusCircle.vue";

const router = useRouter();

function openEventView() {
  router.push({ name: "addevent" });
}
</script>

<template>
  <div class="w-full text-white">
    <h1 class="mt-10 text-4xl font-medium text-center">Admin Panel</h1>
    <h2 class="mt-8 text-2xl font-medium">Events</h2>
    <button
      @click="openEventView"
      class="flex items-center px-4 py-3 mx-auto mt-3 text-xl font-medium duration-200 rounded-md text-primary bg-accent hover:bg-accent/90"
    >
      <PlusCircleIcon class="mr-2" />Add Event
    </button>
  </div>
</template>
