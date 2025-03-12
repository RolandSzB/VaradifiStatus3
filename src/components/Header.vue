<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const lastScrollY = ref(0); // Tárolja az előző görgetési pozíciót
const isHidden = ref(false); // Ez szabályozza, hogy a navbar el legyen-e rejtve

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY.value && currentScrollY > 50) {
    // Ha lefelé görgetünk és nem vagyunk a tetején, rejtse el
    isHidden.value = true;
  } else {
    // Ha felfelé görgetünk, hozza vissza
    isHidden.value = false;
  }

  lastScrollY.value = currentScrollY; // Frissítsük az előző görgetési pozíciót
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const scrollToSection = sectionId => {
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
    <div class="flex justify-between p-3 items-center transition-all duration-300">
      <div class="flex items-center justify-center">
        <router-link to="/" class="hover:underline me-6 hover:bg-amber-300 hover:rounded-lg">
          <img src="../images/varadifi.png" alt="Logo" class="w-8 h-8 object-cover" />
        </router-link>
      </div>
      <div class="flex items-center justify-center">
        <router-link to="/buy" class="hover:underline me-6 hover:text-amber-700 hidden xl:block">
          Rendelj</router-link
        >
        <a
          @click.prevent="scrollToSection('events')"
          class="hover:underline me-6 hover:text-amber-700 cursor-pointer hidden xl:block"
          >Események</a
        >
        <a
          @click.prevent="scrollToSection('shirts')"
          class="hover:underline me-6 hover:text-amber-700 cursor-pointer hidden xl:block"
          >Pólók</a
        >
        <a
          @click.prevent="scrollToSection('eventabouts')"
          class="hover:underline me-6 hover:text-amber-700 cursor-pointer hidden xl:block"
          >Rólunk</a
        >
      </div>
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
