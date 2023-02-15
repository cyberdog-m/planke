<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <header>
    <NavBar />
  </header>

  <div class="h-full min-h-screen px-2 bg-primary">
    <RouterView class="max-w-md mx-auto pt-14" />
  </div>
</template>

<style>
@import url("https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,300&display=swap");

body {
  font-family: "Clash Display", sans-serif;
}
</style>
