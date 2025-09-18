import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { WeightEntry } from '@/types/models'
import { listWeights, addWeight } from '@/services/api'

// PUBLIC_INTERFACE
export const useWeightStore = defineStore('weight', () => {
  /** Store for managing weight entries and operations. */
  const items = ref<WeightEntry[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchAll() {
    loading.value = true
    error.value = null
    try {
      items.value = await listWeights()
    } catch (e: unknown) {
      const err = e as { message?: string }
      error.value = err?.message || 'Failed to load weights'
    } finally {
      loading.value = false
    }
  }

  async function add(entry: Omit<WeightEntry, 'id'>) {
    const created = await addWeight(entry)
    items.value = [created, ...items.value]
  }

  return { items, loading, error, fetchAll, add }
})
