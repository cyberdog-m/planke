<template>
  <div class="flex flex-col items-center w-full text-white">
    <h1 class="mt-10 text-2xl text-center">
      There's a Glitch in the <br />
      <span class="text-3xl font-medium text-green-400">Matrix</span>
    </h1>
    <div class="relative">
      <img class="w-full mt-10" src="../assets/redpill.png" alt="404 Image" />
      <div class="absolute bottom-0 flex justify-center w-full mb-5">
        <p class="font-medium text-gray-400">Choose your Pill</p>
      </div>
      <div
        class="absolute bottom-0 flex justify-between w-full font-semibold mb-14"
      >
        <div
          class="px-2 py-1 bg-red-500 border-2 rounded-full text-primary border-primary/20"
        >
          Stay Here
        </div>
        <router-link
          :to="{ name: 'home' }"
          class="px-2 py-1 bg-blue-500 border-2 rounded-full text-primary border-primary/20"
        >
          Go Home
        </router-link>
      </div>
    </div>
  </div>
</template>
