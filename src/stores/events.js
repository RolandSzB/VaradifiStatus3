import { defineStore } from "pinia";
import axios from "axios";

import { ws } from "../ws.js";
export const useEventsStore = defineStore("events", {
  state: () => {
    return {
      events: [],
    };
  },
  actions: {
    async addEvent(dateNum, dateMonth, eventTitle, eventDate, eventPeriod) {
      const newEvent = {
        dateNum,
        dateMonth,
        eventTitle,
        eventDate,
        eventPeriod,
      };
      this.events.push(newEvent);

      const eventRow = await axios.post("http://localhost:3000/events", newEvent, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      this.events[this.events.length - 1].id = eventRow.data.id;

      localStorage.setItem("events", JSON.stringify(this.events));

      ws.send(JSON.stringify(this.events));
    },
    editEvent(eventId, value) {
      const eventIndex = this.events.findIndex(event => event.id === eventId);
      this.events[eventIndex].name = value;
      axios.put(
        "http://localhost:3000/events",
        { eventId, value },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.setItem("events", JSON.stringify(this.events));
      ws.send(JSON.stringify(this.events));
    },

    deleteEvent(id) {
      const eventIndex = this.events.findIndex(event => event.id === id);
      this.events.splice(eventIndex, 1);

      axios.delete("http://localhost:3000/events", {
        headers: {
          "Content-Type": "application/json",
        },
        data: { id },
      });
      localStorage.setItem("events", JSON.stringify(this.events));
      ws.send(JSON.stringify(this.events));
    },
  },
});
