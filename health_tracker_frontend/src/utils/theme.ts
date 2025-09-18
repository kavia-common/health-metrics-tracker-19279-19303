 // PUBLIC_INTERFACE
export function applyOceanProfessionalTheme(): void {
  /** Applies dynamic document styles if needed; currently relies on CSS variables in base.css. */
  document.documentElement.style.setProperty('--section-gap', '120px')
}

// PUBLIC_INTERFACE
export function setDocumentTitle(suffix?: string): void {
  /** Set document title following app prefix. */
  const base = 'Health Tracker'
  document.title = suffix ? `${base} · ${suffix}` : base
}
