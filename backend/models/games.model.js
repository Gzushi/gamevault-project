import mongoose, { mongo } from "mongoose";

const gamesSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        genre: {
            type: [String],
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        releaseDate: {
            type: Number,
            required: true,
        },
        externalLink: {
            type: String,
            required: true,
        },
        developer: {
            type: String,
            required: true,
        },
        platform: {
            type: [String],
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
        gplay1: {
            type: String,
            required: true,
        },
        gplay2: {
            type: String,
            required: true,
        },
        comments: [
            {
                commenterId: {
                    type: mongoose.Schema.Types.ObjectId, // Assuming users are stored in a separate collection
                    ref: "User", // Replace 'User' with the name of your user model
                    required: true,
                },
                commentDate: {
                    type: Date,
                    default: Date.now, // Automatically set to current date
                },
                comment: {
                    type: String,
                    required: true,
                },
            },
        ],
        devLogs: [
            {
                title: {
                    type: String,
                    required: true,
                },
                comment: {
                    type: String,
                    required: true,
                },
                commentDate: {
                    type: Date,
                    default: Date.now, // Automatically set to current date
                },
            },
        ],
    },
    {
        timestamps: true, //createdAt, updatedAt section here sir
    }
);

const Games = mongoose.model("Games", gamesSchema);

export default Games;
