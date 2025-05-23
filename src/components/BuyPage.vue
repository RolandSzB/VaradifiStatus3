<script setup>
import { ref, computed } from "vue";
import axios from "axios";

const formSubmitted = ref(false);

const clientName = ref("");
const clientPhone = ref("");
const clientMail = ref("");
const shirtSize = ref("");
const shirtType = ref(0);

const computedImageUrl = computed(() => {
  const selectedShirt = shirtType.value;
  if (!selectedShirt) return "/src/images/shirts.png"; // Default image

  const optionElement = document.querySelector(`#type option[value="${selectedShirt}"]`);
  const imageData = optionElement?.dataset.image;
  return imageData || "/src/images/shirts.png"; // Fallback if no image data found
});

async function submitForm() {
  // Check if all required fields are filled
  if (
    !clientName.value ||
    !clientPhone.value ||
    !clientMail.value ||
    !shirtSize.value ||
    !shirtType.value
  ) {
    // If any required field is empty, prevent form submission
    return;
  }

  // Proceed with form submission if all fields are filled
  formSubmitted.value = true;
  await axios.post(
    "http://localhost:3000/products",
    {
      name: clientName.value,
      phone: clientPhone.value,
      email: clientMail.value,
      size: shirtSize.value,
      type: shirtType.value,
    },
    { headers: { "Content-Type": "application/json" } }
  );
  clientName.value = "";
  clientPhone.value = "";
  clientMail.value = "";
  shirtSize.value = "";
  shirtType.value = "";
}
</script>

<template>
  <div class="flex flex-col bg-black justify-between items-center px-8 xl:px-60">
    <div class="flex mb-6">
      <p class="text-white text-center text-3xl xl:text-5xl font-bold ms-4 my-8 xl:my-14">
        {{ $t("orderShirt") }}
      </p>
    </div>
    <div class="flex flex-col xl:flex-row justify-between items-center">
      <img
        :src="computedImageUrl"
        alt="Selected Shirt"
        class="w-full h-3/5 xl:w-3/5 xl:h-3/5 mt-10 xl:mt-0 object-cover xl:me-4 justify-start"
      />
      <form @submit.prevent="submitForm" v-if="!formSubmitted">
        <div>
          <label for="name" class="block mb-2 text-sm font-medium text-white">{{
            $t("fullName")
          }}</label>
          <input
            type="text"
            id="name"
            class="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
            :placeholder="$t('placeholderName')"
            v-model="clientName"
            required
          />
        </div>
        <div>
          <label for="phone" class="block mb-2 text-sm font-medium text-white">{{
            $t("phoneNr")
          }}</label>
          <input
            type="tel"
            id="phone"
            class="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
            placeholder="0735 000 000"
            v-model="clientPhone"
            required
            pattern="[0-9]{10}"
          />
        </div>
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-white">Email </label>
          <input
            type="email"
            id="email"
            class="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
            placeholder="email@email.com"
            v-model="clientMail"
            required
          />
        </div>
        <div>
          <label for="size" class="block mb-2 text-sm font-medium text-white">{{
            $t("shirtSize")
          }}</label>
          <select
            id="size"
            class="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
            required
            v-model="shirtSize"
          >
            <option value="" disabled selected>{{ $t("selectSize") }}</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
        <div>
          <label for="type" class="block mb-2 text-sm font-medium text-white">{{
            $t("shirtType")
          }}</label>
          <select
            id="type"
            class="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
            required
            v-model="shirtType"
          >
            <option value="" disabled selected>{{ $t("selectType") }}</option>
            <option :value="$t('simpleShirt')" data-image="/src/images/shirts.png">
              {{ $t("simpleShirt") }}
            </option>
            <option :value="$t('collarShirt')" data-image="/src/images/shirts2.png">
              {{ $t("collarShirt") }}
            </option>
            <option :value="$t('simpleHoodie')" data-image="/src/images/shirts3.png">
              {{ $t("simpleHoodie") }}
            </option>
            <option :value="$t('hoodedHoodie')" data-image="/src/images/shirts4.png">
              {{ $t("hoodedHoodie") }}
            </option>
          </select>
        </div>
        <div class="flex items-start mt-4 mb-6">
          <div class="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{
            $t("termsAndConditions")
          }}</label>
        </div>
        <div class="flex justify-between">
          <button
            type="submit"
            class="text-black-800 hover:text-white bg-amber-100 hover:bg-amber-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {{ $t("placeOrder") }}
          </button>
          <RouterLink
            to="/chart"
            class="hover:underline text-center me-6 text-amber-100 hover:text-amber-700"
          >
            <i class="bi bi-cart-fill">{{ $t("checkCart") }}</i>
          </RouterLink>
        </div>
      </form>
      <div v-else class="py-8 px-2 mx-4 w-full h-full">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-start text-gray-900 dark:text-white"
        >
          {{ $t("thankYouMessage") }}!
        </h2>
        <p class="mb-8 lg:mb-16 font-light text-start text-gray-500 dark:text-gray-400 sm:text-xl">
          {{ $t("confirmOrder") }}
        </p>
        <div>
          <RouterLink to="/chart" class="hover:underline me-6 text-amber-100 hover:text-amber-700">
            <i class="bi bi-cart-fill">{{ $t("checkCart") }}</i>
          </RouterLink>
          <RouterLink to="/" class="hover:underline me-6 text-amber-100 hover:text-amber-700">
            <i class="bi bi-house-fill">{{ $t("backToHome") }} </i>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
