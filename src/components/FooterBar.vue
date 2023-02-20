<script setup>
import InstagramIcon from "vue-material-design-icons/Instagram.vue";
import HeartIcon from "vue-material-design-icons/Heart.vue";
</script>
<template>
  <div class="w-full text-white h-[10rem] bg-footer">
    <div class="max-w-md px-5 pt-5 mx-auto">
      <div class="flex items-center justify-between">
        <div class="flex flex-col">
          <p>Follow Us</p>
          <a href="https://instagram.com/element_mcet" class="mt-1 opacity-70">
            <InstagramIcon :size="30" />
          </a>
        </div>
        <img
          src="../assets/malabar-logo.png"
          alt="malabar college logo"
          class="h-12"
        />
      </div>
      <!-- Made with Love -->
      <div class="flex justify-center pt-10 opacity-90">
        Made with
        <span class="mx-2">
          <HeartIcon fillColor="#f8312f" />
        </span>
        by
        <a href="https://github.com/cyberdog-m" class="ml-1 font-medium"
          >Mathew</a
        >
      </div>
    </div>
  </div>
</template>
