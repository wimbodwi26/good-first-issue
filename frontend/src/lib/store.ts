// lib/store.ts

export const STORAGE_KEYS = {
    personalization: "goodfirstissues_settings",
  } as const;
  
  export interface PersonalizationSettings {
    issuesPerPage: number;
  
  }
  
  export function getPersonalization(): PersonalizationSettings | null {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.personalization);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  }
  
  export function setPersonalization(settings: PersonalizationSettings): void {
    localStorage.setItem(
      STORAGE_KEYS.personalization,
      JSON.stringify(settings)
    );
  }
  