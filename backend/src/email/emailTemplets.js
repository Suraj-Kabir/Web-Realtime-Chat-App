

const emailTemplets = ({ name, clientURL }) => {
    return (`   < !DOCTYPE html >
        <html>
            <head>
                <meta charset="UTF-8" />
                <title>Email</title>
            </head>

            <body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial, Helvetica, sans-serif;">

                <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:30px 0;">
                    <tr>
                        <td align="center">

                            <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;">

                                <!-- Header -->
                                <tr>
                                    <td style="background:#4f46e5;color:white;padding:20px;text-align:center;font-size:22px;font-weight:bold;">
                                        ${name}
                                    </td>
                                </tr>

                                <!-- Content -->
                                <tr>
                                    <td style="padding:30px;color:#333;font-size:16px;line-height:1.6;">

                                        <h2 style="margin-top:0;">Hello {{ name }},</h2>

                                        <p>
                                            Thank you for registering with us. Please verify your email address using the OTP below.
                                        </p>

                                        <!-- OTP Box -->
                                        <div style="text-align:center;margin:30px 0;">
                                            <span style="font-size:32px;font-weight:bold;letter-spacing:5px;background:#f3f4f6;padding:15px 25px;border-radius:6px;">
                                                {{ OTP }}
                                            </span>
                                        </div>

                                        <p>
                                            This OTP will expire in <b>10 minutes</b>.
                                        </p>

                                        <p>
                                            If you did not request this email, please ignore it.
                                        </p>

                                        <p style="margin-top:30px;">
                                            Regards,<br />
                                            <b>Your Company Team</b>
                                        </p>

                                    </td>
                                </tr>

                                <!-- Footer -->
                                <tr>
                                    <td style="background:#f9fafb;padding:20px;text-align:center;font-size:12px;color:#777;">
                                        © 2026 Your Company. All rights reserved.
                                    </td>
                                </tr>

                            </table>

                        </td>
                    </tr>
                </table>

            </body>
        </html>
        `

    )
}

export default emailTemplets