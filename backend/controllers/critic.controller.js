import mongoose from 'mongoose'
import Critic from '../models/critic.model.js'

export const getCritic = async (req, res) => {
  try {
    const critic = await Critic.find({})
    res.status(200).json({ success: true, data: critic })
  } catch (error) {
    console.log('error in fetching accounts: ', error.message)
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
    console.error('Error in Create account:', error.message)
    res.status(500).json({ success: false, message: 'Server Error' })
  }
}

export const updateCritic = async (req, res) => {
  const { id } = req.params
  const critic = req.body

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: 'Account Not Found' })
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
      .json({ success: false, message: 'Account Not Found' })
  }

  try {
    await Critic.findByIdAndDelete(id)
    res.status(200).json({ success: true, message: 'Account Deleted' })
  } catch (error) {
    console.log('error in deleting account: ', error.message)
    res.status(500).json({ success: false, message: 'Server Error' })
  }
}

export const authCritic = async (req, res) => {
  const { username, password } = req.params
  console.log(username, password)
  try {
    const user = await Critic.findOne({ username })
    const pass = await Critic.findOne({ password })
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

// export const signUpCritic = async (req, res) => {
//   const { user, pass, email } = req.body //user send data
//   if (!user || !pass || !email) {
//     return res
//       .status(400)
//       .json({ success: false, message: 'Please provide all fields' })
//   }

//   const newCritic = new Critic(user, pass, email)
//   try {
//     await newCritic.save()
//     res.status(201).json({ success: true, data: newCritic })
//   } catch (error) {
//     console.error('Error in Create account:', error.message)
//     res.status(500).json({ success: false, message: 'Server Error' })
//   }
// }
