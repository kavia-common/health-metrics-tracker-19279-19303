import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { WellbeingEntry } from '@/types/models'
import { listWellbeing, addWellbeing } from '@/services/api'

// PUBLIC_INTERFACE
export const useWellbeingStore = defineStore('wellbeing', () => {
  /** Store for managing wellbeing entries and operations. */
  const items = ref<WellbeingEntry[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchAll() {
    loading.value = true
    error.value = null
    try {
      items.value = await listWellbeing()
    } catch (e: unknown) {
      const err = e as { message?: string }
      error.value = err?.message || 'Failed to load wellbeing entries'
    } finally {
      loading.value = false
    }
  }

  async function add(entry: Omit<WellbeingEntry, 'id'>) {
    const created = await addWellbeing(entry)
    items.value = [created, ...items.value]
  }

  return { items, loading, error, fetchAll, add }
})
