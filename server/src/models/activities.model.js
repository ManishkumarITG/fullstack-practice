import mongoose from 'mongoose';
const { Schema } = mongoose;

const activitySchema = new Schema({
    Title: {
        type: String,
        required: true
    },
    Value: {
          type: Number,  
          default : 0
    },
    userName: {
        type: String,
        required: true
    }
},{timestamps: true} )


export const activities = mongoose.model('Activities', activitySchema);
