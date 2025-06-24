<template>
  <div>
    <h1>Willkommen im Learn-Project</h1>
    <p v-if="error">Health-Check fehlgeschlagen: {{ error.message }}</p>
    <p v-else-if="status">Backend-Status: {{ status }}</p>
    <p v-else>Lade Status…</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { health } from '~/services/api'  // ← Schritt 2: Deine service-Funktion

const status = ref(null)
const error  = ref(null)

onMounted(async () => {
  try {
    const { data } = await health()
    status.value = data.status
  } catch (e) {
    error.value = e
  }
})
</script>
