import mongoose from 'mongoose';
const { Schema } = mongoose;


const userSchema = new Schema({
  name:{
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
    default: "user",
  },
  activity: {
    type: Number,
    default: 0
  },
  password: {
    type: String,
    required: true
  },

},{timestamps: true})

export const User = mongoose.model('User', userSchema);
