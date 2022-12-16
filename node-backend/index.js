import express from 'express'
import userRoutes from './routes/user.js'
import memoryRoutes from './routes/memories.js'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
dotenv.config()


const app = express()

app.use(cors())
app.use(express.json())
app.use('/api',userRoutes)
app.use('/api',memoryRoutes)

mongoose.connect(process.env.MONGO_URL,() => {
    console.log("connected to database")
})

app.listen(8800, () => {
    console.log('listening port 8800')
})