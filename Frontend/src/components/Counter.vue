<script setup>
  import {ref, onMounted} from 'vue';
  //life-cycle hooks
  onMounted(() => {
    console.log('Component is mounted');
    //API calls
  });
  //methods
  const counter = ref(0);
  const increment = () => {
    counter.value++;
  }
  const decrement = () => {
    counter.value--;
  }
</script>
<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <div>{{ counter }}</div>
  </div>
</template>