<template>
  <div>
    <Header text="Profile" />
    <div v-if="!firstLogin" class="text-center">
      <img src="../assets/Images/user.png" class="w-24 h-24 mx-auto rounded-full" />
      <p>{{ userData.name }} {{ userData.surrname }}</p>
      <p> {{ userData.phone_number }}</p>
      <p> {{ userData.inbox }}</p>
      <button
        class="bg-emerald-400 text-white py-2 w-48 my-4"
        @click="editView = !editView"
      >
        Edit</button
      ><br />
      <button @click="doLogout" class="bg-red-400 text-white py-2 w-48">
        Logout
      </button>
    </div>
    <div v-if="firstLogin" class="text-center">
      <ProfileForm :errorValue="errorValue" @submit="setUser_data" />
    </div>
  </div>
  <Navbar />
</template>
<script>
import { computed, onBeforeMount, ref } from "vue";
import Header from "../components/Header.vue";
import Navbar from "../components/Navbar.vue";
import ProfileForm from "../components/ProfileForm.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  components: {
    Header,
    Navbar,
    ProfileForm,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
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

    const setUser_data = (formData) => {
      store.dispatch("user/setUser_data", { 
        name: formData.name,
        phone_number: formData.phone,
        surrname: formData.surrname,
        inbox: formData.inbox,
        uid: uid.value,
      });
      store.commit("user/setUserData", formData);
      store.commit("user/setForm", false);
      router.push("/profile");
    };

    const doLogout = () => {
      store.dispatch("auth/logout");
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
