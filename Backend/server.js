import express from 'express'
import mongooseConnect from './config/db.js'
const app=express()
import cors from 'cors'

import dotenv from 'dotenv'
import productRoutes from './Routes/productRoutes.js'
dotenv.config()
mongooseConnect()
app.use(cors())
app.use('/api/products',productRoutes)
app.get('/',(req,res)=>{
    res.send('Api is running...')
})

const PORT = process.env.PORT || 4000
app.listen(PORT  ,console.log(`Server running in ${process.env.NODE_ENV } mode on port ${PORT}`))