<template>
  <div>
    <form>
      <email-form v-model="emailString"/>
    </form>
    <counter v-model="counter"/>
  </div>
</template>

<script>
import EmailForm from './components/EmailForm.vue';
import Counter from './components/Counter.vue';
export default {
  components: {
    'email-form': EmailForm,
    'counter': Counter
  },
  data() {
    return {
      emailString: '',
      counter: 0
    }
  }
}

</script>
