<template>
  <div>
    <Header />
    <Home />
    <Footer />
  </div>
</template>

<script>
import Home from '@/views/Home.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
export default {
  components: {
    Footer,
    Home,
    Header
  },
  data() {
    return {
    }
  }
}

</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
