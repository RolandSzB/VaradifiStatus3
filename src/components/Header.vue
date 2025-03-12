<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const scrollToSection = sectionId => {
  if (window.location.pathname === "/") {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  } else {
    router.push({ path: "/", hash: `#${sectionId}` });
  }
};
</script>

<template>
  <div class="fixed top-0 left-0 right-0 w-full bg-amber-100 shadow-md z-50 py-2">
    <div class="flex justify-between bg-amber-100 p-2 items-center">
      <div class="flex items-center justify-center">
        <router-link to="/" class="hover:underline me-6 hover:bg-amber-300 hover:rounded-lg">
          <img src="../images/varadifi.png" alt="Logo" class="w-8 h-8 object-cover" />
        </router-link>
      </div>
      <div class="flex items-center justify-center">
        <router-link to="/buy" class="hover:underline me-6 hover:text-amber-700">
          Rendelj</router-link
        >

        <a
          @click.prevent="scrollToSection('events')"
          class="hover:underline me-6 hover:text-amber-700 cursor-pointer"
          >Események</a
        >
        <a
          @click.prevent="scrollToSection('shirts')"
          class="hover:underline me-6 hover:text-amber-700 cursor-pointer"
          >Pólók</a
        >
        <a
          @click.prevent="scrollToSection('eventabouts')"
          class="hover:underline me-6 hover:text-amber-700 cursor-pointer"
          >Rólunk</a
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
              <a href="#" class="hover:underline me-6 hover:text-amber-700"> Rendelj</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
