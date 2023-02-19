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

// Filter the completed events and sort by last updated date
const completedContests = computed(() => {
  return contestsStore.contests
    .filter(filterCompleted)
    .sort((x, y) =>
      new Date(x.last_updated_at) > new Date(y.last_updated_at) ? -1 : 1
    );
});

// Calculate the overall score of completed contests
const overallScores = computed(() => {
  let scores = {
    cams: 0,
    mace: 0,
    cumecs: 0,
    element: 0,
  };
  completedContests.value.forEach((contest) => {
    scores[contest.first_place_grp] += contest.first_place_point;
    scores[contest.second_place_grp] += contest.second_place_point;
    scores[contest.third_place_grp] += contest.third_place_point;
  });
  return scores;
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
    <div class="flex flex-col gap-4 mt-5" v-auto-animate>
      <EventDetails
        v-for="contest in completedContests"
        :key="contest.id"
        :contest-detail="contest"
      />
    </div>
  </div>
</template>
