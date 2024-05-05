<template>
<div>
    <Header :text="packageDetails.title" />
    <div v-if="!pickup">
        <b>Sender phone number :{{ packageDetails.sender }}</b><br />
        <b>Receiver phone number : {{ packageDetails.phone_number }}</b><br />
        <b>Inbox : {{ packageDetails.inbox }}</b><br />
        <b>Email : {{ packageDetails.email }}</b><br />
        <b>Title : {{ packageDetails.title }}</b><br />
        <b v-if="imageUrl">Image : <img :src="imageUrl" alt="package image" /></b><br />
        <button @click="pickup = !pickup">Collect</button>
    </div>
    <div v-if="pickup">
        <h2>Are you sure you are next to your package?</h2>
        <button @click="collectPackage(packageDetails.sender)">Collect</button>
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
