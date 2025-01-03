import mongoose from 'mongoose'
import Critic from '../models/critic.model.js'

export const getCritic = async (req, res) => {
  try {
    const critic = await Critic.find({})
    res.status(200).json({ success: true, data: critic })
  } catch (error) {
    console.log('error in fetching products: ', error.message)
    res.status(500).json({ success: false, message: 'Server Error' })
  }
}

export const createCritic = async (req, res) => {
  const critic = req.body //user send data
  if (!critic.username || !critic.email || !critic.password) {
    return res
      .status(400)
      .json({ success: false, message: 'Please provide all fields' })
  }

  const newCritic = new Critic(critic)
  try {
    await newCritic.save()
    res.status(201).json({ success: true, data: newCritic })
  } catch (error) {
    console.error('Error in Create product:', error.message)
    res.status(500).json({ success: false, message: 'Server Error' })
  }
}

export const updateCritic = async (req, res) => {
  const { id } = req.params
  const critic = req.body

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: 'Product Not Found' })
  }

  try {
    const updatedCritic = await Critic.findByIdAndUpdate(id, critic, {
      new: true,
    })
    res.status(200).json({ success: true, data: updatedCritic })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error ' })
  }
}

export const deleteCritic = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: 'Product Not Found' })
  }

  try {
    await Critic.findByIdAndDelete(id)
    res.status(200).json({ success: true, message: 'Product Deleted' })
  } catch (error) {
    console.log('error in deleting product: ', error.message)
    res.status(500).json({ success: false, message: 'Server Error' })
  }
}

export const authCritic = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: 'Product Not Found' })
  }

  try {
    const critic = await Critic.find(id)
    if (!critic) {
      return res
        .status(400)
        .json({ success: false, message: 'Account not found' })
    } else {
      return res.status(200).json({ success: true, message: 'found account' })
    }
  } catch (error) {
    console.log('error in fetching products: ', error.message)
    res.status(500).json({ success: false, message: 'Server Error' })
  }
}
