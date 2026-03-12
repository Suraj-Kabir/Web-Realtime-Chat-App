import mongoose from "mongoose"

const connectDb = async () => {
    try {
        const res = await mongoose.connect(process.env.MONGODB_URI)
        console.log("MONGO DB CONNECT", res.connection.host)
    } catch (error) {

        console.error("Db Connection error", error)
        process.exit(1)

    }
}

export default connectDb