<script setup>
import Header from "../components/Header.vue";
import AdminCalendar from "../components/AdminCalendar.vue";
import AdminPage from "../components/AdminPage.vue";
import AdminLogin from "../components/AdminLogin.vue";

import { ref, onMounted } from "vue";
import { useEventsStore } from "../stores/events";
import axios from "axios";

const eventStore = useEventsStore();
const isLoggedIn = ref(false);

onMounted(async () => {
  if (isLoggedIn.value) {
    const events = await axios.get("http://localhost:3000/events");
    eventStore.events = events.data;
  }
});

const handleLogin = async () => {
  isLoggedIn.value = true;

  // Load events after login
  const events = await axios.get("http://localhost:3000/events");
  eventStore.events = events.data;
};
</script>

<template>
  <Header></Header>

  <div v-if="!isLoggedIn">
    <AdminLogin @login-success="handleLogin" />
  </div>

  <div v-else class="flex pt-20 bg-amber-100 items-center justify-center">
    <div>
      <AdminPage />
    </div>
    <div class="flex flex-col">
      <AdminCalendar
        v-for="event in eventStore.events"
        :id="event.id"
        :key="event.id"
        :details="event"
      />
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
