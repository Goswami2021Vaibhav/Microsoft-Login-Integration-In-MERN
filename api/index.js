import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import AuthRoute from './routes/Auth.route.js'
import cookieParser from 'cookie-parser'

dotenv.config()

const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use('/api/auth', AuthRoute)

mongoose.connect(process.env.MONGODB_CONN)
    .then(() => console.log('Database connected.'))
    .catch(err => console.log('Database connection failed.', err))

app.listen(PORT, () => {
    console.log('Server running on port:', PORT)
})