<script setup>
import { computed, onMounted, ref } from "vue";
import { supabase } from "../supabase";
import VenueDetailsCard from "../components/VenueDetailsCard.vue";

const programs = ref([]);
const searchFilter = ref("");

async function getVenueDetails() {
  try {
    const { data, error } = await supabase
      .from("programs")
      .select("*, venues(*)");

    if (data) {
      data.forEach((data) => {
        programs.value.push(data);
      });
    }
    if (error) throw error;
  } catch (error) {
    console.warn(error.message);
  }
}

function filterWithSearch(program) {
  if (searchFilter.value.trim() != "") {
    return (
      program.name
        .trim()
        .toLowerCase()
        .includes(searchFilter.value.trim().toLowerCase()) ||
      program.venues.name
        .trim()
        .toLowerCase()
        .includes(searchFilter.value.trim().toLowerCase()) ||
      program.venues.location
        .trim()
        .toLowerCase()
        .includes(searchFilter.value.trim().toLowerCase())
    );
  }
  return true;
}

const filteredPrograms = computed(() => {
  return programs.value
    .filter(filterWithSearch)
    .sort((x, y) => (new Date(x.date) > new Date(y.date) ? 1 : -1));
});

onMounted(() => {
  getVenueDetails();
});
</script>

<template>
  <div class="text-white">
    <h1 class="mt-10 text-4xl font-medium text-center">Venue Details</h1>
    <h2 class="mt-8 text-xl font-medium">Search Event / Venue</h2>
    <input
      type="text"
      placeholder="Enter Event / Venue Name"
      v-model="searchFilter"
      class="w-full h-10 px-3 mt-2 rounded-md outline outline-1 outline-accent bg-secondary"
    />
    <!-- Cards -->
    <div class="flex flex-col w-full gap-3 mt-4" v-auto-animate>
      <VenueDetailsCard
        v-for="program in filteredPrograms"
        :key="program.id"
        :venue-detail="program"
      />
    </div>
  </div>
</template>
