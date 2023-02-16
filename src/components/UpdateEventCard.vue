<script setup>
const props = defineProps({
  title: String,
  points: Number,
});
</script>

<template>
  <div class="w-full p-3 mt-4 rounded-xl bg-secondary">
    <div class="flex justify-between">
      <h3 class="text-xl font-medium">
        {{ props.title }}
      </h3>
      <div class="flex items-center px-3 font-medium rounded-full bg-accent/30">
        {{ points }} Points
      </div>
    </div>
    <div class="mt-2 text-lg">Name</div>
    <input
      type="text"
      class="w-full h-10 px-3 mt-1 rounded-md outline outline-accent outline-1 bg-secondary"
    />
    <div class="mt-4 text-lg">Association</div>
    <select
      id="association"
      class="w-full h-10 px-3 mt-1 mb-2 rounded-md outline outline-1 outline-accent bg-secondary"
    >
      <option selected disabled>Select an Association</option>
      <option value="cams">CAMS</option>
      <option value="mace">MACE</option>
      <option value="element">ELEMENT</option>
      <option value="cumecs">CUMECS</option>
    </select>
  </div>
</template>
