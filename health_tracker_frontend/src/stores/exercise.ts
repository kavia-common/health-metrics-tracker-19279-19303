import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ExerciseEntry } from '@/types/models'
import { listExercises, addExercise } from '@/services/api'

// PUBLIC_INTERFACE
export const useExerciseStore = defineStore('exercise', () => {
  /** Store for managing exercise entries and operations. */
  const items = ref<ExerciseEntry[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchAll() {
    loading.value = true
    error.value = null
    try {
      items.value = await listExercises()
    } catch (e: unknown) {
      const err = e as { message?: string }
      error.value = err?.message || 'Failed to load exercises'
    } finally {
      loading.value = false
    }
  }

  async function add(entry: Omit<ExerciseEntry, 'id'>) {
    const created = await addExercise(entry)
    items.value = [created, ...items.value]
  }

  return { items, loading, error, fetchAll, add }
})
