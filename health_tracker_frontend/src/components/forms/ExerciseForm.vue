<script setup lang="ts">
import { ref } from 'vue'
const emit = defineEmits<{
  (e: 'submit', payload: { date: string; type: string; durationMin: number; calories?: number; note?: string }): void
}>()

const form = ref({
  date: new Date().toISOString().slice(0,10),
  type: 'Run',
  durationMin: '',
  calories: '',
  note: ''
})

function onSubmit(e: Event) {
  e.preventDefault()
  if (!form.value.durationMin) return
  emit('submit', {
    date: form.value.date,
    type: form.value.type,
    durationMin: Number(form.value.durationMin),
    calories: form.value.calories ? Number(form.value.calories) : undefined,
    note: form.value.note || undefined
  })
  form.value.durationMin = ''
  form.value.calories = ''
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
        <label class="label">Type</label>
        <select class="select" v-model="form.type">
          <option>Run</option>
          <option>Walk</option>
          <option>Bike</option>
          <option>Swim</option>
          <option>Strength</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label class="label">Duration (min)</label>
        <input class="input" type="number" min="0" v-model="form.durationMin" />
      </div>
    </div>
    <div class="form-row cols-3" style="margin-top: var(--gap-md);">
      <div>
        <label class="label">Calories</label>
        <input class="input" type="number" min="0" v-model="form.calories" />
      </div>
      <div class="cols-2" style="grid-column: span 2;">
        <label class="label">Note</label>
        <input class="input" type="text" placeholder="Optional" v-model="form.note" />
      </div>
    </div>
    <div style="margin-top: var(--gap-md); display:flex; justify-content:flex-end;">
      <button class="btn btn-primary" type="submit">Add Workout</button>
    </div>
  </form>
</template>
