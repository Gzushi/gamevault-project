import { create } from 'zustand'

export const useCriticStore = create((set) => ({
  critic: [],
  setCritic: (critic) => set({ critic }),
  createCritic: async (newCritic) => {
    if (!newCritic.username || !newCritic.password || !newCritic.email) {
      return { success: false, message: 'Please fill in all fields.' }
    }

    const res = await fetch('/api/critics', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newCritic),
    })
    const data = await res.json()
    set((state) => ({ critic: [...state.critic, data.data] }))
    return { success: true, message: 'Account recorded' }
  },
  fetchCritic: async () => {
    const res = await fetch('/api/critics')
    const data = await res.json()
    set({ critic: data.data })
  },
}))
