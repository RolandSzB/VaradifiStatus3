<script></script>
<template>
  <div class="flex flex-col xl:flex-row bg-black justify-center items-center pt-16 pb-10">
    <div class="flex flex-col justify-start text-white xl:order-last">
      <p class="text-3xl xl:text-5xl text-amber-100 font-bold mb-6 xl:mb-14">
        {{ $t("help") }}
      </p>
      <div class="flex text-xl xl:text-2xl font-bold mb-2">
        <p>Petyár Lóri:</p>
        <p class="underline">+40 (735) 500 956</p>
      </div>
      <p class="flex text-xl xl:text-2xl font-bold">varadifi@gmail.com</p>
      <div class="flex my-2 xl:my-10 justify-center items-center xl:justify-start">
        <a href="https://www.instagram.com/varadifi/" target="_blank" class="text-white">
          <i class="bi bi-instagram text-3xl bg-gray-800 px-3 pt-1 pb-3 rounded-full me-4"></i>
        </a>
        <a href="https://www.facebook.com/varadifi" target="_blank" class="text-white">
          <i class="bi bi-facebook text-3xl bg-gray-800 px-3 pt-1 pb-3 rounded-full me-4"></i>
        </a>
        <a href="https://www.youtube.com/@varadifi" target="_blank" class="text-white">
          <i class="bi bi-youtube text-3xl bg-gray-800 px-3 pt-1 pb-3 rounded-full me-4"></i>
        </a>
      </div>
      <p class="flex text-xl xl:text-2xl font-bold underline mb-2">{{ $t("church") }}</p>
      <p class="flex text-xl xl:text-2xl font-bold mb-2">{{ $t("thursday") }} 18:00</p>
      <p class="flex text-xl xl:text-2xl font-bold">{{ $t("sunday") }} 10:00 és 18:00</p>
    </div>
    <img
      src="../images/varadifiHome.png"
      alt="Logo"
      class="w-full h-3/5 xl:w-2/5 xl:h-2/5 mt-10 xl:mt-0 object-cover xl:me-4"
    />
  </div>
  <div class="flex bg-black justify-center items-center">
    <p
      class="flex text-white font-bold text-xl xl:text-2xl tracking-widest pb-10 px-4 xl:px-64 text-center"
    >
      {{ $t("description") }}
    </p>
  </div>
  <div class="flex bg-black justify-center items-center">
    <p class="text-gray-400 text-lg pb-10 px-4 xl:px-64 text-center">{{ $t("shortInfo") }}</p>
  </div>

  <div class="flex bg-black justify-center items-center">
    <p class="text-gray-700 text-xs pb-10">Made by SzBRoli</p>
  </div>
</template>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
