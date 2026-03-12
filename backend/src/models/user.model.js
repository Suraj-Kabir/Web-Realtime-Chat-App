import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    fullName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    profilePhoto: {
        type: String,
        default: ""
    }
}, { timestamps: true })

export const User = mongoose.model("User", userSchema)

