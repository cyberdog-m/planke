<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "../supabase";
import AlertOutlineIcon from "vue-material-design-icons/AlertOutline.vue";

const router = useRouter();

const emailId = ref();
const password = ref();
const fullName = ref();
const userRole = ref("editor");

const errorMsg = ref();

async function signUpUser() {
  try {
    const { error } = await supabase.auth.signUp({
      email: emailId.value,
      password: password.value,
      options: {
        data: {
          full_name: fullName.value,
          user_role: userRole.value,
        },
      },
    });
    if (error) throw error;
    router.push({ name: "admin" });
  } catch (error) {
    console.warn(error.message);
    errorMsg.value = error.message;
  }
}
</script>

<template>
  <div class="w-full text-white">
    <h1 class="mt-10 text-4xl font-medium text-center">Sign Up</h1>
    <form @submit.prevent="signUpUser">
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
        <div class="mt-5 text-lg">Full Name</div>
        <input
          required
          v-model="fullName"
          placeholder="Enter the full name"
          class="w-full h-10 px-3 mt-1 rounded-md outline outline-accent outline-1 bg-secondary"
          type="text"
        />
        <div class="mt-5 text-lg">User Role</div>
        <select
          v-model="userRole"
          class="w-full h-10 px-3 mt-1 rounded-md outline outline-accent outline-1 bg-secondary"
        >
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
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
          Sign Up
        </button>
      </div>
    </form>
  </div>
</template>
