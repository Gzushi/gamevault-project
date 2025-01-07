import { create } from "zustand";

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
            !newGame.platform ||
            !newGame.image ||
            !newGame.icon ||
            !newGame.gplay1 ||
            !newGame.gplay2
        ) {
            return { success: false, message: "Please fill in all fields." };
        }

        try {
            const res = await fetch("/api/games", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(newGame),
            });

            if (!res.ok) {
                const errorData = await res.json();
                return {
                    success: false,
                    message: errorData.message || "Server Error",
                };
            }

            const data = await res.json();
            set((state) => ({ games: [...state.games, data.data] }));
            return { success: true, message: "Game added successfully" };
        } catch (error) {
            console.error("Error adding game:", error);
            return { success: false, message: "Server Error" };
        }
    },
    fetchGames: async () => {
        const res = await fetch("/api/games");
        const data = await res.json();
        set({ games: data.data });
    },
    fetchGameById: async (id) => {
        const res = await fetch(`/api/games/${id}`);
        const data = await res.json();
        // set({ game: data.data });
        return data.data;
    },
    fetchDataForGame: async (id, data) => {
        const res = await fetch(`/api/games/${id}/${data}`);
        const json = await res.json();
        return json.data;
    },
}));
