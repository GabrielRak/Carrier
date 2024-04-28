<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="p-7">
    <h1 class="">About</h1>
    <h3 class="font-bold text-2xl mt-8">
      Who we are <span class="text-green"> ?</span>
    </h3>
    <p class="mt-2 mb-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia
      lacinia erat, ac lobortis ante malesuada eu. Ut mauris odio, congue
      condimentum congue vel, porttitor sed ipsum. Fusce eu tempor enim. Duis
      dignissim, nunc quis pharetra lacinia, felis nisi molestie urna, vitae
      bibendum libero massa eu neque. Praesent condimentum libero massa
    </p>
    <div class="flex flex-col md:flex-row">
      <img src="../assets/Images/eco_friendly.jpg" />
      <img src="../assets/Images/shipping_container.jpg" />
    </div>
    <h3 class="font-bold text-2xl mt-8">
      What is our mission<span class="text-green">?</span>
    </h3>
    <p class="mt-2 mb-6">
      lacinia erat, ac lobortis ante malesuada eu. Ut mauris odio, congue
      condimentum congue vel, porttitor sed ipsum. Fusce eu tempor enim. Duis
      dignissim, nunc quis pharetra lacinia, felis nisi molestie urna, vitae
    </p>
    <ul>
      <li>Do good</li>
      <li>Do better</li>
    </ul>
    <div class="text-center flex flex-col">
      <RouterLink to="/login"
        ><button
          class="text-white bg-gradient-to-r from-dark to-light-dark py-2 w-40 mt-4 mb-11"
        >
          Join us
        </button></RouterLink
      >
    </div>
  </div>
</template>
<style scoped>
li {
  display: flex;
  align-items: center;
  margin: 12px;
}

li::before {
  width: 8px;
  height: 8px;
  margin-right: 11px;
  content: "";
  background-color: #00cf54;
  border-radius: 100%;
}
</style>
