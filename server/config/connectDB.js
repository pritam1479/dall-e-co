import mongoose from "mongoose";

const connectDB = () => {
    mongoose.set('strictQuery', true);
    try {
        mongoose.connect(process.env.MONGODB_URI, {
          useUnifiedTopology: true,
          useNewUrlParser: true 
        }).then(console.log('Connected to the Database'))
    } catch (error) {
        console.log(error);
    }
}

export default connectDB