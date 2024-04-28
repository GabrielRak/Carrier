<template>
  <div>
    <Header text="Send" />
    <form @submit.prevent="sendParcel">
      <div>
        <label for="phone_number" class="font-bold">Phone number</label><br />
        <input
          type="text"
          id="phone_number"
          class="bg-gray-300 text-center w-56 rounded-2xl px-4 py-2 text-sm mb-6"
          v-model="phone_number"
          placeholder="+48 600 600 006"
        />
      </div>
      <div>
        <label for="email" class="font-bold">Email</label><br />
        <input
          type="text"
          id="phone_number"
          class="bg-gray-300 text-center w-56 rounded-2xl px-4 py-2 text-sm mb-6"
          v-model="email"
          placeholder="pieknabiedronka@interia.pl"
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
      <button type="submit" class="text-white bg-emerald-500 px-4 py-2 font-md">
        Send parcel
      </button>
    </form>
    <Navbar />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Navbar from "../components/Navbar.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import { computed, onBeforeMount } from "vue";
export default {
  components: {
    Header,
    Navbar,
  },
  setup() {
    const store = useStore();
    const phone_number = ref("");
    const email = ref("");
    const uid = computed(() => store.state.auth.uid);
    const phone = computed(() => store.state.user.phone_number);
    const inbox = ref("");
    onBeforeMount(() => {
      store.dispatch("parcels/fetchInboxes");
    });
    const inboxes = computed(() => store.state.parcels.inboxes);
    const sendParcel = async () => {
      store.dispatch("parcels/sendParcel", {
        phone_number: phone_number.value,
        inbox: inbox.value,
        email: email.value,
        uid: uid.value,
        phone: phone.value,
      });
    };
    return { sendParcel, store, phone_number, inbox, email, inboxes };
  },
};
</script>
