<template>
  <div>
    <form>
      <email-form v-model="emailString"/>
      <password-form v-model="passwordString"/>
    </form>
  </div>
</template>

<script>
import EmailForm from "@/components/EmailForm.vue"
import PasswordForm from "@/components/PasswordForm.vue"
export default {
  name: 'Login',
  components: { EmailForm, PasswordForm },
  data() {
    return {
      emailString: '',
      passwordString: '',
    }
  }
}
</script>

<style>

</style>