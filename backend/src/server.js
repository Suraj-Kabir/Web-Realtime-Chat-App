import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import path from "path"
dotenv.config()

const app = express()

const __dirname = path.resolve()



app.listen(process.env.PORT, () => (console.log(`server is running on port ${process.env.PORT}`)))

// make ready for diployment

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    })
}

app.use("/api/auth", authRoutes)

app.use("/api/message", messageRoutes)