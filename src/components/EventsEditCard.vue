<script setup>
const props = defineProps({
  contest: Object,
});
</script>

<template>
  <div
    class="flex items-center justify-between w-full p-3 duration-200 cursor-pointer rounded-xl bg-secondary hover:bg-sechover"
  >
    <h3 class="">{{ props.contest.title }}</h3>
    <div
      class="w-2 h-2 font-medium rounded-full"
      :class="{
        'bg-emerald-400': props.contest.is_complete,
        'bg-rose-400': !props.contest.is_complete,
      }"
    ></div>
  </div>
</template>
