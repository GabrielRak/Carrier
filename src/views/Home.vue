<script>
import { RouterLink } from "vue-router";
</script>

<template>
<div class="bg-gradient-to-r from-green to-light-green h-screen flex flex-col justify-center">
    <h1 class="text-white text-4xl font-bold text-center">Carriers</h1>
    <h3 class="text-2xl font-semibold text-white px-11">
        Quick & Easy
        <span class="colored text-dark font-bold">Delivery Services</span> Done
        with love to climate
    </h3>
    <div class="text-center flex flex-col">
        <RouterLink to="/login"><button class="text-white bg-gradient-to-r from-dark to-light-dark py-2 w-40 mt-4 mb-11">
                Join us now
            </button></RouterLink>
        <RouterLink to="/about"><span class="underline underline-offset-8 text-white">Read more</span></RouterLink>
    </div>
</div>
</template>
