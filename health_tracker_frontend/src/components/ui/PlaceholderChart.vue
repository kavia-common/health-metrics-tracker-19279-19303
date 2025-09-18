<script setup lang="ts">
defineProps<{ title?: string; height?: number }>()
</script>

<template>
  <div class="card chart" :style="{ height: (height || 220) + 'px' }">
    <div class="chart__header">
      <strong>{{ title || 'Chart' }}</strong>
      <span class="subtle">placeholder</span>
    </div>
    <div class="chart__body">
      <div class="bar" v-for="n in 16" :key="n" :style="{ height: (20 + (n % 8) * 10) + 'px' }"></div>
    </div>
  </div>
</template>

<style scoped>
.chart {
  padding: var(--gap-md);
}
.chart__header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: var(--gap-md);
}
.chart__body {
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  align-items: end;
  gap: 8px;
  height: 100%;
}
.bar {
  background: var(--brand-primary-100);
  border: 1px solid var(--color-border);
  border-bottom-color: var(--brand-primary-500);
  border-radius: 6px 6px 0 0;
}
</style>
