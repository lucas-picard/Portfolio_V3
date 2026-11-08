// Fichier qui gère le store pour la section sélectionnée
// Utilisé pour partager l'état de la section sélectionnée entre les composants de l'application
// 
// ========================================================================


import { create } from 'zustand'

export const useSectionStore = create((set) => ({
  selectedSection: '',
  setSelectedSection: (section) => set({ selectedSection: section }),
}))