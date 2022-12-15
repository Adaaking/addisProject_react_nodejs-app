import express from 'express'
import userRoutes from './routes/user.js'
import memoryRoutes from './routes/memories.js'
import dotenv from 'dotenv'
dotenv.config()


const app = express()

app.use(express.json())
app.use('/api',userRoutes)
app.use('/api/memories',memoryRoutes)


app.listen(8800, () => {
    console.log('listening port 8800')
})