import { useEventsStore } from "./stores/events.js";

export const ws = new WebSocket("ws://localhost:8080");

ws.onopen = () => {
  console.log(`Connected to server`);
};

ws.onmessage = ws => {
  const eventStore = useEventsStore();
  eventStore.events = JSON.parse(ws.data);

  console.log("Message from server:", ws.data);
};
