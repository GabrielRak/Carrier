<template>
  <div
    class="text-center h-screen flex flex-col justify-center items-center w-screen"
  >
    <AuthOrnaments />
    <h3 class="text-xl font-bold">Carriers</h3>
    <p class="text-lg">Register your account</p>
    <form @submit.prevent="doSignUp">
      <StyledInput
        type="email"
        id="email"
        v-model="email"
        placeholder="gabriellbazejrak@gmail.com*"
      />
      <StyledInput
        type="password"
        id="password"
        v-model="password"
        placeholder="*********"
      />
      <StyledInput
        type="password"
        id="r_password"
        v-model="r_password"
        placeholder="*********"
      />
      <button
        type="submit"
        class="text-white text-lg bg-emerald-500 rounded-2xl w-56 px-4 py-2 font-md"
      >
        Sign In
      </button>
      <p class="text-red-500">{{ error }}</p>
    </form>
    <div class="fixed bottom-6 sm:relative mt-10 z-10 text-center">
      <span class="text-lg text-white sm:text-black"
        >Already have an account?</span
      ><br />
      <RouterLink to="/login"
        ><span class="font-bold color-dark ml-4 sm:text-green"
          >Sign in</span
        ></RouterLink
      >
    </div>
  </div>
</template>
<script>
import AuthOrnaments from "../components/AuthOrnaments.vue";
import StyledInput from "../components/StyledInput.vue";
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import { useStore } from "vuex";
export default {
  components: {
    AuthOrnaments,
    StyledInput,
  },
  setup() {
    const email = ref("");
    const password = ref("");
    const r_password = ref("");
    const store = useStore();

    const doSignUp = () => {
      if (password.value === r_password.value) {
        store.dispatch("auth/register", {
          email: email.value,
          password: password.value,
        });
      } else {
        alert("Passwords are not the same");
      }
    };

    const error = computed(() => store.state.auth.authError);

    return { email, password, r_password, doSignUp, error };
  },
};
</script>
