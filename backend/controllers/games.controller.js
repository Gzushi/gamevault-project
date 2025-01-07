import mongoose from "mongoose";
import Games from "../models/games.model.js";

export const getGames = async (req, res) => {
    try {
        const games = await Games.find({});
        res.status(200).json({ success: true, data: games });
    } catch (error) {
        console.log("error in fetching products: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const getGamesById = async (req, res) => {
    const { id } = req.params;
    try {
        const games = await Games.findById(id);
        if (!games) {
            return res
                .status(404)
                .json({ success: false, message: "Product Not Found" });
        }
        res.status(200).json({ success: true, data: games });
    } catch (error) {
        console.log("error in fetching product: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// add like, push userID

export const createGames = async (req, res) => {
    const games = req.body; //user send data
    if (
        !games.title ||
        !games.price ||
        !games.genre ||
        !games.desc ||
        !games.releaseDate ||
        !games.externalLink ||
        !games.developer ||
        !games.platform ||
        !games.image
    ) {
        return res
            .status(400)
            .json({ success: false, message: "Please provide all fields" });
    }

    const newGames = new Games(games);
    try {
        await newGames.save();
        res.status(201).json({ success: true, data: newGames });
    } catch (error) {
        console.error("Error in Create product:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const getCommentsForGame = async (req, res) => {
    const { id } = req.params;

    try {
        const comments = await Games.findById(id, "comments");
        res.status(200).json({ success: true, data: comments });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching comments",
        });
    }
};

export const getDevLogsForGame = async (req, res) => {
    const { id } = req.params;

    try {
        const comments = await Games.findById(id, "devLogs");
        res.status(200).json({ success: true, data: comments });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching comments",
        });
    }
};

export const updateGames = async (req, res) => {
    const { id } = req.params;
    const games = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res
            .status(404)
            .json({ success: false, message: "Product Not Found" });
    }

    try {
        const updatedGames = await Games.findByIdAndUpdate(id, games, {
            new: true,
        });
        res.status(200).json({ success: true, data: updatedGames });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error " });
    }
};

export const deleteGames = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res
            .status(404)
            .json({ success: false, message: "Product Not Found" });
    }

    try {
        await Games.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product Deleted" });
    } catch (error) {
        console.log("error in deleting product: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
