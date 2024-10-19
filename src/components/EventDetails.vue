<script setup>
const props = defineProps({
  contestDetail: {
    type: Object,
    default: () => ({
      title: "Event Title",
      type: "group",
    }),
  },
});
</script>

<template>
  <div class="w-full p-3 rounded-xl bg-secondary">
    <div class="flex items-center justify-between">
      <h3 class="text-2xl font-medium tracking-wide">
        {{ props.contestDetail.title }}
      </h3>
      <!-- Chip -->
      <div
        class="flex items-center px-3 ml-3 font-medium capitalize rounded-full bg-accent text-primary"
      >
        {{ props.contestDetail.type }}
      </div>
    </div>
    <!-- Winners Details -->
    <div class="flex flex-col gap-1 mt-3">
      <div class="flex" v-if="props.contestDetail.first_place_grp">
        1<span class="mr-1 text-xs align-top">st</span> Place :
        <div class="flex flex-col ml-5 font-medium capitalize">
          {{ props.contestDetail.first_place }}
          <div class="text-sm text-gray-400 uppercase">
            {{ props.contestDetail.first_place_grp }}
          </div>
        </div>
      </div>
      <div class="flex" v-if="props.contestDetail.second_place_grp">
        2<span class="mr-1 text-xs align-top">nd</span> Place :
        <div class="flex flex-col ml-3 font-medium capitalize">
          {{ props.contestDetail.second_place }}
          <div class="text-sm text-gray-400 uppercase">
            {{ props.contestDetail.second_place_grp }}
          </div>
        </div>
      </div>
      <div class="flex" v-if="props.contestDetail.third_place_grp">
        3<span class="mr-1 text-xs align-top">rd</span> Place :
        <div class="flex flex-col ml-3 font-medium capitalize">
          {{ props.contestDetail.third_place }}
          <div class="text-sm text-gray-400 uppercase">
            {{ props.contestDetail.third_place_grp }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
