const mongoose=require("mongoose");
const connectDB=async ()=>{
     try {
       const returnObj=await mongoose.connect(`${process.env.MONGO_URI}`)
      //  console.log(`MongoDB connected!!! dbHost : ${returnObj.connection.host}`);
     }
     catch (e){
        console.log("Error while connected to db ",e);
     }
}
module.exports={connectDB}