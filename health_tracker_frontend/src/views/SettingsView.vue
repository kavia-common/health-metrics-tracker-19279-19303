<script setup lang="ts">
import { ref } from 'vue'

const units = ref<'metric' | 'imperial'>('imperial')
const notifications = ref(true)
</script>

<template>
  <div class="container">
    <div class="card" style="padding: var(--gap-lg);">
      <div class="section-title">Preferences</div>
      <div class="form-row cols-2" style="margin-top: var(--gap-lg);">
        <div>
          <label class="label">Units</label>
          <select class="select" v-model="units">
            <option value="imperial">Imperial (lb, mi)</option>
            <option value="metric">Metric (kg, km)</option>
          </select>
        </div>
        <div>
          <label class="label">Notifications</label>
          <select class="select" v-model="notifications">
            <option :value="true">Enabled</option>
            <option :value="false">Disabled</option>
          </select>
        </div>
      </div>
      <div style="margin-top: var(--gap-lg); display:flex; gap: 8px;">
        <button class="btn btn-primary" type="button">Save</button>
        <button class="btn" type="button" style="border-color: var(--color-border);">Reset</button>
      </div>
    </div>

    <div class="card" style="padding: var(--gap-lg); margin-top: var(--gap-lg);">
      <div class="section-title">Data</div>
      <p class="subtle" style="margin-top: 8px;">Import/export coming soon.</p>
    </div>
  </div>
</template>
