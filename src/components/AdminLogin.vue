<script setup>
import { ref } from "vue";
import axios from "axios";

const email = ref("");
const password = ref("");
const error = ref("");
const emit = defineEmits(["login-success"]);

const login = async () => {
  error.value = "";
  try {
    const res = await axios.post("http://localhost:3000/login", {
      email: email.value,
      password: password.value,
    });

    if (res.data.success) {
      emit("login-success");
    } else {
      error.value = res.data.message || "Login failed.";
    }
  } catch (err) {
    error.value = "Server error. Please try again.";
  }
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-amber-100">
    <div class="bg-amber-200 p-6 rounded shadow-md w-96">
      <h2 class="text-2xl font-bold mb-4 text-center">Admin Login</h2>
      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label class="block mb-2 text-sm font-medium text-black">Email</label>
          <input
            type="email"
            v-model="email"
            required
            class="bg-amber-100 border-2 border-black text-black text-sm rounded-lg block w-full p-2.5"
          />
        </div>
        <div>
          <label class="block mb-2 text-sm font-medium text-black">Password</label>
          <input
            type="password"
            v-model="password"
            required
            class="bg-amber-100 border-2 border-black text-black text-sm rounded-lg block w-full p-2.5"
          />
        </div>
        <div v-if="error" class="text-red-500 text-sm">{{ error }}</div>
        <div class="flex justify-center">
          <button
            type="submit"
            class="heartbeat rounded-2xl border-black bg-black py-2 px-4 my-2 mx-4 hover:bg-amber-100 hover:text-black hover:border-2 text-white text-center text-xl xl:text-2xl font-bold"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
