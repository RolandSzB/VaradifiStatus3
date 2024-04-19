<script></script>
<template>
  <div class="flex flex-col xl:flex-row bg-black justify-between items-center px-8 xl:px-60">
    <img
      src="../images/shirts.png"
      alt="Logo"
      class="w-full h-3/5 xl:w-3/5 xl:h-3/5 mt-10 xl:mt-0 object-cover xl:me-4"
    />
    <div class="flex flex-col mb-6">
      <p class="text-white text-center text-3xl xl:text-5xl font-bold ms-4 my-8 xl:my-14">
        Rendelj Váradifis pólót
      </p>

      <button
        class="heartbeat rounded-2xl border-amber-100 bg-amber-100 py-2 px-4 my-2 mx-4 xl:mx-40 hover:text-amber-700 text-black text-center text-xl xl:text-2xl font-bold"
      >
        <RouterLink to="/buy">Rendelés </RouterLink>
      </button>
    </div>
  </div>
</template>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
