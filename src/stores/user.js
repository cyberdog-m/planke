import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useUserStore = defineStore("user", () => {
  const user = ref();

  const isAuthenticated = computed(() => {
    return user.value ? true : false;
  });

  const isAdmin = computed(() => {
    if (isAuthenticated.value) {
      return user.value.user_role == "admin";
    }
    return false;
  });

  async function getSessionData() {
    try {
      const { data, error } = await supabase.auth.getSession();
      let userData = {
        id: data.session.user.id,
        email: data.session.user.email,
        full_name: data.session.user.user_metadata.full_name,
        user_role: data.session.user.user_metadata.user_role,
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

  async function signOutUser() {
    try {
      const { error } = await supabase.auth.signOut();
      window.location.reload();
      if (error) throw error;
    } catch (error) {
      console.warn(error.message);
    }
  }

  return {
    user,
    getSessionData,
    isAuthenticated,
    isAdmin,
    resetUser,
    signOutUser,
  };
});
