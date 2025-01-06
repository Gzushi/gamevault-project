import express from 'express'
import {
  getDev,
  createDev,
  updateDev,
  deleteDev,
  authDev,
} from '../controllers/dev.controller.js'

const router = express.Router()

router.get('/', getDev)

router.post('/', createDev)

router.put('/:id', updateDev)

router.delete('/:id', deleteDev)

router.get('/:username/:password', authDev)

export default router
