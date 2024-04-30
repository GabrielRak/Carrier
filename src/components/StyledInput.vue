<template>
  <div>
    <input
      :class="computedClass"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="handleInput"
      class="bg-gray-300 text-center w-56 rounded-2xl px-4 py-2 text-sm mb-6"
    />
  </div>
</template>

<script>
export default {
  name: "StyledInput",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    variant: {
      type: String,
      default: "default",
    },
  },
  methods: {
    handleInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
