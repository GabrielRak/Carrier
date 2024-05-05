<template>
  <div class="text-center">
    <Header text="Carrier" />
    <h1>Join our team of carriers!</h1>
    <div class="mt-4">
      <form @submit.prevent="BecomeCarrier">
        <label for="message">Message</label>
        <StyledInput
          type="text"
          id="message"
          v-model="message"
          placeholder="Enter a message to us here"
/>
        <button
          type="submit"
          class="text-white bg-emerald-500 px-4 py-2 font-md"
        >
          Send message</button
        ><br />
        {{ error }}
      </form>
    </div>
    <Navbar />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Navbar from "../components/Navbar.vue";
import StyledInput from "../components/StyledInput.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  components: {
    Header,
    Navbar,
    StyledInput,
  },
  setup() {
    const store = useStore();
    // const phone_number = ref("");
    // const email = ref("");
    // const name = ref("");
    // const surname = ref("");
    const message = ref("");
    const uid = computed(() => store.state.auth.uid);
    const phone_number = computed(() => store.state.user.phone_number);
    const email = computed(() => store.state.user.email);

    const BecomeCarrier = async () => {
      store.dispatch("carrier/becomeCarrierRequest", {
        phone_number: phone_number.value,
        email: email.value,
        uid: uid.value,
        message: message.value,
      });}
    return { BecomeCarrier, Header, Navbar, message };
  },
};
</script>
