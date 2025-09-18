<script setup lang="ts">
import { ref } from 'vue'
const emit = defineEmits<{
  (e: 'submit', payload: { date: string; mood: number; sleepHours?: number; stress?: number; note?: string }): void
}>()

const form = ref({
  date: new Date().toISOString().slice(0,10),
  mood: 7,
  sleepHours: '',
  stress: 3,
  note: ''
})

function onSubmit(e: Event) {
  e.preventDefault()
  emit('submit', {
    date: form.value.date,
    mood: Number(form.value.mood),
    sleepHours: form.value.sleepHours ? Number(form.value.sleepHours) : undefined,
    stress: Number(form.value.stress),
    note: form.value.note || undefined
  })
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
        <label class="label">Mood (1-10)</label>
        <input class="input" type="number" min="1" max="10" v-model="form.mood" />
      </div>
      <div>
        <label class="label">Sleep (hrs)</label>
        <input class="input" type="number" step="0.1" min="0" v-model="form.sleepHours" />
      </div>
    </div>
    <div class="form-row cols-3" style="margin-top: var(--gap-md);">
      <div>
        <label class="label">Stress (1-10)</label>
        <input class="input" type="number" min="1" max="10" v-model="form.stress" />
      </div>
      <div style="grid-column: span 2;">
        <label class="label">Note</label>
        <input class="input" type="text" placeholder="Optional" v-model="form.note" />
      </div>
    </div>
    <div style="margin-top: var(--gap-md); display:flex; justify-content:flex-end;">
      <button class="btn btn-primary" type="submit">Log Wellbeing</button>
    </div>
  </form>
</template>
