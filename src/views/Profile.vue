<template>
  <div>
    <Header text="Profile" />
    <div v-if="!firstLogin">
      <img src="../assets/Images/user.png" class="w-24 h-24 mx-auto" />
      <p>{{ userData.name }} {{ userData.surrname }}</p>
      <p>{{ userData.email }}</p>
      <p>{{ userData.phone_number }}</p>
      <p><b>Inbox</b> : {{ userData.inbox }}</p>
      <button class="bg-emerald-400 text-white" @click="editView = !editView">
        Edit
      </button><br/>
      <button @click="doLogout">Logut</button>
      <Navbar />
    </div>
    <div v-if="firstLogin" class="text-center">
      <h4>Set up your account</h4>
      <form @submit.prevent="setUser_data">
        <div>
          <label for="name" class="font-bold">Name</label><br />
          <input
            type="text"
            id="name"
            class="bg-gray-300 text-center w-56 rounded-2xl px-4 py-2 text-sm mb-6"
            v-model="name"
            placeholder="Name*"
          />
        </div>
        <div>
          <label for="surrname" class="font-bold">surrname</label><br />
          <input
            type="text"
            id="surrname"
            class="bg-gray-300 text-center w-56 rounded-2xl px-4 py-2 text-sm mb-6"
            v-model="surrname"
            placeholder="surrname*"
          />
        </div>
        <div>
          <label for="email" class="font-bold">email</label><br />
          <input
            type="email"
            id="email"
            class="bg-gray-300 text-center w-56 rounded-2xl px-4 py-2 text-sm mb-6"
            v-model="email"
            placeholder="email*"
          />
        </div>
        <div>
          <select
            v-model="inbox"
            class="bg-gray-300 text-center w-56 rounded-2xl px-4 py-2 text-sm mb-6"
          >
            <option v-for="ok in inboxes" :key="ok" :value="ok">
              {{ ok }}
            </option>
          </select>
        </div>
        <div>
          <label for="phone" class="font-bold">phone</label><br />
          <input
            type="text"
            id="phone"
            class="bg-gray-300 text-center w-56 rounded-2xl px-4 py-2 text-sm mb-6"
            v-model="phone"
            placeholder="phone*"
          />
        </div>
        <button
          type="submit"
          class="text-white bg-gradient-to-r from-dark to-light-dark py-2 w-40 mt-4 mb-11"
        >
          Submit
        </button>
        <p class="text-red-700">{{ errorValue }}</p>
      </form>
    </div>
  </div>
</template>
<script>
import { computed, onBeforeMount, ref } from "vue";
import Header from "../components/Header.vue";
import Navbar from "../components/Navbar.vue";
import { useStore } from "vuex";
export default {
  components: {
    Header,
    Navbar,
  },
  setup() {
    const store = useStore();
    const editView = ref();
    const name = ref();
    const surrname = ref();
    const email = ref();
    const inbox = ref();
    const phone = ref();
    const errorValue = ref();
    const uid = computed(() => store.state.auth.uid);

    onBeforeMount(() => {
      store.dispatch("user/getUserData", { uid: uid.value });
      store.dispatch("parcels/fetchInboxes");
    });

    const userData = computed(() => store.state.user);
    const firstLogin = computed(() => store.state.user.form);
    const inboxes = computed(() => store.state.parcels.inboxes);
    const doLogout = () => {
      store.dispatch("auth/logout");
    };

    const setUser_data = () => {
      if (
        phone.value === "" ||
        email.value === "" ||
        inbox.value === "" ||
        name.value === "" ||
        surrname.value === ""
      ) {
        errorValue.value =
          "Make sure you filled all the inputs";
      } else {
        store.dispatch("user/setUser_data", {
          phone_number: phone.value,
          email: email.value,
          inbox: inbox.value,
          name: name.value,
          surrname: surrname.value,
          uid: uid.value,
        });
        store.dispatch("user/setForm", false);
      }
    };

    return {
      userData,
      doLogout,
      editView,
      name,
      surrname,
      email,
      phone,
      inbox,
      setUser_data,
      firstLogin,
      errorValue,
      inboxes,
    };
  },
};
</script>
