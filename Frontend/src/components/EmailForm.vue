<template>
  <div>
    <form>
      <label for="email">Email</label>
      <input type="text" id="email" name="email" :value="modelValue" @input="updateEmail($event)" required>
    </form>
  </div>
</template>

<script>
export default {
  name: "EmailForm",
  props: ["modelValue"],
  methods: {
    updateEmail($event) {
      this.$emit('update:modelValue', $event.target.value);
    }
  }
}
</script>

<style>

</style>