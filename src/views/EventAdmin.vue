<script setup>
import EventCalendar from "../components/EventCalendar.vue";
import AdminPage from "../components/AdminPage.vue";
import { useEventsStore } from "../stores/events";
const eventStore = useEventsStore();
</script>

<template>
  <EventCalendar v-for="event in eventStore.events" :details="event"></EventCalendar>
  <AdminPage></AdminPage>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
