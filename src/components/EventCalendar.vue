<script setup>
defineProps({
  details: Object,
});
</script>

<template>
  <div
    class="flex flex-col text-center justify-center bg-amber-100 px-4 xl:px-36 pb-4"
  >
    <div class="flex justify-start">
      <div
        class="flex flex-col bg-black rounded-lg p-2 ms-4 xl:ms-24 me-8 text-white font-bold text-xl w-16 h-16"
      >
        <p>{{ details.dateNum }}</p>
        <p>{{ details.dateMonth }}</p>
      </div>
      <div class="flex flex-col">
        <p class="text-2xl text-start hover:underline">
          {{ details.eventTitle }}
        </p>
        <div class="flex items-center">
          <i class="bi bi-calendar-week text-start"> </i>
          <p class="ms-2">{{ details.eventDate }}</p>
        </div>
        <div class="flex items-center">
          <i class="bi bi-clock text-start"></i>
          <p class="ms-2">{{ details.eventPeriod }}</p>
        </div>
        <div class="flex items-center hover:underline">
          <i class="bi bi-link text-start"></i>
          <p class="ms-2">Facebook esemény</p>
        </div>
        <div class="flex items-center hover:underline">
          <i class="bi bi-chevron-compact-down text-start"></i>
          <p class="ms-2">Show more</p>
        </div>
      </div>
    </div>
    <hr class="my-2 mx-20 xl:my-4 xl:ms-48 w-9/12 border-1 border-black" />
  </div>
</template>
