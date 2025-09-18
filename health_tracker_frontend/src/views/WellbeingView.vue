<script setup lang="ts">
import { onMounted } from 'vue'
import { useWellbeingStore } from '@/stores/wellbeing'
import WellbeingForm from '@/components/forms/WellbeingForm.vue'

const store = useWellbeingStore()
onMounted(() => {
  if (!store.items.length) store.fetchAll()
})

async function onSubmit(payload: { date: string; mood: number; sleepHours?: number; stress?: number; note?: string }) {
  await store.add(payload)
}
</script>

<template>
  <div class="container">
    <WellbeingForm @submit="onSubmit" />

    <div class="card" style="margin-top: var(--gap-lg);">
      <div style="padding: var(--gap-md); border-bottom: 1px solid var(--color-border); display:flex; align-items:center; justify-content:space-between;">
        <div class="section-title">Recent Wellbeing</div>
      </div>
      <div style="padding: var(--gap-md);">
        <table class="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Mood</th>
              <th>Sleep</th>
              <th>Stress</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="b in store.items" :key="b.id">
              <td>{{ b.date }}</td>
              <td>{{ b.mood }}/10</td>
              <td>{{ b.sleepHours ?? '—' }}</td>
              <td>{{ b.stress ?? '—' }}</td>
              <td>{{ b.note || '—' }}</td>
            </tr>
          </tbody>
        </table>
        <div v-if="store.loading" class="subtle" style="margin-top: 8px;">Loading…</div>
        <div v-if="store.error" class="subtle" style="color: var(--brand-error); margin-top: 8px;">{{ store.error }}</div>
      </div>
    </div>
  </div>
</template>
