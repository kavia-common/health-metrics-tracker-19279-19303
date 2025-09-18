<script setup lang="ts">
import AppNavbar from '@/components/layout/AppNavbar.vue'
import AppSidebar from '@/components/layout/AppSidebar.vue'
</script>

<template>
  <div id="shell">
    <AppNavbar />
    <div class="layout">
      <AppSidebar />
      <main class="main-content">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
#shell {
  min-height: 100vh;
}
</style>
