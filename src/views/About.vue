<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="w-screen">
    <div class="p-4 md:text-center">
      <RouterLink to="/"
        ><h1 class="underline underline-offset-8 font-semibold mb-11">
          Home
        </h1></RouterLink
      >
      <h3 class="font-bold text-2xl mt-8">
        Who we are <span class="text-green font-black"> ?</span>
      </h3>
      <p class="mt-2 mb-6 p-4 w-100 text-center">
        Introducing a versatile platform that revolutionizes local package
        delivery: Our app seamlessly connects senders with freelance couriers in
        their city, offering convenience and flexibility for both parties.
        Senders can easily schedule package pickups, track deliveries in
        real-time, and choose from a pool of trusted couriers based on ratings
        and reviews. Meanwhile, freelance couriers can capitalize on their local
        knowledge and availability to earn income on their own terms. Whether
        it's a document, a parcel, or a last-minute delivery, our app ensures
        swift, reliable, and personalized service for all your local delivery
        needs.
      </p>
      <div class="flex flex-col lg:flex-row mt-6 mb-14 items-center">
        <img
          src="../assets/Images/eco_friendly.jpg"
          class="w-3/4 m-2 lg:w-1/4 h-full"
        />
        <img
          src="../assets/Images/shipping_container.jpg"
          class="w-3/4 lg:w-1/4 h-full"
        />
      </div>
      <h3 class="font-bold text-2xl mt-11">
        What is our mission<span class="text-green font-black">?</span>
      </h3>
      <p class="mt-2 mb-6 p-4">
        Our application aims to revolutionize local package delivery by
        empowering users to send and receive packages conveniently and
        efficiently within their city. By connecting senders with freelance
        couriers, we provide a seamless platform for reliable and personalized
        delivery services.
      </p>
      <ul>
        <li>
          Enable users to schedule package pickups and delivery seamlessly
          thorugh an intuitive and user-friendly design
        </li>
        <li>Faciliate real time tracking of packgaes state</li>
        <li>
          Empoweer freelance couriers to leverage their local knowledge and
          availability to earn income on their own terms
        </li>
        <li>
          Ensure security and privacy of package contents through stringent
          verification measures and encrypted communication channels
        </li>
      </ul>
      <div class="text-center flex flex-col">
        <RouterLink to="/login"
          ><button
            class="text-white bg-gradient-to-r from-green to-light-green py-2 w-40 mt-4 mb-11"
          >
            Join us
          </button></RouterLink
        >
      </div>
    </div>
  </div>
</template>
<style>

</style>
