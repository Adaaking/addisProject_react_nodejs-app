import express from 'express'
import {createMemories, deleteMemory, getAllMemories, updateMemory} from '../controllers/memories.js'
const router = express.Router()

router.get('/memories',getAllMemories)
router.post('/create',createMemories)
router.patch('/update/:id',updateMemory)
router.delete('/delete/:id',deleteMemory)

export default router