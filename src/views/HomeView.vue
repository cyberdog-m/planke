<script setup>
import PointsChart from "../components/PointsChart.vue";
import EventDetails from "../components/EventDetails.vue";
import { useContestsStore } from "../stores/contests";
import { ref, computed } from "vue";
import { supabase } from "../supabase";
import AnnouncementCard from "../components/AnnouncementCard.vue";

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
    scam: 0,
    mace: 0,
    element: 0,
  };
  completedContests.value.forEach((contest) => {
    if (
      Number.isInteger(contest.first_place_point) &&
      contest.first_place_grp != null &&
      contest.first_place_grp != ""
    ) {
      scores[contest.first_place_grp] += contest.first_place_point;
    }
    if (
      Number.isInteger(contest.second_place_point) &&
      contest.second_place_grp != null &&
      contest.second_place_grp != ""
    ) {
      scores[contest.second_place_grp] += contest.second_place_point;
    }
    if (
      Number.isInteger(contest.third_place_point) &&
      contest.third_place_grp != null &&
      contest.third_place_grp != ""
    ) {
      scores[contest.third_place_grp] += contest.third_place_point;
    }
  });
  return scores;
});

//Get Announcements
const announcements = ref([]);
getAnnouncements();

async function getAnnouncements() {
  try {
    const { data, error } = await supabase.from("announcements").select();
    if (data) {
      data.forEach((data) => {
        if (data.display) {
          announcements.value.push(data);
        }
      });
    }
    if (error) throw error;
  } catch (error) {
    console.warn(error.message);
  }
}
</script>

<template>
  <div class="w-full text-white">
    <h1 class="flex flex-col items-center mt-5 text-xl">
      Arts, Sports & Games
      <span class="text-5xl font-medium">Scoreboard</span>
    </h1>
    <h2 class="mt-10 text-4xl font-medium">Overall Ranking</h2>
    <!-- Chart Componenet -->
    <PointsChart :overall-scores="overallScores" class="mt-3" />
    <h2 class="mt-10 text-4xl font-medium">Event Updates</h2>
    <div class="flex flex-col gap-4 mt-5" v-auto-animate>
      <AnnouncementCard
        v-for="announcement in announcements.sort((x, y) =>
          new Date(x.updated_at) > new Date(y.updated_at) ? -1 : 1
        )"
        :key="announcement.id"
        :announcement-detail="announcement"
      />
      <EventDetails
        v-for="contest in completedContests"
        :key="contest.id"
        :contest-detail="contest"
      />
    </div>
  </div>
</template>
