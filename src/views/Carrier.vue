<template>
  <div>
    <Header text="Carrier" />
    <div class="text-center">
      <h2>Unlock all the cool features of our app and dive into a journey toward ultimate financial freedom as our freelance courier!</h2>
      <button class="bg-emerald-400 text-white py-2 w-48 my-4">
            Apply now
      </button>
    </div>
    <Navbar />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Header,
    Navbar,
  },
  setup() {
    return { Header, Navbar };
  },
};
</script>
