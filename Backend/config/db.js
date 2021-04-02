import mongoose from 'mongoose'

 const mongooseConnect=async()=>{
    try{
        const connection=await mongoose.connect(process.env.MONGODB_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreateIndex:true
        })
        console.log("MongoDB  connected")
    }
    catch(error)
    {
        console.log(error)
    }
}
export default mongooseConnect