// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Message from '@/models/Message';
import nodemailer from 'nodemailer'; // Import Nodemailer

export async function POST(req: Request) {
  try {
    // 1. Connect to Database & Parse Data
    await connectDB();
    const body = await req.json();
    const { name, email, subject, message } = body;

    // 2. Validate
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' }, 
        { status: 400 }
      );
    }

    // 3. Save to MongoDB
    const newMessage = await Message.create({
      name,
      email,
      subject,
      message
    });

    // 4. Configure Email Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email from .env
        pass: process.env.EMAIL_PASS, // Your App Password from .env
      },
    });

    // 5. Define the "Thank You" Email
    const mailOptions = {
      from: `"Anushka Sharma" <${process.env.EMAIL_USER}>`, // Sender address
      to: email, // The user's email (from the form)
      subject: "Thanks for connecting! | Anushka Sharma", // Subject line
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
          <h2 style="color: #0070f3;">Hey! ${name},</h2>
          <p>Thank you so much for visiting my portfolio and reaching out!</p>
          <p>I have received your message regarding <strong>"${subject}"</strong> and will get back to you as soon as possible.</p>
          <br/>
          <p>Best regards,</p>
          <p><strong>Anushka Sharma</strong><br/>Developer from India</p>
        </div>
      `,
    };

    // 6. Send the Email
    // We use a separate try-catch for email so the form doesn't fail if the email service is down
    try {
      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error('Failed to send thank you email:', emailError);
      // We don't return an error here because the message WAS saved to DB successfully.
    }

    // 7. Return Success
    return NextResponse.json(
      { message: 'Message sent successfully!', success: true, id: newMessage._id }, 
      { status: 201 }
    );

  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' }, 
      { status: 500 }
    );
  }
}