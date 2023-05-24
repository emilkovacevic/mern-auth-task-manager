import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    profilePicture: {
        type: String,
        default: '',
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    friendList: {
        type: Array,
        default: [],
    },
    workSpaces: {
        type: Array,
        default: [],
    },
    roles: {
        type: Array,
        default: ['user'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model('User', UserSchema);