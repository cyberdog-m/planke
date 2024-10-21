<script setup>
import { computed } from "vue";
import { associationsList } from "../utils/associations";

const props = defineProps({
  contestDetail: {
    type: Object,
    default: () => ({
      title: "Event Title",
      type: "group",
    }),
  },
});

const contestDetailModified = computed(() => {
  return {
    ...props.contestDetail,
    first_place:
      props.contestDetail.first_place.trim() === ""
        ? associationsList.find(
            (association) =>
              association.value === props.contestDetail.first_place_grp
          )?.name
        : props.contestDetail.first_place,
    second_place:
      props.contestDetail.second_place.trim() === ""
        ? associationsList.find(
            (association) =>
              association.value === props.contestDetail.second_place_grp
          )?.name
        : props.contestDetail.second_place,
    third_place:
      props.contestDetail.third_place.trim() === ""
        ? associationsList.find(
            (association) =>
              association.value === props.contestDetail.third_place_grp
          )?.name
        : props.contestDetail.third_place,
    first_place_grp: associationsList.find(
      (association) => association.value === props.contestDetail.first_place_grp
    )?.name,
    second_place_grp: associationsList.find(
      (association) =>
        association.value === props.contestDetail.second_place_grp
    )?.name,
    third_place_grp: associationsList.find(
      (association) => association.value === props.contestDetail.third_place_grp
    )?.name,
  };
});
</script>

<template>
  <div class="w-full p-3 rounded-xl bg-secondary">
    <div class="flex items-center justify-between">
      <h3 class="text-2xl font-medium tracking-wide">
        {{ contestDetailModified.title }}
      </h3>
      <!-- Chip -->
      <div
        class="flex items-center px-3 ml-3 font-medium capitalize rounded-full bg-accent text-primary"
      >
        {{ contestDetailModified.type }}
      </div>
    </div>
    <!-- Winners Details -->
    <div class="flex flex-col gap-1 mt-3">
      <div class="flex" v-if="contestDetailModified.first_place_grp">
        1<span class="mr-1 text-xs align-top">st</span> Place :
        <div class="flex flex-col ml-5 font-medium capitalize">
          {{ contestDetailModified.first_place }}
          <div
            class="text-sm text-gray-400 uppercase"
            :class="{
              hidden:
                contestDetailModified.first_place ===
                contestDetailModified.first_place_grp,
            }"
          >
            {{ contestDetailModified.first_place_grp }}
          </div>
        </div>
      </div>
      <div class="flex" v-if="contestDetailModified.second_place_grp">
        2<span class="mr-1 text-xs align-top">nd</span> Place :
        <div class="flex flex-col ml-3 font-medium capitalize">
          {{ contestDetailModified.second_place }}
          <div
            class="text-sm text-gray-400 uppercase"
            :class="{
              hidden:
                contestDetailModified.second_place ===
                contestDetailModified.second_place_grp,
            }"
          >
            {{ contestDetailModified.second_place_grp }}
          </div>
        </div>
      </div>
      <div class="flex" v-if="contestDetailModified.third_place_grp">
        3<span class="mr-1 text-xs align-top">rd</span> Place :
        <div class="flex flex-col ml-3 font-medium capitalize">
          {{ contestDetailModified.third_place }}
          <div
            class="text-sm text-gray-400 uppercase"
            :class="{
              hidden:
                contestDetailModified.third_place ===
                contestDetailModified.third_place_grp,
            }"
          >
            {{ contestDetailModified.third_place_grp }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
