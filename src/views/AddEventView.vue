<script setup></script>
<template>
  <div class="w-full text-white">
    <h1 class="mt-10 text-4xl font-medium text-center">Add New Event</h1>
    <form action="">
      <div class="flex flex-col px-4 py-4 mt-5 rounded-xl bg-secondary">
        <!-- Event Title -->
        <div class="text-lg">Event Name</div>
        <input
          required
          placeholder="Enter the name of the event"
          class="w-full h-10 px-3 mt-1 rounded-md outline outline-accent outline-1 bg-secondary"
          type="text"
        />
        <!-- Event Category -->
        <div class="mt-5 text-lg">Category</div>
        <select
          id="category"
          class="w-full h-10 px-3 mt-1 mb-2 rounded-md outline outline-1 outline-accent bg-secondary"
        >
          <option selected disabled>Select Event Category</option>
          <option value="cams">Arts</option>
          <option value="mace">Sports</option>
          <option value="element">Games</option>
          <option value="cumecs">Other</option>
        </select>
        <!-- Event Type -->
        <div class="mt-5 text-lg">Type</div>
        <select
          id="category"
          class="w-full h-10 px-3 mt-1 mb-2 rounded-md outline outline-1 outline-accent bg-secondary"
        >
          <option selected disabled>Select Event Type</option>
          <option value="cams">Individula</option>
          <option value="mace">Group</option>
        </select>
        <!-- Points -->
        <div class="mt-5 text-lg">First Place Points</div>
        <input
          required
          type="number"
          inputmode="numeric"
          class="w-full h-10 px-3 mt-1 rounded-md outline outline-accent outline-1 bg-secondary"
        />
        <div class="mt-5 text-lg">Second Place Points</div>
        <input
          required
          type="number"
          inputmode="numeric"
          class="w-full h-10 px-3 mt-1 rounded-md outline outline-accent outline-1 bg-secondary"
        />
        <div class="mt-5 text-lg">Third Place Points</div>
        <input
          required
          type="number"
          inputmode="numeric"
          class="w-full h-10 px-3 mt-1 mb-5 rounded-md outline outline-accent outline-1 bg-secondary"
        />
      </div>
      <div class="flex justify-center">
        <button
          class="px-10 w-[12rem] mx-auto mt-5 rounded-xl text-lg font-medium text-primary py-3 bg-accent hover:bg-accent/90"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
