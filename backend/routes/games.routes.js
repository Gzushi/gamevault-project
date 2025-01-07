import express from "express";
import {
    getGames,
    createGames,
    updateGames,
    deleteGames,
    getGamesById,
    getCommentsForGame,
    getDevLogsForGame,
} from "../controllers/games.controller.js";

const router = express.Router();

router.get("/", getGames);

router.post("/", createGames);

router.get("/:id/comments", getCommentsForGame);

router.get("/:id/devLogs", getDevLogsForGame);

router.put("/:id", updateGames);

router.delete("/:id", deleteGames);

router.get("/:id", getGamesById);

export default router;
