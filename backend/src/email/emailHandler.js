import { resendClient } from "../utils/resend.js"
import emailTemplets from "./emailTemplets.js"

export const sendWelcomeEmail = async (email, name, clientURL) => {

    try {

        console.log("function Call hui hai", email, name, clientURL)

        const { data, error } = await resendClient.emails.send({
            from: "My App <onboarding@resend.dev>",
            to: email,
            subject: "Welcome to My App",
            html: emailTemplets(name, clientURL)
        })

        if (error) {
            console.log("error sending welcome email:", error)
            return
        }

        console.log("welcome email sent", data)

    } catch (err) {
        console.log("sendWelcomeEmail error:", err)
    }
}