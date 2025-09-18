<script setup lang="ts">
import { onMounted } from 'vue'
import { useExerciseStore } from '@/stores/exercise'
import ExerciseForm from '@/components/forms/ExerciseForm.vue'

const store = useExerciseStore()
onMounted(() => {
  if (!store.items.length) store.fetchAll()
})

async function onSubmit(payload: { date: string; type: string; durationMin: number; calories?: number; note?: string }) {
  await store.add(payload)
}
</script>

<template>
  <div class="container">
    <ExerciseForm @submit="onSubmit" />

    <div class="card" style="margin-top: var(--gap-lg);">
      <div style="padding: var(--gap-md); border-bottom: 1px solid var(--color-border); display:flex; align-items:center; justify-content:space-between;">
        <div class="section-title">Recent Workouts</div>
      </div>
      <div style="padding: var(--gap-md);">
        <table class="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Duration</th>
              <th>Calories</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="e in store.items" :key="e.id">
              <td>{{ e.date }}</td>
              <td>{{ e.type }}</td>
              <td>{{ e.durationMin }} min</td>
              <td>{{ e.calories ?? '—' }}</td>
              <td>{{ e.note || '—' }}</td>
            </tr>
          </tbody>
        </table>
        <div v-if="store.loading" class="subtle" style="margin-top: 8px;">Loading…</div>
        <div v-if="store.error" class="subtle" style="color: var(--brand-error); margin-top: 8px;">{{ store.error }}</div>
      </div>
    </div>
  </div>
</template>
