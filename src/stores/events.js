import { defineStore } from "pinia";
export const useEventsStore = defineStore("events", {
  state: () => {
    return {
      events: [
        {
          dateNum: 24,
          dateMonth: "JAN",
          eventTitle: "Vigyazat! Sodrasveszely! - Kiss Mate",
          eventDate: "Szerda, Januar 24, 2024",
          eventPeriod: "17:00-21:00",
        },
        {
          dateNum: 31,
          dateMonth: "JAN",
          eventTitle: "Menny es Pokol - Petyar Lorand",
          eventDate: "Szerda, Januar 31, 2024",
          eventPeriod: "17:00-21:00",
        },
        {
          dateNum: 7,
          dateMonth: "FEB",
          eventTitle: "Egy uj tema - Petyar Lorand",
          eventDate: "Szerda, Februar 7, 2024",
          eventPeriod: "17:00-21:00",
        },
      ],
    };
  },
});
