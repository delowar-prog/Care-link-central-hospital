import mongoose from "mongoose"

export const connectMongoDB=async()=>{
    try {
        await mongoose.connect(process.env.DB_CONNECT_URI);
        console.log('Database connected');
    } catch (error) {
        console.log('Error while connect with database', error);
    }
}