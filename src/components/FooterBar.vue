<script setup>
import HeartIcon from "vue-material-design-icons/Heart.vue";
const appVersion = VITE_APP_VERSION;
console.log(appVersion);
</script>
<template>
  <div class="w-full text-white min-h-[10rem] bg-footer">
    <div class="max-w-md px-5 pt-5 mx-auto">
      <div class="flex items-center justify-between">
        <div class="flex flex-col">
          <router-link
            :to="{ name: 'about' }"
            class="cursor-pointer hover:underline hover:underline-offset-2 decoration-accent"
            >About <span class="font-medium text-accent">Planke</span
            ><span class="ml-2 opacity-60">v{{ appVersion }}</span></router-link
          >
          <p class="mt-4 opacity-60">Follow Us</p>
          <div class="flex items-center gap-3 mt-2">
            <a href="https://instagram.com/element_mcet">
              <img
                class="h-8 duration-100 hover:opacity-100 opacity-80"
                src="../assets/element-logo.png"
                alt="Element Association Logo"
              />
            </a>
            <a href="https://instagram.com/mcetians">
              <img
                class="h-6 duration-100 opacity-80 hover:opacity-100"
                src="../assets/union-logo.png"
                alt="Malabar Union Logo"
              />
            </a>
          </div>
        </div>
        <a href="https://malabarcet.ac.in" target="_blank">
          <img
            src="../assets/malabar-logo.png"
            alt="malabar college logo"
            class="h-8 duration-100 opacity-80 hover:opacity-100"
          />
        </a>
      </div>
      <!-- Made with Love -->
      <div
        class="flex items-center justify-center pt-10 pb-5 text-sm opacity-90"
      >
        Made with
        <span class="mx-2">
          <HeartIcon :size="20" fillColor="#f8312f" />
        </span>
        by
        <a href="https://github.com/mathaimon" class="ml-1 font-medium"
          >Mathew</a
        >
      </div>
    </div>
  </div>
</template>
