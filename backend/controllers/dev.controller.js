import mongoose from 'mongoose'
import Dev from '../models/Dev.model.js'

export const getDev = async (req, res) => {
  try {
    const Dev = await Dev.find({})
    res.status(200).json({ success: true, data: Dev })
  } catch (error) {
    console.log('error in fetching accounts: ', error.message)
    res.status(500).json({ success: false, message: 'Server Error' })
  }
}

export const createDev = async (req, res) => {
  const Dev = req.body //user send data
  if (!Dev.username || !Dev.email || !Dev.password) {
    return res
      .status(400)
      .json({ success: false, message: 'Please provide all fields' })
  }

  const newDev = new Dev(Dev)
  try {
    await newDev.save()
    res.status(201).json({ success: true, data: newDev })
  } catch (error) {
    console.error('Error in Create account:', error.message)
    res.status(500).json({ success: false, message: 'Server Error' })
  }
}

export const updateDev = async (req, res) => {
  const { id } = req.params
  const Dev = req.body

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: 'Account Not Found' })
  }

  try {
    const updatedDev = await Dev.findByIdAndUpdate(id, Dev, {
      new: true,
    })
    res.status(200).json({ success: true, data: updatedDev })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error ' })
  }
}

export const deleteDev = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: 'Account Not Found' })
  }

  try {
    await Dev.findByIdAndDelete(id)
    res.status(200).json({ success: true, message: 'Account Deleted' })
  } catch (error) {
    console.log('error in deleting account: ', error.message)
    res.status(500).json({ success: false, message: 'Server Error' })
  }
}

export const authDev = async (req, res) => {
  const { username, password } = req.params
  console.log(username, password)
  try {
    const user = await Dev.findOne({ username })
    const pass = await Dev.findOne({ password })
    console.log(user, pass)

    if (!user && !pass) {
      return res
        .status(404)
        .json({ success: false, message: 'Account Not Found' })
    } else if (user && pass) {
      return res.status(200).json({
        success: true,
        data: [user.username, pass.password],
        message: 'Account Found',
      })
    } else {
      return res
        .status(404)
        .json({ success: false, message: 'Account Not Found' })
    }
  } catch (error) {
    console.log('error in fetching account: ', error.message)
    res.status(500).json({ success: false, message: 'Server Error' })
  }
}
