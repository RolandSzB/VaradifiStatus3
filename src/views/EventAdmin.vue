<script setup>
import EventCalendar from "../components/EventCalendar.vue";
import AdminPage from "../components/AdminPage.vue";
import { useEventsStore } from "../stores/events";
const eventStore = useEventsStore();

import { onMounted } from "vue";
import axios from "axios";

onMounted(async () => {
  const events = await axios.get("http://localhost:3000/events");
  console.log(events.data);

  eventStore.events = events.data;
});
</script>

<template>
  <div class="flex bg-amber-100">
    <AdminPage></AdminPage>
    <EventCalendar v-for="event in eventStore.events" :details="event"> </EventCalendar>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
