<template>
  <div>
    <Header text="Admin panel" />
    <h2 class="text-center font-bold text-lg mb-2 mt-6">Carrier requests</h2>
        <div v-for="request in requestList">
            <RouterLink :to="{ name: 'request', params: { requestId: request.id } }">
                <div class="bg-gradient-to-r from-green to-light-green mx-6 py-2 px-4 mb-2">
                    <p class="text-white text-lg">{{ request.id }}</p>
                </div>
            </RouterLink>
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

        onBeforeMount(() => {
            store.dispatch("carrier/getCarrierRequests");
            console.log(store.state.carrier.CarrierRequests);
        })

        const requestList = computed(
            () => store.state.carrier.CarrierRequests
        );
        return { requestList };
    },
};
</script>