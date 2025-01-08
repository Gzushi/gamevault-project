import { create } from "zustand";

export const useUserStore = create((set) => ({
    critic: [],
    setUser: (critic) => set({ critic }),
    createUser: async (newUser) => {
        if (!newUser.username || !newUser.password || !newUser.email) {
            return { success: false, message: "Please fill in all fields." };
        }

        const res = await fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newUser),
        });
        const data = await res.json();
        set((state) => ({ critic: [...state.critic, data.data] }));
        return { success: true, message: "Account recorded" };
    },
    fetchAllUser: async () => {
        const res = await fetch("/api/users");
        const data = await res.json();
        set({ critic: data.data });
    },
    fetchUserById: async (id) => {
        const res = await fetch(`/api/users/${id}`);
        const data = await res.json();
        // set({ game: data.data });
        return data.data;
    },
    fetchDataForUser: async (id, data) => {
        const res = await fetch(`/api/users/${id}/${data}`);
        const json = await res.json();
        return json.data;
    },
}));
