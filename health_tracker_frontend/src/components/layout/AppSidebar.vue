<script setup lang="ts">
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()
const links = [
  { to: '/dashboard', label: 'Dashboard', icon: '📊' },
  { to: '/weight', label: 'Weight', icon: '⚖️' },
  { to: '/exercise', label: 'Exercise', icon: '🏃' },
  { to: '/wellbeing', label: 'Wellbeing', icon: '😊' },
  { to: '/settings', label: 'Settings', icon: '⚙️' },
  { to: '/about', label: 'About', icon: 'ℹ️' },
]
</script>

<template>
  <aside class="sidebar">
    <nav class="sidebar__nav">
      <RouterLink
        v-for="l in links"
        :key="l.to"
        :to="l.to"
        class="nav-link"
        :class="{ active: route.path.startsWith(l.to) }"
      >
        <span class="icon">{{ l.icon }}</span>
        <span class="label">{{ l.label }}</span>
      </RouterLink>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  padding: var(--gap-lg);
  border-right: 1px solid var(--color-border);
  background: var(--color-surface);
}

.sidebar__nav {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.nav-link {
  display: grid;
  grid-template-columns: 24px 1fr;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: var(--radius-sm);
  color: var(--color-text);
  border: 1px solid transparent;
  transition: all .15s ease;
}
.nav-link:hover {
  background: var(--color-surface-muted);
  border-color: var(--color-border);
}
.nav-link.active {
  background: var(--brand-primary-100);
  color: var(--brand-primary-600);
  border-color: var(--brand-primary-100);
  font-weight: 700;
}
.icon {
  font-size: 16px;
  line-height: 1;
}
</style>
