import mongoose, { mongo } from 'mongoose'

const DevSchema = new mongoose.Schema(
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

const Dev = mongoose.model('Dev', DevSchema)

export default Dev
