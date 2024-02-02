<script>
export default {
  name: 'Counter',
  props: ["modelValue"],
  methods: {
    handleIncrement() {
      this.$emit('update:modelValue', this.modelValue + 1);
    },
    handleDecrement() {
      this.$emit('update:modelValue', this.modelValue - 1);
    }
  }
}
</script>
<template>
  <div>
    <button @click="handleIncrement">+</button>
    <button @click="handleDecrement">-</button>
    <div>{{ modelValue }}</div>
  </div>
</template>