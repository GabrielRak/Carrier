<template>
  <div>
    <h3>Prepare for sending your package</h3>
  <form @submit.prevent="submitForm">
    <div>
      <label for="name" class="font-bold">Name</label><br />
      <input
        type="text"
        id="name"
        class="bg-gray-300 text-center w-56 rounded-2xl px-4 py-2 text-sm mb-6"
        v-model="formData.name"
        placeholder="Name*"
      />
    </div>
    <div>
      <label for="surrname" class="font-bold">Surrname</label><br />
      <input
        type="text"
        id="surrname"
        class="bg-gray-300 text-center w-56 rounded-2xl px-4 py-2 text-sm mb-6"
        v-model="formData.surrname"
        placeholder="Surname*"
      />
    </div>
    <div>
      <select
        v-model="formData.inbox"
        class="bg-gray-300 text-center w-56 rounded-2xl px-4 py-2 text-sm mb-6"
      >
        <option v-for="cities in inboxes" :key="cities" :value="cities">
          {{ cities }}
        </option>
      </select>
    </div>
    <div>
      <label for="phone" class="font-bold">Phone</label><br />
      <input
        type="text"
        id="phone"
        class="bg-gray-300 text-center w-56 rounded-2xl px-4 py-2 text-sm mb-6"
        v-model="formData.phone"
        placeholder="Phone*"
      />
    </div>
    <button type="submit">Submit</button>
    <p class="text-red-700">{{ errorValue }}</p>
  </form>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  props: ["errorValue"],
  emits: ["submit", "update:modelValue"],
  setup(props, { emit }) {
    const store = useStore();
    const inboxes = computed(() => store.state.parcels.inboxes);
    const formData = ref({
      name: "",
      surrname: "",
      inbox: "",
      phone: "",
    });

    const submitForm = () => {
      if (!formData.value.name) {
        props.errorValue = "Name is required";
        return;
      }else if(!formData.value.surrname){
        props.errorValue = "Surrname is required"
      }else if(!formData.value.phone){
        props.errorValue = "Phone is required"
      }else if(!formData.value.inbox){
        props.errorValue = "Inbox is required"
      }

      emit("submit", formData.value);
    };

    return {
      formData,
      submitForm,
      inboxes,
    };
  },
};
</script>
