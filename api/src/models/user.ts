import mongoose from "mongoose";

const UserSchema: mongoose.Schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    passwordHash: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: false,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model("User", UserSchema);