<script setup>
import { useDateFormat } from "@vueuse/core";

const props = defineProps({
  venueDetail: {
    type: Object,
    default: () => ({
      name: "Event Name",
    }),
  },
});

const formatted_day = useDateFormat(new Date(props.venueDetail.date), "D MMM");
const formatted_time = useDateFormat(new Date(props.venueDetail.date), "h:mm");
const formatted_meridiem = useDateFormat(new Date(props.venueDetail.date), "A");
</script>
<template>
  <div
    class="flex justify-between w-full p-3 duration-200 cursor-pointer rounded-xl bg-secondary hover:bg-sechover"
  >
    <div class="flex flex-col gap-2">
      <h3 class="text-xl font-medium">{{ props.venueDetail.name }}</h3>
      <div class="font-medium text-accent">
        {{ props.venueDetail.venues.name }}
      </div>
      <div>{{ props.venueDetail.venues.location }}</div>
    </div>
    <div
      class="flex flex-col items-center justify-center px-4 rounded-md bg-primary/50"
    >
      <div class="flex items-center text-3xl font-medium text-accent">
        {{ formatted_time }}
        <span class="ml-1 text-xs">{{ formatted_meridiem }}</span>
      </div>
      <div>{{ formatted_day }}</div>
    </div>
  </div>
</template>
