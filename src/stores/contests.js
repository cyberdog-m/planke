import { ref } from "vue";
import { defineStore } from "pinia";

export const useContestsStore = defineStore("contests", () => {
  const contests = ref();
  return { contests };
});
