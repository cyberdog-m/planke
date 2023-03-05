<template>
  <div class="flex flex-col items-center w-full text-white">
    <h1 class="mt-20 text-4xl text-center">
      About <span class="font-medium text-accent">Planke</span>
    </h1>
    <p class="mt-5 indent-8">
      <span class="font-medium">Planke</span> was designed to make keeping track
      of scores during games and competitions a breeze. The motivation behind
      the app was because it was difficult to find the ranking of different
      associations during Arts, Sports & Games in the past years.
      <span class="pl-1 font-medium text-accent">Planke</span>
      solves the problem by displaying all the scores and winner details in a
      single window in realtime.
    </p>
    <h2 class="mt-10 mb-5 text-xl font-medium">Technologies Used</h2>
    <div class="flex w-full gap-8 justify-evenly">
      <div class="flex flex-col-reverse items-center">
        <p class="mt-1">Vue.js</p>
        <svg
          class="h-8 fill-[#4FC08D]"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Vue.js</title>
          <path
            d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"
          />
        </svg>
      </div>
      <div class="flex flex-col-reverse items-center">
        <p class="mt-1">Tailwind CSS</p>
        <svg
          class="h-8 fill-[#06B6D4]"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Tailwind CSS</title>
          <path
            d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
          />
        </svg>
      </div>
      <div class="flex flex-col-reverse items-center">
        <p class="mt-1">Supabase</p>
        <svg
          class="h-8 fill-[#3ECF8E]"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Supabase</title>
          <path
            d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z"
          />
        </svg>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center mt-10">
      <h2 class="mb-3 text-lg font-medium">Source Code</h2>
      <a
        href="https://github.com/mathaimon/planke"
        target="_blank"
        class="inline-flex items-center"
      >
        <svg
          role="img"
          class="h-8 fill-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>GitHub</title>
          <path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          />
        </svg>
        <p class="ml-2 font-medium text-white">GitHub</p>
      </a>
    </div>
  </div>
</template>
