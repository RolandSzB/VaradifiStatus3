<template>
  <!-- Butonul flotant de chat -->
  <div class="fixed bottom-4 right-4 z-50">
    <button
      class="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg"
      @click="toggleChat"
    >
      <span v-if="!isOpen">💬</span>
      <span v-else>❌</span>
    </button>
  </div>

  <!-- Fereastra de chat -->
  <div v-if="isOpen" class="fixed bottom-20 right-4 bg-white shadow-lg rounded-xl w-80 p-4 z-40">
    <div class="overflow-y-auto h-64 mb-4 border p-2 rounded">
      <div v-for="(msg, index) in messages" :key="index" class="mb-2">
        <div :class="msg.sender === 'user' ? 'text-right' : 'text-left'">
          <span
            :class="msg.sender === 'user' ? 'bg-blue-200' : 'bg-green-200'"
            class="inline-block p-2 rounded"
          >
            {{ msg.text }}
          </span>
        </div>
      </div>
    </div>
    <div class="flex">
      <input
        v-model="userMessage"
        @keyup.enter="sendMessage"
        class="border rounded w-full p-2 mr-2"
        placeholder="Scrie un mesaj..."
      />
      <button @click="sendMessage" class="bg-blue-500 text-white px-4 py-2 rounded">Trimite</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const isOpen = ref(false); // 👈 Adăugat

const messages = ref([]);
const userMessage = ref("");

// Identificator unic pentru utilizator
const userId = ref(sessionStorage.getItem("userId") || generateUserId());

// Dacă nu avem un userId, îl generăm și-l stocăm în sessionStorage
if (!sessionStorage.getItem("userId")) {
  sessionStorage.setItem("userId", userId.value);
}

function generateUserId() {
  return "user-" + Math.random().toString(36).substr(2, 9); // Generează un ID unic pentru utilizator
}

function toggleChat() {
  isOpen.value = !isOpen.value;
}

function addMessage(text, sender) {
  messages.value.push({ text, sender });
  sessionStorage.setItem("messages", JSON.stringify(messages.value)); // Salvează mesajele curente
}

async function sendMessage() {
  if (!userMessage.value.trim()) return;

  const text = userMessage.value;
  addMessage(text, "user");

  try {
    await axios.post("http://localhost:3000/api/chat", {
      message: text,
      userId: userId.value, // Trimite și userId pentru a-l asocia cu răspunsul
    });
    userMessage.value = "";
  } catch (err) {
    addMessage("Eroare la trimitere", "bot");
  }
}

// Polling pentru a obține mesaje noi de la bot
onMounted(() => {
  setInterval(async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/messages/${userId.value}`);
      res.data.forEach(msg => {
        if (!messages.value.some(m => m.id === msg.id)) {
          messages.value.push({ text: msg.text, sender: "bot", id: msg.id });
        }
      });
    } catch (err) {
      console.error("Eroare la preluarea mesajelor:", err.message);
    }
  }, 3000);
});
</script>
