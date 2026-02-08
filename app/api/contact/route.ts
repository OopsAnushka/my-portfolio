import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Message from '@/models/Message';

export async function POST(req: Request) {
  try {
    await connectDB();
    
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Simple validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' }, 
        { status: 400 }
      );
    }

    // Save to Database
    const newMessage = await Message.create({
      name,
      email,
      subject,
      message
    });

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