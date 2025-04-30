<template>
  <div class="fixed bottom-4 right-4 z-50">
    <button
      class="bg-amber-300 hover:bg-amber-500 text-white p-5 rounded-full shadow-lg"
      @click="toggleChat"
    >
      <span v-if="!isOpen"><i class="bi bi-chat-dots-fill"></i></span>
      <span v-else><i class="bi bi-x-circle text-red-700"></i></span>
    </button>
  </div>

  <div v-if="isOpen" class="fixed bottom-20 right-4 bg-white shadow-lg rounded-xl w-80 p-4 z-40">
    <div class="overflow-y-auto h-64 mb-4 border p-2 rounded">
      <div v-for="(msg, index) in messages" :key="index" class="mb-2">
        <div :class="msg.sender === 'user' ? 'text-right' : 'text-left'">
          <span
            :class="msg.sender === 'user' ? 'bg-amber-500' : 'bg-amber-200'"
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
        :placeholder="$t('chatPlaceholder')"
      />
      <button @click="sendMessage" class="bg-amber-500 text-white px-4 py-2 rounded">
        {{ $t("chatSendButton") }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const isOpen = ref(false);
const messages = ref([]);
const userMessage = ref("");
const userId = localStorage.getItem("chatUserId") || crypto.randomUUID();

localStorage.setItem("chatUserId", userId);

function toggleChat() {
  isOpen.value = !isOpen.value;
}

function addMessage(text, sender) {
  messages.value.push({ text, sender });
}

async function sendMessage() {
  if (!userMessage.value.trim()) return;

  const text = userMessage.value;
  addMessage(text, "user");

  try {
    await axios.post("http://localhost:3000/api/chat", {
      message: text,
      userId,
    });
    userMessage.value = "";
  } catch (err) {
    addMessage("Sikertelen küldés", "bot");
  }
}

// 🔁 Polling pentru mesaje noi
onMounted(() => {
  setInterval(async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/messages", {
        params: { userId }, // ✅ Trimitem userId corect aici
      });

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
