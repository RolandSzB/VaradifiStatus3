<script></script>
<template>
  <div class="flex flex-col bg-amber-100 px-20 xl:px-28 pb-20 justify-center">
    <p class="text-4xl xl:text-5xl font-bold text-center py-10">
      Váradifis tartalmak
    </p>

    <!-- carousel -->
    <div class="flex justify-center items-center">
      <div
        class="carousel relative shadow-2xl bg-white w-full h-full xl:w-3/5 xl:h-auto"
      >
        <div class="carousel-inner relative overflow-hidden w-full h-full">
          <!--Slide 1-->
          <input
            class="carousel-open"
            type="radio"
            id="carousel-1"
            name="carousel"
            aria-hidden="true"
            hidden=""
            checked="checked"
          />
          <div class="carousel-item absolute opacity-0 h-full">
            <a
              href="https://www.youtube.com/@varadifi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                class="block h-full w-full bg-amber-100 text-white text-5xl text-center"
              >
                <img
                  src="../images/titkosBunok.png"
                  alt="Logo"
                  class="xl:w-full xl:h-full xl:mt-0 object-cover xl:me-4"
                />
              </div>
            </a>
          </div>
          <label
            for="carousel-3"
            class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            ><i class="bi bi-chevron-left"></i
          ></label>
          <label
            for="carousel-2"
            class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            ><i class="bi bi-chevron-right"></i
          ></label>

          <!--Slide 2-->
          <input
            class="carousel-open"
            type="radio"
            id="carousel-2"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div class="carousel-item absolute opacity-0 h-full">
            <a
              href="https://www.youtube.com/@varadifi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                class="block h-full w-full bg-amber-100 text-white text-5xl text-center"
              >
                <img
                  src="../images/digiTalizzAllj.png"
                  alt="Logo"
                  class="xl:w-full xl:h-full xl:mt-0 object-cover xl:me-4"
                />
              </div>
            </a>
          </div>
          <label
            for="carousel-1"
            class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            ><i class="bi bi-chevron-left"></i
          ></label>
          <label
            for="carousel-3"
            class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            ><i class="bi bi-chevron-right"></i
          ></label>

          <!--Slide 3-->
          <input
            class="carousel-open"
            type="radio"
            id="carousel-3"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div class="carousel-item absolute opacity-0 h-full">
            <a
              href="https://www.youtube.com/@varadifi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                class="block h-full w-full bg-amber-100 text-white text-5xl text-center"
              >
                <img
                  src="../images/istenHarcosai.png"
                  alt="Logo"
                  class="xl:w-full xl:h-full xl:mt-0 object-cover xl:me-4"
                />
              </div>
            </a>
          </div>
          <label
            for="carousel-2"
            class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            ><i class="bi bi-chevron-left"></i
          ></label>
          <label
            for="carousel-1"
            class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            ><i class="bi bi-chevron-right"></i
          ></label>

          <!-- Indicators for each slide-->
          <ol class="carousel-indicators">
            <li class="inline-block mr-3">
              <label
                for="carousel-1"
                class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
                >•</label
              >
            </li>
            <li class="inline-block mr-3">
              <label
                for="carousel-2"
                class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
                >•</label
              >
            </li>
            <li class="inline-block mr-3">
              <label
                for="carousel-3"
                class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
                >•</label
              >
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
  <div
    class="flex justify-start items-center bg-amber-100 py-4 xl:py-10 ps-10 xl:ps-32"
  >
    <i class="bi bi-instagram text-3xl xl:text-7xl me-4"></i>
    <p class="text-2xl xl:text-6xl font-sans">varadifi</p>
  </div>
</template>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
