<script setup>
import EventDetails from "../components/EventDetails.vue";
// Placeholder values
const contests = [
  {
    id: 1,
    title: "Football",
    type: "group",
    first_place: "CAMS",
    first_place_grp: "cams",
    second_place: "ELEMENT",
    second_place_grp: "element",
    third_place: "CUMECS",
    third_place_grp: "cumecs",
  },
  {
    id: 2,
    title: "Light Music",
    type: "individual",
    first_place: "John Doe",
    first_place_grp: "cams",
    second_place: "Sam Becham",
    second_place_grp: "element",
    third_place: "Pious Jacob",
    third_place_grp: "cumecs",
  },
  {
    id: 3,
    title: "Recitation Malayalam / English",
    type: "individual",
    first_place: "John Doe jacob",
    first_place_grp: "cams",
    second_place: "Sam Becham",
    second_place_grp: "element",
    third_place: "Pious Jacob",
    third_place_grp: "cumecs",
  },
];
</script>

<template>
  <div class="w-full text-white">
    <h1 class="flex flex-col items-center mt-5 text-xl">
      Arts, Sports & Games
      <span class="text-5xl font-medium">Scoreboard</span>
    </h1>
    <h2 class="mt-10 text-4xl font-medium">Overall Ranking</h2>
    <!-- Chart Componenet -->
    <div class="w-full h-[20rem] mt-3 rounded-xl bg-secondary"></div>
    <h2 class="mt-10 text-4xl font-medium">Event Updates</h2>
    <EventDetails
      v-for="contest in contests"
      :key="contest.id"
      :contest-detail="contest"
    />
  </div>
</template>
