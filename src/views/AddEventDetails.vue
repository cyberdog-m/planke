<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "../supabase";

const router = useRouter();

const eventName = ref();
const eventStage = ref();
const eventDate = ref();

async function addNewEvent() {
  try {
    const { error } = await supabase.from("programs").insert({
      name: eventName.value,
      stage: eventCategory.value,
      type: eventType.value,
      first_place_point: firstPlacePoint.value,
      second_place_point: secondPlacePoint.value,
      third_place_point: thirdPlacePoint.value,
      created_at: new Date().toISOString(),
      last_updated_at: new Date().toISOString(),
    });
    router.push({ name: "admin" });
    if (error) throw error;
  } catch (error) {
    console.warn(error.message);
  }
}
</script>

<template>
  <div class="w-full text-white">
    <h1 class="mt-10 text-4xl font-medium text-center">Add New Schedule</h1>
    <form @submit.prevent="addNewEvent">
      <div class="flex flex-col px-4 py-4 mt-5 rounded-xl bg-secondary">
        <!-- Event Title -->
        <div class="text-lg">Event Name</div>
        <input
          required
          v-model="eventName"
          placeholder="Enter the name of the event"
          class="w-full h-10 px-3 mt-1 rounded-md outline outline-accent outline-1 bg-secondary"
          type="text"
        />
        <!-- Event Category -->
        <div class="mt-5 text-lg">Stage</div>
        <select
          id="category"
          v-model="eventCategory"
          class="w-full h-10 px-3 mt-1 mb-2 rounded-md outline outline-1 outline-accent bg-secondary"
        >
          <option selected disabled>Select Event Category</option>
          <option value="arts">Stage 1</option>
          <option value="sports">Stage 2</option>
          <option value="games">Stage 3</option>
          <option value="other">Other</option>
        </select>
        <!-- Event Type -->
        <div class="mt-5 text-lg">Date</div>
        <input
          required
          v-model="eventName"
          placeholder="Enter the name of the event"
          class="w-full h-10 px-3 mt-1 rounded-md outline outline-accent outline-1 bg-secondary"
          type="datetime-local"
        />

        <div class="flex justify-center">
          <button
            type="submit"
            class="px-10 w-[12rem] mx-auto mt-5 rounded-xl text-lg font-medium text-primary py-3 bg-accent hover:bg-accent/90"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
