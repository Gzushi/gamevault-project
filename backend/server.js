import express, { response } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import gameRoutes from "./routes/games.routes.js";
import criticRoutes from "./routes/critic.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json()); //allows us to accept JSON data in req.body

app.use("/api/users", userRoutes);

app.use("/api/games", gameRoutes);

app.use("/api/critics", criticRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server started at http://localhost:${PORT} God Bless`);
});
