<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { fetchSummary } from '@/services/api'
import PlaceholderChart from '@/components/ui/PlaceholderChart.vue'

const loading = ref(true)
const summary = ref<{ weight: number|null; bmi: number|null; workoutsThisWeek: number; moodAvg: number|null } | null>(null)
const err = ref<string | null>(null)

onMounted(async () => {
  try {
    summary.value = await fetchSummary()
  } catch (e: unknown) {
    const ex = e as { message?: string }
    err.value = ex?.message || 'Failed to load'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="container">
    <div class="cards">
      <div class="card metric">
        <div class="metric__title">Current Weight</div>
        <div class="metric__value" v-if="!loading">{{ summary?.weight ?? '—' }}<span class="unit">lb</span></div>
        <div class="skeleton" v-else></div>
      </div>
      <div class="card metric">
        <div class="metric__title">BMI</div>
        <div class="metric__value" v-if="!loading">{{ summary?.bmi ?? '—' }}</div>
        <div class="skeleton" v-else></div>
      </div>
      <div class="card metric">
        <div class="metric__title">Workouts (7d)</div>
        <div class="metric__value" v-if="!loading">{{ summary?.workoutsThisWeek ?? 0 }}</div>
        <div class="skeleton" v-else></div>
      </div>
      <div class="card metric">
        <div class="metric__title">Avg Mood</div>
        <div class="metric__value" v-if="!loading">{{ summary?.moodAvg ?? '—' }}/10</div>
        <div class="skeleton" v-else></div>
      </div>
    </div>

    <div v-if="err" class="card" style="padding: var(--gap-md); border-left: 3px solid var(--brand-error); margin-top: var(--gap-lg);">
      <strong style="color: var(--brand-error)">Error</strong>
      <div class="subtle">{{ err }}</div>
    </div>

    <div class="grid">
      <PlaceholderChart title="Weight Trend" />
      <PlaceholderChart title="Weekly Workouts" />
      <PlaceholderChart title="Mood vs Sleep" />
    </div>
  </div>
</template>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(4, minmax(0,1fr));
  gap: var(--gap-lg);
  margin-top: var(--gap-lg);
}
@media (max-width: 960px) {
  .cards { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .cards { grid-template-columns: 1fr; }
}

.metric {
  padding: var(--gap-lg);
  border-left: 3px solid var(--brand-primary);
}
.metric__title {
  color: var(--color-text-muted);
  font-size: 0.9rem;
}
.metric__value {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--color-heading);
  margin-top: 8px;
}
.unit {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  margin-left: 4px;
}
.skeleton {
  height: 28px;
  border-radius: 6px;
  background: linear-gradient(90deg, var(--neutral-100), var(--neutral-200), var(--neutral-100));
  background-size: 200% 100%;
  animation: pulse 1.2s ease-in-out infinite;
}
@keyframes pulse {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap: var(--gap-lg);
  margin-top: var(--gap-lg);
}
@media (max-width: 960px) {
  .grid { grid-template-columns: 1fr; }
}
</style>
