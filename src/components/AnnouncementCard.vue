<script setup>
const props = defineProps({
  announcementDetail: Object,
});
</script>

<template>
  <div class="w-full p-3 rounded-xl bg-secondary">
    <div
      class="flex items-center justify-between"
      v-if="
        props.announcementDetail.title != '' &&
        props.announcementDetail.title != null
      "
    >
      <h3 class="text-2xl font-medium tracking-wide">
        {{ props.announcementDetail.title }}
      </h3>
      <!-- Chip -->
      <div
        class="flex items-center px-3 ml-3 font-medium capitalize rounded-full bg-accent text-primary"
      >
        {{ props.announcementDetail.tag }}
      </div>
    </div>
    <!-- Winners Details -->
    <div
      class="mt-3 mb-2"
      v-if="
        props.announcementDetail.title != '' &&
        props.announcementDetail.title != null
      "
    >
      {{ props.announcementDetail.description }}
    </div>
    <div
      v-if="
        props.announcementDetail.url != '' &&
        props.announcementDetail.url != null
      "
    >
      <img
        class="rounded-md"
        :src="props.announcementDetail.url"
        alt="Announcement Poster / Image"
      />
    </div>
  </div>
</template>
