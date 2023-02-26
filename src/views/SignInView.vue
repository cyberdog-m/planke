<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "../supabase";
import { useUserStore } from "../stores/user";
import AlertOutlineIcon from "vue-material-design-icons/AlertOutline.vue";

const router = useRouter();
const userStore = useUserStore();

const emailId = ref();
const password = ref();

const errorMsg = ref();

async function signInUser() {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: emailId.value,
      password: password.value,
    });
    if (error) throw error;
    router.push({ name: "events-list" });
  } catch (error) {
    console.warn(error.message);
    errorMsg.value = error.message;
  }
}

onMounted(() => {
  if (userStore.isAuthenticated) {
    router.push({ name: "events-list" });
  }
});
</script>

<template>
  <div class="w-full text-white">
    <h1 class="mt-10 text-4xl font-medium text-center">Sign In</h1>
    <form @submit.prevent="signInUser">
      <div
        class="flex flex-col px-4 py-4 mt-5 rounded-xl bg-secondary"
        v-auto-animate
      >
        <div class="text-lg">Email Id</div>
        <input
          required
          v-model="emailId"
          placeholder="Enter email address"
          class="w-full h-10 px-3 mt-1 rounded-md outline outline-accent outline-1 bg-secondary"
          type="text"
        />
        <div class="mt-5 text-lg">Password</div>
        <input
          required
          v-model="password"
          placeholder="Enter the password"
          class="w-full h-10 px-3 mt-1 mb-4 rounded-md outline outline-accent outline-1 bg-secondary"
          type="password"
        />
        <div
          v-if="errorMsg"
          class="flex items-center w-full p-3 mt-2 font-medium rounded-md bg-rose-300 text-primary"
        >
          <AlertOutlineIcon fillColor="#1c1727" class="mr-4" />
          {{ errorMsg }}
        </div>
      </div>
      <div class="flex justify-center">
        <button
          type="submit"
          class="px-10 w-[12rem] mt-5 rounded-xl text-lg font-medium text-primary py-3 bg-accent hover:bg-accent/90"
        >
          Sign In
        </button>
      </div>
    </form>
  </div>
</template>
