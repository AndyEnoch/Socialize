import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    body: String,
    username: String,
    createdAt: String,
    comments: [
        {
            body: String,
            username: String,
            createdAt: String
        }
    ],
    likes: [
        {
            username: String,
            createdAt: String
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
})

const Postmessage = mongoose.model('Post', postSchema)

export default Postmessage;