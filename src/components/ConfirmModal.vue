<script setup>
import { vOnClickOutside } from "@vueuse/components";
import { supabase } from "../supabase";

const props = defineProps({
  showModal: Boolean,
  contest: Object,
});

const emit = defineEmits(["closeModal"]);

function closeModal() {
  emit("closeModal");
}

function deleteEvent() {
  emit("closeModal");
  removeItem(props.contest.id);
}

async function removeItem(item_id) {
  try {
    const { error } = await supabase
      .from("contests")
      .delete()
      .eq("id", item_id);
    if (error) throw error;
  } catch (error) {
    console.warn(error.message);
  }
}
</script>
<template>
  <div
    v-if="props.showModal"
    class="fixed top-0 left-0 z-40 flex items-center justify-center w-full h-full bg-primary/80 backdrop-blur-[1px] px-4"
  >
    <div
      v-on-click-outside="closeModal"
      class="w-full max-w-md p-5 text-center border-2 rounded-md py-14 text-md bg-secondary border-sechover"
    >
      Are you sure you want to delete event :
      <p class="text-lg font-medium capitalize text-accent">
        {{ props.contest.title }}
      </p>
      <div class="flex items-center justify-center mt-3">
        <button
          @click="deleteEvent"
          class="w-24 py-2 m-2 font-medium duration-200 rounded-md outline outline-2 outline-rose-400 bg-rose-400/70 hover:bg-rose-400"
        >
          Yes
        </button>
        <button
          @click="emit('closeModal')"
          class="w-24 py-2 m-2 font-medium duration-200 rounded-md py- bg-accent/60 outline-2 outline-accent outline hover:bg-accent"
        >
          No
        </button>
      </div>
    </div>
  </div>
</template>
