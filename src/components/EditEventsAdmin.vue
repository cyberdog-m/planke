<script setup>
import { useRouter } from "vue-router";
import PencilOutlineIcon from "vue-material-design-icons/PencilOutline.vue";
import DeleteOutlineIcon from "vue-material-design-icons/DeleteOutline.vue";

const props = defineProps({
  contest: Object,
});

const router = useRouter();

function openEditEvent() {
  router.push({ name: "editevent", params: { eventId: props.contest.id } });
}
</script>

<template>
  <div
    class="flex items-center justify-between w-full p-3 duration-200 r rounded-xl bg-secondary hover:bg-sechover"
  >
    <h3 class="">{{ props.contest.title }}</h3>
    <div class="flex items-center gap-3">
      <div
        class="w-2 h-2 font-medium rounded-full"
        :class="{
          'bg-emerald-400': props.contest.is_complete,
          'bg-rose-400': !props.contest.is_complete,
        }"
      ></div>
      <button
        @click="openEditEvent"
        class="flex items-center justify-center w-10 h-10 rounded-md bg-accent"
      >
        <PencilOutlineIcon :size="27" fillColor="#1c1727" />
      </button>
      <button
        class="flex items-center justify-center w-10 h-10 rounded-md bg-rose-400"
      >
        <DeleteOutlineIcon :size="25" fillColor="#1c1727" />
      </button>
    </div>
  </div>
</template>
