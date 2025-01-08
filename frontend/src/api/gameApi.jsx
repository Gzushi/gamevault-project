export const getGameById = async (gameId) => {
    try {
        const response = await fetch(`/api/games/${gameId}`);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to get game");
        }

        const result = await response.json();
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};