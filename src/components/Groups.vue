<script></script>
<template>
  <div class="flex flex-col xl:flex-row bg-white justify-between items-center px-14 xl:px-60">
    <img
      src="../images/group.png"
      alt="Logo"
      class="w-full h-3/5 xl:w-2/4 xl:h-2/4 mt-10 xl:mt-0 object-cover xl:me-4 xl:order-last"
    />
    <div class="flex flex-col mx-16 mb-6">
      <p class="text-center text-3xl xl:text-5xl font-bold ms-4 my-4 xl:my-14">
        {{ $t("joinPrayerGroup") }}
      </p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSenDEIRO-sMmXNnGK6qHEspgn_yFJEZBEpEI7b9ln3jOTwa9g/viewform"
        target="_blank"
        class="block mx-auto max-w-max"
      >
        <button
          class="heartbeat rounded-2xl border-black bg-black py-2 px-4 my-2 mx-16 xl:mx-40 hover:bg-amber-100 hover:text-black hover:border-2 text-white text-center text-xl xl:text-2xl font-bold"
        >
          {{ $t("joinButton") }}
        </button>
      </a>
    </div>
  </div>
</template>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
