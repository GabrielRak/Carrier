<template>
  <div>
    <Header text="Request" />
    <div class="text-center">
      <p><span class="font-semibold">Sender email:</span> {{ requestDetails.email }}</p
      >
      <p><span class="font-semibold">Message from sender: </span>{{ requestDetails.message }}</p
      >
      <button
        @click="acceptRequest"
        class="bg-emerald-400 text-white py-2 w-48 my-4"
      >
        Approve request</button
      ><br />
      <button @click="denyRequest" class="bg-red-500 text-white py-2 w-48 my-4">
        Deny request
      </button>
    </div>
    <Navbar />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Navbar from "../components/Navbar.vue";
import { useStore } from "vuex";
import { computed, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
export default {
  components: {
    Header,
    Navbar,
  },
  props: ["requestId"],
  setup(props) {
    const router = useRouter();
    const store = useStore();
    const requestDetails = computed(() => store.state.carrier.requestDetails);
    onBeforeMount(() => {
      console.log(props.requestId);
      store.dispatch("carrier/getRequestDetails", {
        id: props.requestId,
      });
    });

    // const collectPackage = (sender) => {
    //     store.dispatch("parcels/removePackage", {
    //         phone_number: phone_number.value,
    //         id: props.packageId,
    //         sender: sender,
    //     });
    //     navigator.vibrate(200);
    //     console.log("vibrating")
    // };

    const acceptRequest = () => {
      store.dispatch("carrier/acceptRequest", {
        id: props.requestId,
        email: requestDetails.value.email,
      });
      navigator.vibrate(200);
      console.log("vibrating");
      router.push("/admin");
      // store.dispatch("carrier/setCarrierRequests");
    };

    const denyRequest = () => {
      store.dispatch("carrier/acceptRequest", {
        id: props.requestId,
        email: requestDetails.value.email,
      });
      navigator.vibrate(200);
      console.log("vibrating");
      router.push("/admin");
    };

    return { Header, Navbar, denyRequest, acceptRequest, requestDetails };
  },
};
</script>
