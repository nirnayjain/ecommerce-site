import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './Data/user.js'
import products from './Data/products.js'
import User from './Model/userModel.js'
import Product from './Model/productModel.js'
import Order from './Model/orderModel.js' 
import  mongooseConnect from './config/db.js'

dotenv.config()
 
mongooseConnect();
  
const importData=async()=>{
    try{
       await Order.deleteMany()
        await Product.deleteMany()
         await User.deleteMany()

       const createdUsers=  await User.insertMany(users)
       const adminUser=createdUsers[0]._id

       const sampleProducts=products.map(product=>{
           return{...product,user:adminUser}
       })
       await Product.insertMany(sampleProducts)
       console.log('Data Imported')
    }
    catch(error)
    {
        console.log(error)
    }
}
const destroyData=async()=>{
    try{
       await Order.deleteMany()
        await Product.deleteMany()
         await User.deleteMany()

      
       console.log('Data destroyed')
       process.exit()
    }
    catch(error)
    {
        console.log(error)
        process.exit(1)
    }
}
if(process.argv[2]=='-d'){
    destroyData()
}
else{
    importData()
}