export interface WeightEntry {
  id: string
  date: string
  value: number
  note?: string
}

export interface ExerciseEntry {
  id: string
  date: string
  type: string
  durationMin: number
  calories?: number
  note?: string
}

export interface WellbeingEntry {
  id: string
  date: string
  mood: number         // 1-10
  sleepHours?: number
  stress?: number      // 1-10
  note?: string
}
