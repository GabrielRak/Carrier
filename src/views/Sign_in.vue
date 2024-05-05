<template>
  <AuthOrnaments />
  <div
    class="text-center h-screen flex flex-col justify-center items-center w-screen"
  >
    <h3 class="text-xl font-bold md:text-3xl lg:text-5xl">Carriers</h3>
    <p class="text-lg md:text-xl lg:text-2xl">Sign in to your account</p>
    <form @submit.prevent="doSignIn">
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
      <button
        type="submit"
        class="text-white text-lg bg-emerald-500 rounded-2xl w-56 px-4 py-2 font-md"
      >
        Sign In
      </button>
      <p class="text-red-500">{{ error }}</p>
    </form>
<br>
    <button
        type="click"
        class="text-white text-lg bg-emerald-500 rounded-2xl w-56 px-4 py-2 font-md"
        @click="signInGoogle">
        Sign In with Google
    </button>
<br>


    <div class="fixed bottom-6 sm:relative mt-10 z-10 text-center">
      <span class="text-lg text-white sm:text-black"
        >Already have an account?</span
      ><br />
      <RouterLink to="/register"
        ><span class="font-bold color-dark ml-4 sm:text-green"
          >Sign up</span
        ></RouterLink
      >
    </div>
  </div>
</template>
<script>
import { computed, ref } from "vue";
import { RouterLink } from "vue-router";
import { useStore } from "vuex";
import AuthOrnaments from "../components/AuthOrnaments.vue";
import StyledInput from "../components/StyledInput.vue";
export default {
  components: {
    AuthOrnaments,
    StyledInput,
  },
  setup() {
    const email = ref("");
    const password = ref("");
    const store = useStore();
    const doSignIn = () => {
      store.dispatch("auth/login", {
        email: email.value,
        password: password.value,
      });
    };

    const signInGoogle = () => {
      store.dispatch("auth/loginGoogle");
    };

    const error = computed(() => store.state.auth.authError);

    return { email, password, doSignIn, signInGoogle, error };
  },
};
</script>
