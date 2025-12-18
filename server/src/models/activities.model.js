import mongoose from 'mongoose';
const { Schema } = mongoose;

const activitySchema = new Schema({
    Title: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    }
},{timestamps: true} )


export const activities = mongoose.model('Activities', activitySchema);
