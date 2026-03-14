import { User } from "../models/user.model.js"
import bcrypt from "bcryptjs"
import { generateToken } from "../utils/token.utils.js"
import { sendWelcomeEmail } from "../email/emailHandler.js"
import "dotenv/config"

export const signup = async (req, res) => {



    try {
        const { fullName, email, password } = req.body

        console.log(fullName, email, password)


        if (!fullName) {
            return res.status(400).json({ "success": false, "message": "Full Name Must Be Required" })
        }

        if (!email) {
            return res.status(400).json({ "success": false, "message": "Email Name Must Be Required" })
        }

        if (!password) {
            return res.status(400).json({ "success": false, "message": "password Name Must Be Required" })
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({ "success": false, "message": "Please enter a valid email" })
        }

        if (password.length < 8) {
            return res.status(400).json({ "success": false, "message": "Password Must be Grater then 8 character" })
        }


        const user = await User.findOne({ email })

        if (user) {
            return res.status(400).json({ "success": false, "message": "Email already exists" })
        }


        const salt = await bcrypt.genSalt(10)

        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            fullName,
            email,
            password: hashedPassword
        })
        if (newUser) {
            generateToken(newUser._id, res)
            await newUser.save()
            res.status(201).json({
                "sucess": true,
                "token": "",
                "data": {

                    id: newUser._id,
                    fullName: newUser.fullName,
                    email: newUser.email,
                    proifle: newUser.profilePhoto
                }
            })


            try {
                console.log("try hua kya hai ")
                console.log(process.env.CLIENT_URL)
                await sendWelcomeEmail(newUser.email, newUser.fullName, process.env.CLIENT_URL)
            } catch (error) {
                console.log("emial sent errro")
            }
        }
        else {
            res.status(400).json({
                "sucess": false,
                "message": "Somthing went wrong"
            })
        }
    } catch (error) {
        console.log("Error in signup controller : ", error)
        res.status(500).json({ sucess: false, message: "Internal server error" })
    }






}