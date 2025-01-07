import express from 'express'
import {
  getGames,
  createGames,
  updateGames,
  deleteGames,
  getGamesById,
} from '../controllers/games.controller.js'

const router = express.Router()

router.get('/', getGames)

router.post('/', createGames)

router.put('/:id', updateGames)

router.delete('/:id', deleteGames)

router.get('/:id', getGamesById)

export default router
