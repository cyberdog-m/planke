import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useUserStore = defineStore("user", () => {
  const user = ref();

  const isAuthenticated = computed(() => {
    return user.value ? true : false;
  });

  async function getSessionData() {
    try {
      const { data, error } = await supabase.auth.getSession();
      let userData = {
        id: data.session.user.id,
        email: data.session.user.email,
      };
      user.value = userData;
      if (error) throw error;
    } catch (error) {
      console.warn(error.message);
    }
  }

  function resetUser() {
    user.value = null;
  }

  return {
    user,
    getSessionData,
    isAuthenticated,
    resetUser,
  };
});
