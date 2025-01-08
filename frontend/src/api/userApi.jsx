export const addGameToUser = async (gameId, token) => {
    try {
        const response = await fetch("/api/users/addGame", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // Include the token if needed
            },
            body: JSON.stringify({ gameId }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to add game");
        }

        const result = await response.json();
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getAddedGames = async (userId, token) => {
    try {
        const response = await fetch(`/api/users/${userId}/addedGames`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // Include the token if needed
            },
            body: JSON.stringify({ userId }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to get games");
        }

        const result = await response.json()
        return result
    } catch (error) {
        throw new Error(error.message)
    }
}