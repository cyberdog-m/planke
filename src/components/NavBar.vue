<script setup>
import { computed, ref, watch } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { vOnClickOutside } from "@vueuse/components";

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();

const toggleNav = ref(false);

function closeNav() {
  toggleNav.value = false;
}

// Collapse Navbar on route change
watch(route, () => {
  closeNav();
});

function logout() {
  userStore.signOutUser();
}

const avatarUrl = computed(() => {
  return `https://api.dicebear.com/5.x/bottts-neutral/svg?seed=${userStore.user.id}&size=34`;
});
</script>

<template>
  <nav
    class="fixed top-0 z-50 w-full mx-auto text-white shadow-md shadow-primary/50 bg-secondary/70 backdrop-blur"
  >
    <div
      class="flex items-center justify-between max-w-4xl px-4 mx-auto shadow-sm h-14"
    >
      <img
        @click="router.push({ name: 'home' })"
        src="../assets/union_logo_w-text.png"
        alt="College Union Logo"
        class="cursor-pointer h-7"
      />
      <!-- Hamburger Menu -->
      <div class="relative">
        <button
          type="button"
          class="flex items-center justify-center w-8 h-8 ml-3 text-gray-500 rounded-md"
          @click="toggleNav = true"
        >
          <svg class="w-6 h-6 fill-current" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          v-show="toggleNav"
          v-on-click-outside="closeNav"
          class="absolute mt-2 right-0 z-50 p-3 w-[14rem] bg-secondary outline outline-2 outline-sechover backdrop-blur-md rounded-md"
        >
          <div class="flex flex-col gap-1">
            <div
              v-if="userStore.isAuthenticated"
              class="flex flex-col items-center w-full px-2 pt-1 my-1"
            >
              <img
                :src="avatarUrl"
                alt="Profile image"
                class="w-10 h-10 p-1 rounded-full outline outline-2 bg-accent/20 outline-accent/50"
              />
              <div class="my-1 text-lg font-medium text-accent">
                {{ userStore.user.full_name }}
              </div>
              <div class="w-full h-[0.1rem] bg-gray-700 my-1"></div>
            </div>
            <RouterLink
              class="w-full px-3 py-2 transition-colors duration-100 ease-in-out rounded-md hover:bg-sechover"
              :to="{ name: 'home' }"
              >Home</RouterLink
            >
            <RouterLink
              class="w-full px-3 py-2 transition-colors duration-100 ease-in-out rounded-md hover:bg-sechover"
              :to="{ name: 'venue' }"
              >Venue Details</RouterLink
            >
            <RouterLink
              v-if="userStore.isAuthenticated"
              class="w-full px-3 py-2 transition-colors duration-100 ease-in-out rounded-md hover:bg-sechover"
              :to="{ name: 'events-list' }"
              >Events List</RouterLink
            >
            <RouterLink
              v-if="!userStore.isAuthenticated"
              class="w-full px-3 py-2 transition-colors duration-100 ease-in-out rounded-md hover:bg-sechover"
              :to="{ name: 'signin' }"
              >Sign In</RouterLink
            >
            <RouterLink
              v-if="userStore.isAdmin"
              class="w-full px-3 py-2 transition-colors duration-100 ease-in-out rounded-md hover:bg-sechover"
              :to="{ name: 'admin' }"
              >Admin</RouterLink
            >
            <div
              v-if="userStore.isAuthenticated"
              @click="logout"
              class="w-full px-3 py-2 transition-colors duration-100 ease-in-out rounded-md cursor-pointer hover:bg-sechover"
            >
              Logout
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.router-link-active {
  @apply font-medium bg-accent/20;
}
</style>
