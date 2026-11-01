// Fichier qui gère le store pour la section sélectionnée
// 
// ========================================================================


import { create } from 'zustand'

export const useSectionStore = create((set) => ({
  selectedSection: '',
  setSelectedSection: (section) => set({ selectedSection: section }),
}))