<script setup>
defineProps({
  details: Object,
});
</script>
<template>
  <div class="flex justify-center py-4 px-3 w-full">
    <iframe
      :src="details.link"
      class="w-4/5 h-96 xl:w-full xl:h-128"
      frameborder="0"
      scrolling="no"
      allowtransparency="true"
    ></iframe>
  </div>
</template>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
