<template>
  <div>
    <Header text="Carrier" />
    <h1>Admin panel</h1>
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
