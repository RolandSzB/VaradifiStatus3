<script setup>
import Header from "../components/Header.vue";
import AdminCalendar from "../components/AdminCalendar.vue";
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
  <Header></Header>
  <div class="flex bg-amber-100 items-center justify-center">
    <div>
      <AdminPage></AdminPage>
    </div>
    <div class="flex flex-col">
      <AdminCalendar
        v-for="event in eventStore.events"
        :id="event.id"
        :key="event.id"
        :details="event"
      >
      </AdminCalendar>
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
