import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const body = await req.json(); // Extract JSON from request
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'feyrouzdjebbara2000@gmail.com',
        pass: 'smyopabzphhpkkxx',
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: email,
      to: 'fifi.tayung25@gmail.com',
      subject: `New message from ${name} via your portfolio`,
      text: `Message: ${message} \n\n Contact Email: ${email}`,
    };
    

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send the email.' }, { status: 500 });
  }
}