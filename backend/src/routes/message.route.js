import express from "express"

const router = express.Router()


router.get("/send", (req,res)=>{
    res.send("<h1>message</h1>")
})

export default router