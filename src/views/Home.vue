<script>
import { RouterLink } from "vue-router";
</script>

<template>
<div class="bg-gradient-to-r from-green to-light-green h-screen flex flex-col justify-center
    lg:text-center">
    <h1 class="text-white text-4xl font-bold text-center lg:text-6xl">Carriers</h1>
    <h3 class="text-2xl font-semibold text-white px-11 lg:text-4xl mt-6 mb-12">
        Quick & Easy
        <span class="colored text-dark font-bold">Delivery Services</span> Done
        with love to climate
    </h3>
    <div class="text-center flex flex-col">
        <RouterLink to="/login"><button class="text-white bg-gradient-to-r from-dark to-light-dark py-2 w-40 mt-4 mb-11 lg:text-2xl lg:py-4 lg:w-60">
                Join us now
            </button></RouterLink>
        <RouterLink to="/about"><span class="underline underline-offset-8 text-white lg:text-3xl">Read more</span></RouterLink>
    </div>
</div>
</template>
