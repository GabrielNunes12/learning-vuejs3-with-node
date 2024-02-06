<template>
  <div>
    <label for="password">Password</label>
    <input type="password" placeholder="Password" :value="modelValue" @input="update($event)">
  </div>
</template>

<script>
export default {
  name: 'PasswordForm',
  props: ["modelValue"],
  methods: {
    update($event) {
      this.$emit("update:modelValue", $event.target.value);
    }
  }
}
</script>

<style>

</style>