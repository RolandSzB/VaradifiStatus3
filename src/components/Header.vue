<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isHidden = ref(false);
const lastScrollY = ref(0);
const isDropdownOpen = ref(false);

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY.value && currentScrollY > 50) {
    isHidden.value = true;
  } else {
    isHidden.value = false;
  }

  lastScrollY.value = currentScrollY;
};

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const scrollToSection = sectionId => {
  isDropdownOpen.value = false;
  if (window.location.pathname === "/") {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  } else {
    router.push({ path: "/", hash: `#${sectionId}` });
  }
};
</script>

<template>
  <div
    class="fixed top-0 left-0 right-0 w-full z-50 transition-transform duration-300 ease-in-out"
    :class="{
      '-translate-y-3 bg-amber-100/30 backdrop-blur-xl shadow-xl': isHidden,
      'translate-y-0 bg-amber-100/90 backdrop-blur-md shadow-md': !isHidden,
    }"
  >
    <div class="flex justify-between p-3 items-center">
      <div class="flex items-center">
        <router-link to="/admin" class="hover:underline me-6 hover:bg-amber-300 hover:rounded-lg">
          <img src="../images/varadifi.png" alt="Logo" class="w-8 h-8 object-cover" />
        </router-link>
      </div>

      <!-- PC NÉZET -->
      <div class="hidden xl:flex items-center">
        <a
          @click.prevent="scrollToSection('home')"
          class="hover:underline me-6 hover:text-amber-700 cursor-pointer"
        >
          {{ $t("home") }}
        </a>
        <a
          @click.prevent="scrollToSection('events')"
          class="hover:underline me-6 hover:text-amber-700 cursor-pointer"
        >
          {{ $t("eventS") }}
        </a>
        <a
          @click.prevent="scrollToSection('shirts')"
          class="hover:underline me-6 hover:text-amber-700 cursor-pointer"
        >
          {{ $t("shirts") }}
        </a>
        <a
          @click.prevent="scrollToSection('aboutUsPage')"
          class="hover:underline me-6 hover:text-amber-700 cursor-pointer"
        >
          {{ $t("aboutUs") }}
        </a>
        <router-link to="/buy" class="hover:underline me-6 hover:text-amber-700">
          {{ $t("placeOrder") }}
        </router-link>

        <select
          v-model="$i18n.locale"
          class="bg-amber-100 border-2 border-black rounded-lg p-1 hidden xl:block"
        >
          <option value="hu">Magyar</option>
          <option value="en">English</option>
        </select>
      </div>

      <div class="xl:hidden flex items-center">
        <select
          v-model="$i18n.locale"
          class="bg-amber-100 border-2 border-black rounded-lg p-1 me-3"
        >
          <option value="hu">Magyar</option>
          <option value="en">English</option>
        </select>

        <button @click="toggleDropdown" class="text-3xl relative">
          <i class="bi bi-list hover:text-amber-700"></i>
        </button>
      </div>

      <div
        v-show="isDropdownOpen"
        class="absolute right-2 top-14 w-60 bg-amber-100 rounded-lg shadow-lg transition-all duration-300 ease-in-out opacity-100 scale-100"
        :class="{ 'opacity-0 scale-95': !isDropdownOpen }"
      >
        <ul class="py-2 text-sm text-black text-center">
          <li>
            <a
              @click.prevent="scrollToSection('home')"
              class="block py-2 hover:underline hover:text-amber-700 cursor-pointer"
            >
              {{ $t("home") }}
            </a>
          </li>
          <li>
            <a
              @click.prevent="scrollToSection('events')"
              class="block py-2 hover:underline hover:text-amber-700 cursor-pointer"
            >
              {{ $t("eventS") }}
            </a>
          </li>
          <li>
            <a
              @click.prevent="scrollToSection('shirts')"
              class="block py-2 hover:underline hover:text-amber-700 cursor-pointer"
            >
              {{ $t("shirts") }}
            </a>
          </li>
          <li>
            <a
              @click.prevent="scrollToSection('aboutUsPage')"
              class="block py-2 hover:underline hover:text-amber-700 cursor-pointer"
            >
              {{ $t("aboutUs") }}
            </a>
          </li>
          <li>
            <router-link
              to="/buy"
              @click="isDropdownOpen = false"
              class="block py-2 hover:underline hover:text-amber-700"
            >
              {{ $t("placeOrder") }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
