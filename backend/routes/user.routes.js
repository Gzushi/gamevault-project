import express from "express";
import {
    loginUser,
    signupUser,
    addGameToUser,
    getAddedGames,
} from "../controllers/user.controller.js";
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();

router.post("/login", loginUser);

router.post("/signup", signupUser);

router.post("/addGame", requireAuth, addGameToUser);

router.post("/:userId/addedGames", requireAuth, getAddedGames);

export default router;
