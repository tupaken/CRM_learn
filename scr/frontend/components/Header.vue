<template>
  <header>
    <h1>🚀 Mein Nuxt-Projekt</h1>
    <nav>
      <NuxtLink to="/">Startseite</NuxtLink>
      |
      <NuxtLink to="/about">Über uns</NuxtLink>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
header {
  background-color: #333;
  color: white;
  padding: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
  margin-right: 10px;
}

nav a:hover {
  text-decoration: underline;
}
</style>
