import mongoose from "mongoose";
import User from "../models/user.model.js";

export const signupUser = async (req, res) => {
    const { username, password, email } = req.body;

    try {
        const user = await User.signup(username, password, email);
        res.status(200).json({ username, user });
    } catch (error) {
        res.status(400).json({ error: error.message, else: "this" });
    }
};
