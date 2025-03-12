<script setup>
import { ref } from "vue";
import axios from "axios";
import Header from "../components/Header.vue";
import CopyrightPage from "../components/CopyrightPage.vue";

let cartJSON = ref();

async function displayPostAPIWelcome() {
  cartJSON.value = await axios.get("http://localhost:3000/products");
}

async function deleteProduct(productId) {
  const productElement = document.getElementById(productId);
  if (productElement) {
    productElement.remove();
  }

  try {
    await axios.delete("http://localhost:3000/products", {
      headers: { "Content-Type": "application/json" },
      data: { productId },
    });

    console.log(`Product ${productId} deleted successfully`);
  } catch (error) {
    console.error(`Failed to delete product ${productId}:`, error);
  }

  // Refresh the page or update other parts of the UI as needed
  await displayPostAPIWelcome();
}
</script>
<template>
  <Header />
  <hr class="bg-black border-black border" />
  <div class="flex flex-col bg-amber-100 w-full h-full pt-16">
    <div class="flex justify-center items-center">
      <div class="w-full max-w-md p-4 bg-amber-200 border border-black rounded-lg shadow sm:p-8">
        <div class="flex items-center justify-between mb-4">
          <h5 class="text-2xl font-bold leading-none text-gray-900">{{ $t("ordersList") }}</h5>
          <button
            @click="displayPostAPIWelcome"
            type="button"
            class="text-black-800 hover:text-white bg-amber-100 hover:bg-amber-700 font-medium rounded-lg text-sm py-3 ms-6 m-2 w-24 text-center border-black border-2"
          >
            {{ $t("myOrders") }}
          </button>
        </div>

        <div v-for="product in cartJSON?.data" :key="product.name" class="text-black text-3xl">
          <ul role="list" class="divide-y divide-gray-200">
            <li class="py-3 sm:py-4">
              <div class="flex items-center">
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-lg font-bold text-gray-900">
                    {{ product.name }}
                  </p>
                  <p class="text-sm text-gray-500">
                    {{ product.phone }}
                  </p>
                  <p class="text-sm text-gray-500">
                    {{ product.email }}
                  </p>
                </div>
                <div class="flex flex-col items-center">
                  <p class="text-base font-semibold text-gray-900">{{ $t("item") }}</p>
                  <p class="text-base text-gray-900">
                    {{ product.type }}
                  </p>
                  <p class="text-base text-gray-900">
                    {{ product.size }}
                  </p>
                </div>
                <button @click="deleteProduct(product.id)" class="text-red-600 hover:text-red-900">
                  <i class="bi bi-trash-fill"></i>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <CopyrightPage />
</template>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
