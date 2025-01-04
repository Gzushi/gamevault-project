import { create } from 'zustand'

export const useGamesStore = create((set) => ({
  games: [],
  setGames: (games) => set({ games }),
  createGame: async (newGame) => {
    if (
      !newGame.title ||
      !newGame.price ||
      !newGame.genre ||
      !newGame.desc ||
      !newGame.releaseDate ||
      !newGame.externalLink ||
      !newGame.developer ||
      !newGame.systemRequire ||
      !newGame.image
    ) {
      return { success: false, message: 'Please fill in all fields.' }
    }

    try {
      const res = await fetch('/api/games', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newGame),
      })

      if (!res.ok) {
        const errorData = await res.json()
        return { success: false, message: errorData.message || 'Server Error' }
      }

      const data = await res.json()
      set((state) => ({ games: [...state.games, data.data] }))
      return { success: true, message: 'Game added successfully' }
    } catch (error) {
      console.error('Error adding game:', error)
      return { success: false, message: 'Server Error' }
    }
  },
}))
