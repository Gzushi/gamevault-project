import mongoose, { mongo } from 'mongoose'

const criticSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, //createdAt, updatedAt section here sir
  }
)

const Critic = mongoose.model('Critic', criticSchema)

export default Critic
