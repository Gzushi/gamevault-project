import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const createToken = (id) => {
    return jwt.sign({ _id: id }, process.env.SECRET, { expiresIn: "3d" });
};

export const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.login(username, password);
        const token = createToken(user._id);
        res.status(200).json({ username, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const signupUser = async (req, res) => {
    const { username, password, email } = req.body;

    try {
        const user = await User.signup(username, password, email);
        const token = createToken(user._id);
        res.status(200).json({ username, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const addGameToUser = async (req, res) => {
    const userId = req.user._id;
    const { gameId } = req.body;

    if (!gameId) {
        return res
            .status(400)
            .json({ error: "User ID and Game ID are required " + userId });
    }

    try {
        const user = await User.findByIdAndUpdate(
            userId,
            { $addToSet: { addedGames: gameId } }, // Prevent duplicates
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ error: `User not found ${userId}` });
        }

        res.status(200).json({
            message: "Game added successfully",
            addedGames: user.addedGames,
        });
    } catch (error) {
        res.status(500).json({ error: error.message, userId: userId });
    }
};

export const getAddedGames = async (req, res) => {
    const { userId } = req.params;

    if (!userId) {
        return res.status(400).json({ error: "User ID is required" });
    }

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({ addedGames: user.addedGames });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
