<script setup>
import { ref } from "vue";
import { useEventsStore } from "../stores/events.js";

const dateNum = ref("");
const dateMonth = ref("");
const eventTitle = ref("");
const eventDate = ref("");
const eventPeriod = ref("");

const eventsStore = useEventsStore();
const emit = defineEmits(["addNewEvent"]);

function addNewEvent() {
  const newEvent = {
    dateNum: dateNum.value,
    dateMonth: dateMonth.value,
    eventTitle: eventTitle.value,
    eventDate: eventDate.value,
    eventPeriod: eventPeriod.value,
  };
  emit("addNewEvent", newEvent);
}
</script>

<template>
  <div class="bg-amber-100">
    <form class="mx-4" @submit.prevent="addNewEvent">
      <div>
        <label for="dateNum" class="block mb-2 text-sm font-medium text-black">Datum</label>
        <input
          type="number"
          id="dateNum"
          class="bg-amber-100 border-2 border-black text-black text-sm rounded-lg block w-full p-2.5"
          placeholder="1-31"
          v-model="dateNum"
          required
        />
      </div>
      <div>
        <label for="dateMonth" class="block mb-2 text-sm font-medium text-black">Honap</label>
        <input
          type="text"
          id="dateMonth"
          class="bg-amber-100 border-2 border-black text-black text-sm rounded-lg block w-full p-2.5"
          placeholder="JAN-DEC"
          v-model="dateMonth"
          required
        />
      </div>
      <div>
        <label for="eventTitle" class="block mb-2 text-sm font-medium text-black"
          >Esemeny neve</label
        >
        <input
          type="text"
          id="eventTitle"
          class="bg-amber-100 border-2 border-black text-black text-sm rounded-lg block w-full p-2.5"
          placeholder="Esemeny neve"
          v-model="eventTitle"
          required
        />
      </div>
      <div>
        <label for="eventDate" class="block mb-2 text-sm font-medium text-black"
          >Teljes datum</label
        >
        <input
          type="date"
          id="eventDate"
          class="bg-amber-100 border-2 border-black text-black text-sm rounded-lg block w-full p-2.5"
          v-model="eventDate"
          required
        />
      </div>
      <div>
        <label for="eventPeriod" class="block mb-2 text-sm font-medium text-black"
          >Kezdes-Befejezes</label
        >
        <input
          type="text"
          id="eventPeriod"
          class="bg-amber-100 border-2 border-black text-black text-sm rounded-lg block w-full p-2.5"
          placeholder="19:00-21:00"
          v-model="eventPeriod"
          required
        />
      </div>
      <div class="flex justify-between">
        <button
          type="submit"
          class="heartbeat rounded-2xl border-black bg-black py-2 px-4 my-2 mx-4 hover:bg-amber-100 hover:text-black hover:border-2 text-white text-center text-xl xl:text-2xl font-bold"
        >
          Uj esemeny
        </button>
      </div>
    </form>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
