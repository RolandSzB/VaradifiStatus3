<script setup>
import EventCalendar from "../components/EventCalendar.vue";
import AdminPage from "../components/AdminPage.vue";
import { useEventsStore } from "../stores/events";
const eventStore = useEventsStore();
</script>

<template>
  <div class="flex flex-col bg-amber-100">
    <EventCalendar v-for="event in eventStore.events" :details="event"></EventCalendar>
    <AdminPage></AdminPage>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
