import mongoose from "mongoose";

const mongoUri = "mongodb+srv://manish_7771:manish_7771@manish.juwiizf.mongodb.net/testApp"

export const  connectDB = async () => {
    console.log("------------------------=-------------------------------",mongoUri);
    
  try {
    await mongoose.connect(mongoUri);
    console.log('💚MongoDB connected successfully!');
  } catch (err) {
    console.error('🩷Failed to connect to MongoDB:', err);
  }
}