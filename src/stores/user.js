import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useUserStore = defineStore("user", () => {
  const user = ref();

  const isAuthenticated = computed(() => {
    return user.value ? true : false;
  });

  watch(user, async () => {
    if (isAuthenticated.value) {
      try {
        let { data, error, status } = await supabase
          .from("profiles")
          .select(`full_name, is_admin`)
          .eq("id", user.value.id)
          .single();

        if (error && status !== 406) throw error;

        if (data) {
          user.value.full_name = data.full_name;
          user.value.is_admin = data.is_admin;
        }
      } catch (error) {
        console.warn(error.message);
      }
    }
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

  async function signOutUser() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.warn(error.message);
    }
  }

  return {
    user,
    getSessionData,
    isAuthenticated,
    resetUser,
    signOutUser,
  };
});
