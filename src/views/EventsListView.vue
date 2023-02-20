<script setup>
import { computed, ref } from "vue";
import { useContestsStore } from "../stores/contests";
import EventsEditCard from "../components/EventsEditCard.vue";

const contestsStore = useContestsStore();
// 0 -> All, 1 -> Arts, 2 -> Sports, 3 -> Games
const filterChip = ref(0);
const searchFilter = ref("");

function filterWithChips(contest) {
  if (filterChip.value == 0) {
    return true;
  } else if (filterChip.value == 1) {
    return contest.category == "arts";
  } else if (filterChip.value == 2) {
    return contest.category == "sports";
  } else if (filterChip.value == 3) {
    return contest.category == "games";
  }
}

function filterWithSearch(contest) {
  if (searchFilter.value.trim() != "") {
    return contest.title
      .trim()
      .toLowerCase()
      .includes(searchFilter.value.trim().toLowerCase());
  }
  return true;
}

const contests = computed(() => {
  return contestsStore.contests
    .filter(filterWithChips)
    .filter(filterWithSearch)
    .sort((x, y) => Number(x.is_complete) - Number(y.is_complete));
});
</script>

<template>
  <div class="w-full text-white">
    <h1 class="mt-10 text-4xl font-medium text-center">Events List</h1>
    <h2 class="mt-8 text-xl font-medium">Search Event</h2>
    <input
      type="text"
      placeholder="Enter Event Name"
      v-model="searchFilter"
      class="w-full h-10 px-3 mt-2 rounded-md outline outline-1 outline-accent bg-secondary"
    />
    <!-- Filter Chips -->
    <div class="flex items-center justify-start gap-3 mt-5">
      <div
        class="px-4 py-1 transition border-2 rounded-full cursor-pointer bg-secondary border-accent"
        :class="{ 'bg-accent/50': filterChip == 0 }"
        @click="filterChip = 0"
      >
        All
      </div>
      <div
        class="px-4 py-1 transition border-2 rounded-full cursor-pointer bg-secondary border-accent"
        :class="{ 'bg-accent/50': filterChip == 1 }"
        @click="filterChip = 1"
      >
        Arts
      </div>
      <div
        class="px-4 py-1 transition border-2 rounded-full cursor-pointer bg-secondary border-accent"
        :class="{ 'bg-accent/50': filterChip == 2 }"
        @click="filterChip = 2"
      >
        Sports
      </div>
      <div
        class="px-4 py-1 transition border-2 rounded-full cursor-pointer bg-secondary border-accent"
        :class="{ 'bg-accent/50': filterChip == 3 }"
        @click="filterChip = 3"
      >
        Games
      </div>
    </div>
    <!-- Card -->
    <div class="flex flex-col w-full gap-3 mt-4" v-auto-animate>
      <EventsEditCard
        v-for="contest in contests"
        :contest="contest"
        :key="contest.id"
      />
    </div>
  </div>
</template>
