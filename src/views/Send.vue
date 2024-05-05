<template>
  <div class="text-center">
    <Header text="Send" />
    <div class="mt-16">
      <form @submit.prevent="sendParcel">
        <label for="phone_number">Phone number</label>
        <StyledInput
          type="text"
          id="phone_number"
          v-model="phone_number"
          placeholder="+48 600 600 006"
        />
        <label for="email">Email</label>
        <StyledInput
          type="email"
          id="email"
          v-model="email"
          placeholder="pieknabiedronka@interia.pl"
        />
        <label for="title">Title</label>
        <StyledInput
          type="text"
          id="title"
          v-model="title"
          placeholder="Big package*"
        />
        <label for="myImage" class="text-white bg-gray-500 px-4 py-2 font-md">
          Add image
        </label>
        <input type="file" style="display: none;" id="myImage" name="myImage" accept="image/*" @change="imageUpload"/>
        <br><br>
        <button
          type="submit"
          class="text-white bg-emerald-500 px-4 py-2 font-md w-56 rounded-xl"
        >
          Send parcel</button
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
import { computed, onBeforeMount } from "vue";
export default {
  components: {
    Header,
    Navbar,
    StyledInput,
  },



  setup() {
    const store = useStore();
    const phone_number = ref("");
    const email = ref("");
    const file = ref("");
    const title = ref("");
    const uid = computed(() => store.state.auth.uid);
    const phone = computed(() => store.state.user.phone_number);

    const imageUpload = (event) => {
      file.value = event.target.files[0];
    };

    onBeforeMount(() => {
      store.dispatch("parcels/fetchInboxes");
    });
    const inboxes = computed(() => store.state.parcels.inboxes);
    const error = computed(() => store.state.parcels.errorMsg);
    const sendParcel = async () => {
      let objectData = {
        phone_number: phone_number.value,
        email: email.value,
        uid: uid.value,
        title: title.value,
        phone: phone.value,
      };
      console.log(file.value);
      if(file.value) {
        console.log("jestem w ifie")
        objectData = {
          ...objectData,
          image: file.value,
        };
      }
      console.log(objectData);
      store.dispatch("parcels/sendParcel", objectData);
      navigator.vibrate(200);
      console.log("vibrating")}; // is this working - i think it is? 
    return { sendParcel, imageUpload, store, phone_number, email, inboxes, title, error };
  }
};
</script>
