<template>
  <div>
    <button @click="this.increment">
      +
    </button>
    <button @click="this.decrement">
      -
    </button>
    <div>{{ count }}</div>
    <h2>Counter</h2>
    <Counter />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import Counter from './components/Counter.vue';
export default {
  components: {
    Counter
  },
  setup: () => {
    const store = useStore();
    return {
      count: computed(() => store.state.count),
      increment: () => store.dispatch('increment'),
      decrement: () => store.dispatch('decrement'),
    };
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
