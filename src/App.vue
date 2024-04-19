<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="flex justify-between bg-amber-100 p-2 items-center">
    <div class="flex items-center justify-center">
      <RouterLink to="/" class="hover:underline me-6 hover:bg-amber-300 hover:rounded-lg">
        <img src="./images/varadifi.png" alt="Logo" class="w-8 h-8 object-cover" />
      </RouterLink>
    </div>
    <div class="flex items-center justify-center">
      <RouterLink
        to="/buy"
        class="hover:underline me-6 text-black hover:text-amber-700 hidden xl:block"
      >
        Rendelj</RouterLink
      >

      <button data-dropdown-toggle="dropdown" type="button" class="text-3xl visible xl:hidden">
        <i class="bi bi-list hover:text-amber-700"></i>
      </button>

      <!-- Dropdown menu -->
      <div
        id="dropdown"
        class="z-10 hidden bg-amber-100 divide-y divide-gray-100 rounded-lg shadow w-44"
      >
        <ul class="py-2 text-sm text-black" aria-labelledby="dropdownDefaultButton">
          <li>
            <RouterLink to="/buy" class="hover:underline me-6 hover:text-amber-700">
              Rendelj</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </div>

  <RouterView />
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
