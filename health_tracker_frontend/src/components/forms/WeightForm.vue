<script setup lang="ts">
import { ref } from 'vue'
const emit = defineEmits<{ (e: 'submit', payload: { date: string; value: number; note?: string }): void }>()
const form = ref({ date: new Date().toISOString().slice(0,10), value: '', note: '' })

function onSubmit(e: Event) {
  e.preventDefault()
  if (!form.value.value) return
  emit('submit', { date: form.value.date, value: Number(form.value.value), note: form.value.note || undefined })
  form.value.value = ''
  form.value.note = ''
}
</script>

<template>
  <form class="card" style="padding: var(--gap-md);" @submit="onSubmit">
    <div class="form-row cols-3">
      <div>
        <label class="label">Date</label>
        <input class="input" type="date" v-model="form.date" />
      </div>
      <div>
        <label class="label">Weight (lb)</label>
        <input class="input" type="number" step="0.1" placeholder="e.g. 172.3" v-model="form.value" />
      </div>
      <div>
        <label class="label">Note</label>
        <input class="input" type="text" placeholder="Optional" v-model="form.note" />
      </div>
    </div>
    <div style="margin-top: var(--gap-md); display:flex; justify-content:flex-end;">
      <button class="btn btn-primary" type="submit">Add Entry</button>
    </div>
  </form>
</template>
