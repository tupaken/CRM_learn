<template>
   <div>
      <Header />
      <Nuxt />
   </div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
   comments: {
      Header
   }
}
</script>

<style scoped>
div {
   font-family: sans-serif;
   padding: 20px;
}
</style>