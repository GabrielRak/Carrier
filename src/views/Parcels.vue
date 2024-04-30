<template>
  <div>
    <Header text="Parcels" />
    <div class="h-screen overflow-auto">
      <h2 class="text-center font-bold text-lg mb-2 mt-6">Parcles ordered</h2>
      <div v-for="parcel in orderedParcels_list">
        <RouterLink :to="{ name: 'package', params: { packageId: parcel.phone_number  }}">
          <div
          class="bg-gradient-to-r from-green to-light-green mx-6 py-2 px-4 mb-2"
          >
          <p class="text-white text-lg"><b>Inbox:</b>{{ parcel.inbox }}</p>
          <p class="text-white txet-lg"><b>Sender:</b>{{ parcel.phone_number }}</p>
        </div>
      </RouterLink>
      </div>
      <h2 class="text-center font-bold text-lg mb-2 mt-6">Sended Parcels</h2>
      
      <div v-for="parcel in sendedParcels_list" class="h-32 overflow-auto">
        <RouterLink :to="{ name: 'package', params: { packageId: parcel.phone_number }}">
          <div
          class="bg-gradient-to-r from-green to-light-green mx-6 py-2 px-4 mb-2"
          >
          <p class="text-white txet-lg"><b>Receivre:</b>{{ parcel.email }}</p>
          <p class="text-white text-lg"><b>Inbox:</b>{{ parcel.inbox }}</p>
        </div>
      </RouterLink>
      </div>
    </div>
    <Navbar />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Navbar from "../components/Navbar.vue";
import { computed, onBeforeMount } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    Header,
    Navbar,
  },
  setup() {
    const store = useStore();

    const phone_number = computed(() => store.state.user.phone_number);

    onBeforeMount(() => {
      store.dispatch("parcels/getSended_parcels", {
        phone_number: phone_number.value,
      });
      store.dispatch("parcels/getOrdered_parcels", {
        phone_number: phone_number.value,
      });
    });

    const orderedParcels_list = computed(
      () => store.state.parcels.orderedParcels
    );
    const sendedParcels_list = computed(
      () => store.state.parcels.sendedParcels
    );
    return { orderedParcels_list, sendedParcels_list };
  },
};
</script>
