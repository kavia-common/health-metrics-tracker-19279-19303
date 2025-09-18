import type { WeightEntry, ExerciseEntry, WellbeingEntry } from '@/types/models'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || ''
const USE_MOCK = (import.meta.env.VITE_USE_MOCK || 'true') === 'true'

function delay(ms = 350) {
  return new Promise((r) => setTimeout(r, ms))
}

// PUBLIC_INTERFACE
export async function fetchSummary(): Promise<{
  weight: number | null
  bmi: number | null
  workoutsThisWeek: number
  moodAvg: number | null
}> {
  /** Returns summary for dashboard cards. When VITE_USE_MOCK=true, returns mock data locally. */
  if (USE_MOCK) {
    await delay()
    return {
      weight: 172.3,
      bmi: 24.1,
      workoutsThisWeek: 3,
      moodAvg: 7.8,
    }
  }
  const res = await fetch(`${BASE_URL}/summary`)
  if (!res.ok) throw new Error('Failed to fetch summary')
  return res.json()
}

// PUBLIC_INTERFACE
export async function listWeights(): Promise<WeightEntry[]> {
  /** List weight entries. */
  if (USE_MOCK) {
    await delay()
    return [
      { id: 'w1', date: new Date().toISOString().slice(0, 10), value: 172.3, note: 'Morning' },
      { id: 'w0', date: new Date(Date.now() - 86400000).toISOString().slice(0, 10), value: 173.0 },
    ]
  }
  const res = await fetch(`${BASE_URL}/weights`)
  if (!res.ok) throw new Error('Failed to fetch weights')
  return res.json()
}

// PUBLIC_INTERFACE
export async function addWeight(entry: Omit<WeightEntry, 'id'>): Promise<WeightEntry> {
  /** Add a weight entry. */
  if (USE_MOCK) {
    await delay()
    return { id: String(Math.random()), ...entry }
  }
  const res = await fetch(`${BASE_URL}/weights`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entry),
  })
  if (!res.ok) throw new Error('Failed to add weight')
  return res.json()
}

// PUBLIC_INTERFACE
export async function listExercises(): Promise<ExerciseEntry[]> {
  /** List exercise entries. */
  if (USE_MOCK) {
    await delay()
    return [
      { id: 'e1', date: new Date().toISOString().slice(0,10), type: 'Run', durationMin: 35, calories: 320 },
      { id: 'e0', date: new Date(Date.now()-86400000).toISOString().slice(0,10), type: 'Bike', durationMin: 50, calories: 420 },
    ]
  }
  const res = await fetch(`${BASE_URL}/exercises`)
  if (!res.ok) throw new Error('Failed to fetch exercises')
  return res.json()
}

// PUBLIC_INTERFACE
export async function addExercise(entry: Omit<ExerciseEntry, 'id'>): Promise<ExerciseEntry> {
  /** Add an exercise entry. */
  if (USE_MOCK) {
    await delay()
    return { id: String(Math.random()), ...entry }
  }
  const res = await fetch(`${BASE_URL}/exercises`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entry),
  })
  if (!res.ok) throw new Error('Failed to add exercise')
  return res.json()
}

// PUBLIC_INTERFACE
export async function listWellbeing(): Promise<WellbeingEntry[]> {
  /** List wellbeing entries. */
  if (USE_MOCK) {
    await delay()
    return [
      { id: 'b1', date: new Date().toISOString().slice(0,10), mood: 8, sleepHours: 7, stress: 3, note: 'Felt productive' },
      { id: 'b0', date: new Date(Date.now()-86400000).toISOString().slice(0,10), mood: 7, sleepHours: 6.5, stress: 4 },
    ]
  }
  const res = await fetch(`${BASE_URL}/wellbeing`)
  if (!res.ok) throw new Error('Failed to fetch wellbeing entries')
  return res.json()
}

// PUBLIC_INTERFACE
export async function addWellbeing(entry: Omit<WellbeingEntry, 'id'>): Promise<WellbeingEntry> {
  /** Add a wellbeing entry. */
  if (USE_MOCK) {
    await delay()
    return { id: String(Math.random()), ...entry }
  }
  const res = await fetch(`${BASE_URL}/wellbeing`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entry),
  })
  if (!res.ok) throw new Error('Failed to add wellbeing')
  return res.json()
}
