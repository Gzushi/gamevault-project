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
  authCritic: async (credentials) => {
    try {
      const res = await fetch('/api/critics/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })

      if (!res.ok) {
        const errorData = await res.json()
        return { success: false, message: errorData.message || 'Server Error' }
      }

      const data = await res.json()
      return { success: true, message: 'Login successful', data }
    } catch (error) {
      console.error('Error logging in:', error)
      return { success: false, message: 'Server Error' }
    }
  },
}))
