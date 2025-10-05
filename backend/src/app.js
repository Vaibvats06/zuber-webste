import express from 'express'
const app=express();
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();
import userRoutes from './routes/user.routes.js'
import productRoutes from './routes/product.routes.js'

app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true,
}))
app.use(express.json())
app.use('/api/user',userRoutes)
app.use('/api/product',productRoutes)




export default app;