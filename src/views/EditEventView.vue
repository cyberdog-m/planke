<script setup>
import { ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useContestsStore } from "../stores/contests";
import { supabase } from "../supabase";

const route = useRoute();
const router = useRouter();
const contestsStore = useContestsStore();

const contest = ref();
const isContentLoaded = ref(false);

const eventName = ref();
const eventCategory = ref();
const eventType = ref();
const firstPlacePoint = ref();
const secondPlacePoint = ref();
const thirdPlacePoint = ref();

function getEvents() {
  contest.value = contestsStore.contests.find((contest) => {
    return contest.id == route.params.eventId;
  });
}

watchEffect(() => {
  if (!contestsStore.isLoading && !isContentLoaded.value) {
    getEvents();
    isContentLoaded.value = true;

    // Set values to refs
    eventName.value = contest.value.title;
    eventCategory.value = contest.value.category;
    eventType.value = contest.value.type;
    firstPlacePoint.value = contest.value.first_place_point;
    secondPlacePoint.value = contest.value.second_place_point;
    thirdPlacePoint.value = contest.value.third_place_point;
  }
});

async function updateEvent() {
  try {
    const { error } = await supabase
      .from("contests")
      .update({
        title: eventName.value,
        category: eventCategory.value,
        type: eventType.value,
        first_place_point: firstPlacePoint.value,
        second_place_point: secondPlacePoint.value,
        third_place_point: thirdPlacePoint.value,
        last_updated_at: new Date().toISOString(),
      })
      .eq("id", route.params.eventId);
    router.push({ name: "admin" });
    if (error) throw error;
  } catch (error) {
    console.warn(error.message);
  }
}
</script>

<template>
  <div class="w-full text-white">
    <h1 class="mt-10 text-4xl font-medium text-center">Add New Event</h1>
    <form @submit.prevent="updateEvent">
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
        <div class="mt-5 text-lg">Category</div>
        <select
          id="category"
          v-model="eventCategory"
          class="w-full h-10 px-3 mt-1 mb-2 rounded-md outline outline-1 outline-accent bg-secondary"
        >
          <option selected disabled>Select Event Category</option>
          <option value="arts">Arts</option>
          <option value="sports">Sports</option>
          <option value="games">Games</option>
          <option value="other">Other</option>
        </select>
        <!-- Event Type -->
        <div class="mt-5 text-lg">Type</div>
        <select
          id="type"
          v-model="eventType"
          class="w-full h-10 px-3 mt-1 mb-2 rounded-md outline outline-1 outline-accent bg-secondary"
        >
          <option selected disabled>Select Event Type</option>
          <option value="individual">Individual</option>
          <option value="group">Group</option>
        </select>
        <!-- Points -->
        <div class="mt-5 text-lg">First Place Points</div>
        <input
          required
          type="number"
          inputmode="numeric"
          v-model="firstPlacePoint"
          class="w-full h-10 px-3 mt-1 rounded-md outline outline-accent outline-1 bg-secondary"
        />
        <div class="mt-5 text-lg">Second Place Points</div>
        <input
          required
          type="number"
          inputmode="numeric"
          v-model="secondPlacePoint"
          class="w-full h-10 px-3 mt-1 rounded-md outline outline-accent outline-1 bg-secondary"
        />
        <div class="mt-5 text-lg">Third Place Points</div>
        <input
          required
          type="number"
          inputmode="numeric"
          v-model="thirdPlacePoint"
          class="w-full h-10 px-3 mt-1 mb-5 rounded-md outline outline-accent outline-1 bg-secondary"
        />
      </div>
      <div class="flex justify-center">
        <button
          type="submit"
          class="px-10 w-[12rem] mx-auto mt-5 rounded-xl text-lg font-medium text-primary py-3 bg-accent hover:bg-accent/90"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
