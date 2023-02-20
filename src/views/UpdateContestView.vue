<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useContestsStore } from "../stores/contests";
import { supabase } from "../supabase";

const route = useRoute();
const router = useRouter();
const contestsStore = useContestsStore();

const first_place = ref("");
const first_place_grp = ref("");
const second_place = ref("");
const second_place_grp = ref("");
const third_place = ref("");
const third_place_grp = ref("");

//find the contest with the id
const contest = computed(() => {
  return contestsStore.contests.find((contest) => {
    return contest.id == route.params.contestId;
  });
});

onMounted(() => {
  first_place.value = contest.value.first_place;
  first_place_grp.value = contest.value.first_place_grp;
  second_place.value = contest.value.second_place;
  second_place_grp.value = contest.value.second_place_grp;
  third_place.value = contest.value.third_place;
  third_place_grp.value = contest.value.third_place_grp;
});

async function updateContest() {
  try {
    const { error } = await supabase
      .from("contests")
      .update({
        first_place: first_place.value,
        first_place_grp: first_place_grp.value,
        second_place: second_place.value,
        second_place_grp: second_place_grp.value,
        third_place: third_place.value,
        third_place_grp: third_place_grp.value,
        is_complete: true,
        last_updated_at: new Date().toISOString(),
      })
      .eq("id", route.params.contestId);
    router.push({ name: "events-list" });
    if (error) throw error;
  } catch (error) {
    console.warn(error.message);
  }
}
</script>

<template>
  <div class="w-full text-white">
    <h1 class="mt-10 text-4xl font-medium text-center">Update Event Details</h1>
    <h2 class="mt-8 text-2xl font-medium capitalize">{{ contest.title }}</h2>
    <!-- Update Details Card -->
    <div class="flex flex-col items-center gap-2">
      <!-- First Place Card -->
      <div class="w-full p-3 mt-4 rounded-xl bg-secondary">
        <div class="flex justify-between">
          <h3 class="text-xl font-medium">First Place</h3>
          <div
            class="flex items-center px-3 font-medium rounded-full bg-accent/30"
          >
            {{ contest.first_place_point }} Points
          </div>
        </div>
        <div class="mt-2 text-lg">Name</div>
        <input
          type="text"
          v-model="first_place"
          class="w-full h-10 px-3 mt-1 rounded-md outline outline-accent outline-1 bg-secondary"
        />
        <div class="mt-4 text-lg">Association</div>
        <select
          id="association"
          v-model="first_place_grp"
          class="w-full h-10 px-3 mt-1 mb-2 rounded-md outline outline-1 outline-accent bg-secondary"
        >
          <option selected disabled>Select an Association</option>
          <option value="cams">CAMS</option>
          <option value="mace">MACE</option>
          <option value="element">ELEMENT</option>
          <option value="cumecs">CUMECS</option>
        </select>
      </div>
      <!-- Second Place Card -->
      <div class="w-full p-3 mt-4 rounded-xl bg-secondary">
        <div class="flex justify-between">
          <h3 class="text-xl font-medium">Second Place</h3>
          <div
            class="flex items-center px-3 font-medium rounded-full bg-accent/30"
          >
            {{ contest.second_place_point }} Points
          </div>
        </div>
        <div class="mt-2 text-lg">Name</div>
        <input
          type="text"
          v-model="second_place"
          class="w-full h-10 px-3 mt-1 rounded-md outline outline-accent outline-1 bg-secondary"
        />
        <div class="mt-4 text-lg">Association</div>
        <select
          id="association"
          v-model="second_place_grp"
          class="w-full h-10 px-3 mt-1 mb-2 rounded-md outline outline-1 outline-accent bg-secondary"
        >
          <option selected disabled>Select an Association</option>
          <option value="cams">CAMS</option>
          <option value="mace">MACE</option>
          <option value="element">ELEMENT</option>
          <option value="cumecs">CUMECS</option>
        </select>
      </div>
      <!-- Third Place Card -->
      <div class="w-full p-3 mt-4 rounded-xl bg-secondary">
        <div class="flex justify-between">
          <h3 class="text-xl font-medium">Third Place</h3>
          <div
            class="flex items-center px-3 font-medium rounded-full bg-accent/30"
          >
            {{ contest.third_place_point }} Points
          </div>
        </div>
        <div class="mt-2 text-lg">Name</div>
        <input
          type="text"
          v-model="third_place"
          class="w-full h-10 px-3 mt-1 rounded-md outline outline-accent outline-1 bg-secondary"
        />
        <div class="mt-4 text-lg">Association</div>
        <select
          id="association"
          v-model="third_place_grp"
          class="w-full h-10 px-3 mt-1 mb-2 rounded-md outline outline-1 outline-accent bg-secondary"
        >
          <option selected disabled>Select an Association</option>
          <option value="cams">CAMS</option>
          <option value="mace">MACE</option>
          <option value="element">ELEMENT</option>
          <option value="cumecs">CUMECS</option>
        </select>
      </div>
      <button
        @click="updateContest"
        class="w-[12rem] py-2 mt-5 mb-10 text-xl font-medium rounded-md text-primary bg-accent hover:bg-accent/90 duration-200"
      >
        Submit
      </button>
    </div>
  </div>
</template>
