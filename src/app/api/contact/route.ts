import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Do something with the data, e.g., send an email, save to a database
    console.log('Received contact form submission:', { name, email, phone, message });

    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ message: 'Error processing request' }, { status: 500 });
  }
}
