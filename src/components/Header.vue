<template>
  <header class="lg:hidden w-full">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 375 70"
    >
      <path
        fill="url(#a)"
        fill-rule="evenodd"
        d="m0 61.765 31-4.804c32-5.49 94-15.785 157-14.412 62 1.373 125 14.412 156 20.588L375 70V0H0v61.765Z"
        clip-rule="evenodd"
      />
      <defs>
        <linearGradient
          id="a"
          x1="0"
          x2="375"
          y1="35"
          y2="35"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#52E08C" />
          <stop offset="1" stop-color="#10FF71" />
        </linearGradient>
      </defs>
    </svg>
    <h1
      class="absolute top-0 mx-auto w-screen text-center text-white mt-2 font-semibold text-lg"
    >
      {{ text }}
    </h1>
  </header>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>
