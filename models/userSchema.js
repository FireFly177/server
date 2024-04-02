import mongoose from "mongoose";
const {Schema} = mongoose;

// result model
const userModel = new Schema({
    username: {type: String},
    password: {type: String},
    role: {type: String, default: 'user'},
    createdAt: {type: Date, default: Date.now}
});

export default mongoose.model('user', userModel);