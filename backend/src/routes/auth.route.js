import express from "express";

const router = express.Router()

router.get("/signup", (req, res) => {
    res.send("<h1>Sign Up API</h1>")
})

router.get("/login", (req, res) => {
    res.send("<h1>Login Api</h1>")
})

router.get("/logout", (req, res) => {
    res.send("<h1>logout api</h1>")
})

export default router