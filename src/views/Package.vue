<template>
<div>
    <Header :text="packageDetails.title" />
    <div v-if="!pickup" class="flex flex-col items-center   ">
        <img :src="imageUrl" alt="package image" v-if="imageUrl" class="w-44 h-auto mb-11"/>
        <p><span class="font-semibold">Sender phone number :</span>{{ packageDetails.sender }}</p>
        <p><span class="font-semibold">Receiver phone number : </span>{{ packageDetails.phone_number }}</p>
        <p><span class="font-semibold">Inbox : </span>{{ packageDetails.inbox }}</p>
        <p><span class="font-semibold">Email : </span>{{ packageDetails.email }}</p>
        <p><span class="font-semibold">Title : </span>{{ packageDetails.title }}</p>
        <button @click="pickup = !pickup" class="bg-emerald-400 text-white py-2 w-48 my-4">Collect</button>
    </div>
    <div v-if="pickup">
        <h2>Are you sure you are next to your package?</h2>
        <button @click="collectPackage(packageDetails.sender)" class="bg-emerald-400 text-white py-2 w-48 my-4">Collect</button>
    </div>
    <Navbar />
</div>
</template>

<script>
import Header from "../components/Header.vue";
import Navbar from "../components/Navbar.vue";
import { useStore } from "vuex";
import { computed, onBeforeMount, ref } from "vue";
export default {
    components: {
        Header,
        Navbar,
    },
    props: ["packageId"],
    setup(props) {
        const store = useStore();
        const pickup = ref(false);
        const phone_number = computed(() => store.state.user.phone_number);
        const packageDetails = computed(() => store.state.parcels.package);
        const imageUrl = computed(() => store.state.parcels.imageUrl);
        onBeforeMount(() => {
            store.dispatch("parcels/fetchPackageDetails", {
                phone_number: phone_number.value,
                id: props.packageId,
            });
        });

        const collectPackage = (sender) => {
            store.dispatch("parcels/removePackage", {
                phone_number: phone_number.value,
                id: props.packageId,
                sender: sender,
            });
            navigator.vibrate(200);
            console.log("vibrating")
        };

        return { Header, Navbar, imageUrl, packageDetails, pickup, collectPackage };
    },
};
</script>
