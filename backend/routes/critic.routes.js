import express from 'express'
import {
  getCritic,
  createCritic,
  updateCritic,
  deleteCritic,
  authCritic,
} from '../controllers/critic.controller.js'

const router = express.Router()

router.get('/', getCritic)

router.post('/', createCritic)

router.put('/:id', updateCritic)

router.delete('/:id', deleteCritic)

router.get('/:username/:password', authCritic)

export default router
