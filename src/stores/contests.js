import { ref } from "vue";
import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useContestsStore = defineStore("contests", () => {
  const contests = ref([]);

  const isLoading = ref(false);

  async function getSupabaseData() {
    isLoading.value = true;
    try {
      const { data, error } = await supabase.from("contests").select();

      if (data) {
        data.forEach((data) => {
          contests.value.push(data);
        });
      }
      isLoading.value = false;
      if (error) throw error;
    } catch (error) {
      console.warn(error.message);
    }
  }

  return { contests, isLoading, getSupabaseData };
});
