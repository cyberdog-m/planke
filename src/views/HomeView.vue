<script setup>
import PointsChart from "../components/PointsChart.vue";
import EventDetails from "../components/EventDetails.vue";
import { useContestsStore } from "../stores/contests";
import { computed } from "vue";

const contestsStore = useContestsStore();

// Select the completed event from the database
function filterCompleted(contest) {
  return contest.is_complete;
}

const completedContests = computed(() => {
  return contestsStore.contests.filter(filterCompleted);
});
</script>

<template>
  <div class="w-full text-white">
    <h1 class="flex flex-col items-center mt-5 text-xl">
      Arts, Sports & Games
      <span class="text-5xl font-medium">Scoreboard</span>
    </h1>
    <h2 class="mt-10 text-4xl font-medium">Overall Ranking</h2>
    <!-- Chart Componenet -->
    <PointsChart class="mt-3" />
    <h2 class="mt-10 text-4xl font-medium">Event Updates</h2>
    <EventDetails
      v-for="contest in completedContests"
      :key="contest.id"
      :contest-detail="contest"
    />
  </div>
</template>
