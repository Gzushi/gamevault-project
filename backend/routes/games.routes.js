import express from 'express'
import {
  getGames,
  createGames,
  updateGames,
  deleteGames,
} from '../controllers/games.controller.js'

const router = express.Router()

router.get('/', getGames)

router.post('/', createGames)

router.put('/:id', updateGames)

router.delete('/:id', deleteGames)

export default router
