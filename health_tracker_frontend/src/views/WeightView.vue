<script setup lang="ts">
import { onMounted } from 'vue'
import { useWeightStore } from '@/stores/weight'
import WeightForm from '@/components/forms/WeightForm.vue'

const store = useWeightStore()
onMounted(() => {
  if (!store.items.length) store.fetchAll()
})

async function onSubmit(payload: { date: string; value: number; note?: string }) {
  await store.add(payload)
}
</script>

<template>
  <div class="container">
    <WeightForm @submit="onSubmit" />

    <div class="card" style="margin-top: var(--gap-lg);">
      <div style="padding: var(--gap-md); border-bottom: 1px solid var(--color-border); display:flex; align-items:center; justify-content:space-between;">
        <div class="section-title">Recent Entries</div>
      </div>
      <div style="padding: var(--gap-md);">
        <table class="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Weight (lb)</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="w in store.items" :key="w.id">
              <td>{{ w.date }}</td>
              <td>{{ w.value }}</td>
              <td>{{ w.note || '—' }}</td>
            </tr>
          </tbody>
        </table>
        <div v-if="store.loading" class="subtle" style="margin-top: 8px;">Loading…</div>
        <div v-if="store.error" class="subtle" style="color: var(--brand-error); margin-top: 8px;">{{ store.error }}</div>
      </div>
    </div>
  </div>
</template>
