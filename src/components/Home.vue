<script></script>
<template>
  <div class="flex relative h-screen w-full">
    <video
      autoplay
      muted
      loop
      playsinline
      class="hidden xl:block object-cover w-full h-full"
    >
      <source src="../images/homeVideo.mp4" type="video/mp4" />
    </video>
    <img
      src="../images/varadifiMobileHome.png"
      alt="Home"
      class="xl:hidden object-cover w-full h-full"
    />
    <div class="absolute inset-0 flex flex-col items-center justify-center">
      <img
        src="../images/varadifiHome.png"
        alt="Logo"
        class="text-focus-in w-52 h-52 xl:w-80 xl:h-80 object-cover"
      />
      <p
        class="scale-up-center text-amber-100 text-center text-5xl xl:text-8xl font-bold tracking-widest uppercase mb-14"
      >
        Itt a helyed!
      </p>
      <p
        class="scale-up-center text-white text-center text-sm xl:text-2xl font-sans tracking-wider mt-8"
      >
        Nagyváradi Baptista Ifjúság
      </p>
    </div>
  </div>
</template>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
