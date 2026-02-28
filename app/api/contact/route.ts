import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json()

        if (!name || !email || !subject || !message) {
            return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
        }

        // Create transporter using Gmail SMTP (free)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,   // your Gmail address
                pass: process.env.GMAIL_APP_PASS, // Gmail App Password (not your login password)
            },
        })

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
            to: 'siddharthparekh40@gmail.com',
            replyTo: email,
            subject: `[Portfolio] ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0d1117; color: #e6edf3; border-radius: 12px;">
                    <h2 style="color: #388bfd; margin-top: 0;">New message from your portfolio</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px 0; color: #8b949e; width: 80px; vertical-align: top;">Name</td>
                            <td style="padding: 8px 0; font-weight: 600;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #8b949e; vertical-align: top;">Email</td>
                            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #388bfd;">${email}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #8b949e; vertical-align: top;">Subject</td>
                            <td style="padding: 8px 0;">${subject}</td>
                        </tr>
                    </table>
                    <hr style="border: none; border-top: 1px solid #21262d; margin: 16px 0;" />
                    <p style="color: #8b949e; font-size: 0.8rem; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.1em;">Message</p>
                    <p style="line-height: 1.7; white-space: pre-wrap; margin: 0;">${message}</p>
                    <hr style="border: none; border-top: 1px solid #21262d; margin: 24px 0 16px;" />
                    <p style="color: #8b949e; font-size: 0.78rem; margin: 0;">Sent from <strong>siddharthparekh.dev</strong></p>
                </div>
            `,
        })

        return NextResponse.json({ success: true })
    } catch (err) {
        console.error('Contact API error:', err)
        return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
    }
}
