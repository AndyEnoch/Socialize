import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:String,
    password: String,
    email: String,
    createdAt: String
});

const userDetails = mongoose.model('User', userSchema)

export default userDetails;