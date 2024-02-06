<template>
  <div>
    <form>
      <label for="email">Email</label>
      <input 
        type="text" 
        id="email" 
        name="email" 
        :value="modelValue" 
        @input="updateEmail($event)" 
        required
        :class="{
          'is-valid': emailValidator(modelValue),
          'is-not-valid': !emailValidator(modelValue)
        }"
      >
    </form>
  </div>
</template>

<script>
import emailValidator from '../utils/emailValidator.js';
export default {
  name: "EmailForm",
  props: ["modelValue"],
  methods: {
    updateEmail($event) {
      this.$emit('update:modelValue', $event.target.value);
    },
    emailValidator
  }
}
</script>

<style>
.is-not-valid{
  border: 1px solid red;
}
.is-valid{
  border: 1px solid green;
}
</style>