import mongoose, { mongo } from 'mongoose'

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
      type: String,
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
    systemRequire: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, //createdAt, updatedAt section here sir
  }
)

const Games = mongoose.model('Games', gamesSchema)

export default Games
