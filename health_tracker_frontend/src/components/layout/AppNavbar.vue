<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const title = computed(() => (route.meta?.title as string) || 'Dashboard')
</script>

<template>
  <header class="nav">
    <div class="nav__container container">
      <div class="brand">
        <div class="logo">HT</div>
        <div class="brand__text">
          <strong>Health Tracker</strong>
          <span class="brand__sub">Ocean Professional</span>
        </div>
      </div>

      <h1 class="page-title">{{ title }}</h1>

      <div class="actions">
        <a class="btn btn-secondary" href="#feedback" title="Feedback">Feedback</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
}

.nav__container {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: var(--gap-lg);
  align-items: center;
  height: 64px;
}

.brand {
  display: flex;
  gap: 10px;
  align-items: center;
}
.logo {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--accent-gradient);
  display: grid;
  place-items: center;
  color: var(--brand-primary-600);
  font-weight: 800;
  border: 1px solid var(--color-border);
}
.brand__text {
  display: flex;
  flex-direction: column;
  line-height: 1.05;
}
.brand__sub {
  font-size: 11px;
  color: var(--color-text-muted);
}

.page-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--color-heading);
}

.actions {
  display: flex;
  gap: 12px;
  align-items: center;
}
</style>
