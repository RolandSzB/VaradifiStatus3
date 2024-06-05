<script setup>
import { useEventsStore } from "../stores/events.js";
import AdminForm from "./AdminForm.vue";

const eventsStore = useEventsStore();

function handleAddNewEvent(eventData) {
  eventsStore.addEvent(
    eventData.dateNum,
    eventData.dateMonth,
    eventData.eventTitle,
    eventData.eventDate,
    eventData.eventPeriod
  );
}
</script>

<template>
  <div>
    <AdminForm @addNewEvent="handleAddNewEvent" />
  </div>
</template>
