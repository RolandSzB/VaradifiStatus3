<script setup></script>
<template>
  <div class="flex flex-col text-center justify-center bg-amber-100 xl:px-36 pb-4">
    <div class="flex flex-col xl:flex-row justify-center items-center text-5xl font-bold my-14">
      <div class="w-80 xl:w-1/2 mb-6">
        <p class="text-center text-4xl xl:text-5xl mb-6">
          Találkozzunk minden szerdán 19 órától a Berthelot 5-nél!
        </p>
        <hr class="my-2 mx-36 xl:my-10 xl:mx-60 border-1 border-black" />
      </div>
      <div class="w-1/2 h-120">
        <a
          href="https://www.google.com/maps/place/V%C3%A1radifi/@47.0565959,21.9410062,15z/data=!4m6!3m5!1s0x474647e4bee63773:0x6df94bd1743e25eb!8m2!3d47.0565959!4d21.9410062!16s%2Fg%2F1hhjsmd41?entry=ttu"
          target="_blank"
        >
          <img
            src="../images/map.png"
            alt="Logo"
            class="object-cover mx-30 cursor-pointer"
            onclick="window.open('https://www.google.com/maps/place/V%C3%A1radifi/@47.0565959,21.9410062,15z/data=!4m6!3m5!1s0x474647e4bee63773:0x6df94bd1743e25eb!8m2!3d47.0565959!4d21.9410062!16s%2Fg%2F1hhjsmd41?entry=ttu', '_blank');"
        /></a>
      </div>
    </div>
    <a href="events.html" target="_blank" class="bg-black rounded-xl py-4 mx-12 mb-6">
      <p class="text-white font-bold text-2xl text-left ms-6">További események</p>
    </a>
  </div>
</template>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
