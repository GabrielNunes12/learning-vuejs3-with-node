<template>
  <section id="footer">
    <div> Gabriel N. </div>
    <div>{{ `Gabriel N. © ${2024} - ${new Date().getFullYear()}` }}</div>
  </section>  
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
#footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>