<script setup>
import { RouterView } from "vue-router";
import { onMounted, onUnmounted } from "vue";
import { supabase } from "./supabase";
import { useContestsStore } from "./stores/contests";
import { useUserStore } from "./stores/user";
import NavBar from "./components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";

const contestsStore = useContestsStore();
const userStore = useUserStore();

contestsStore.getSupabaseData();
userStore.getSessionData();

supabase.auth.onAuthStateChange((event, session) => {
  if (event == "SIGNED_IN") {
    let userData = {
      id: session.user.id,
      email: session.user.email,
      full_name: session.user.user_metadata.full_name,
      user_role: session.user.user_metadata.user_role,
    };
    userStore.user = userData;
  } else if (event == "SIGNED_OUT") {
    userStore.resetUser();
  }
});

onMounted(() => {
  subscribeSupabaseData();
});

onUnmounted(() => {
  supabase.removeAllChannels();
});

const subscribeSupabaseData = () => {
  supabase
    .channel("any")
    .on("postgres_changes", { event: "INSERT", schema: "*" }, (payload) => {
      contestsStore.contests.push(payload.new);
    })
    .on("postgres_changes", { event: "UPDATE", schema: "*" }, (payload) => {
      const index = contestsStore.contests.findIndex(
        (item) => item.id === payload.new.id
      );
      contestsStore.contests[index] = payload.new;
    })
    .on("postgres_changes", { event: "DELETE", schema: "*" }, (payload) => {
      const index = contestsStore.contests.findIndex(
        (item) => item.id === payload.old.id
      );
      contestsStore.contests.splice(index, 1);
    })

    .subscribe();
};
</script>

<template>
  <header>
    <NavBar />
  </header>

  <div class="h-full min-h-screen px-4 pb-14 bg-primary">
    <RouterView class="max-w-md mx-auto pt-14" />
  </div>

  <footer>
    <FooterBar />
  </footer>
</template>

<style>
@import url("https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,300&display=swap");

body {
  font-family: "Clash Display", sans-serif;
}
</style>
