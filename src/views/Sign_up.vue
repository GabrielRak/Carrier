<template>
  <div>
    <div class="absolute top-0 w-screen lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        fill="none"
        viewBox="0 0 375 153"
      >
        <path
          fill="url(#a)"
          fill-rule="evenodd"
          d="m0 67.5 16 3c15 3 47 9 78 9s62-6 94 6c31 10.5 62 39 93 52.5 32 15 63 15 78 15h16V0H0v67.5Z"
          clip-rule="evenodd"
        />
        <defs>
          <linearGradient
            id="a"
            x1="0"
            x2="375"
            y1="76.5"
            y2="76.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#10FF71" />
            <stop offset="1" stop-color="#52E08C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div class="container text-center h-screen flex flex-col justify-center">
      <h3 class="text-xl font-bold">Carriers</h3>
      <p class="text-lg">Register your account</p>
      <form @submit.prevent="doSignUp">
        <div>
          <input
            type="email"
            id="email"
            class="bg-gray-300 px-4 py-2 rounded-2xl w-56 mt-6 mb-4"
            v-model="email"
            placeholder="gabriellbazejrak@gmail.com*"
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            v-model="password"
            class="bg-gray-300 px-4 py-2 w-56 rounded-2xl mb-4"
            placeholder="*********"
          />
        </div>
        <div>
          <input
            type="password"
            id="r_password"
            v-model="r_password"
            class="bg-gray-300 px-4 py-2 w-56 rounded-2xl mb-6"
            placeholder="*********"
          />
        </div>
        <button
          type="submit"
          class="text-white text-lg bg-emerald-500 rounded-2xl w-56 px-4 py-2 font-md"
        >
          Sign In
        </button>
        <p>{{ error }}</p>
      </form>
      <div class="fixed bottom-0 z-10 flex mb-6 ml-6 align-center">
        <span class="text-lg text-white">Already have an account?</span><br />
        <RouterLink to="/login"
          ><span class="font-bold color-dark ml-4">Sign in</span></RouterLink
        >
      </div>
    </div>
    <div class="w-screen absolute bottom-0 lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        fill="none"
        viewBox="0 0 375 178"
      >
        <path
          fill="url(#a)"
          fill-rule="evenodd"
          d="m375 99.47-16-3.49c-15-3.49-47-10.47-78-10.47s-62 6.98-94-6.98c-31-12.216-62-45.373-93-61.079C62 0 31 0 16 0H0v178h375V99.47Z"
          clip-rule="evenodd"
        />
        <defs>
          <linearGradient
            id="a"
            x1="375"
            x2="0"
            y1="89"
            y2="89"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#10FF71" />
            <stop offset="1" stop-color="#52E08C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
</template>
<script>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const r_password = ref("");
    const store = useStore();

    const doSignUp = () => {
      store.dispatch("auth/register", {
        email: email.value,
        password: password.value,
      });
    };

    const error = computed(() => store.state.auth.authError);

    return { email, password, r_password, doSignUp, error };
  },
};
</script>

