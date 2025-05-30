import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'companyName', 'email', 'city', 'country'];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { message: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { error } = await resend.emails.send({
      from: 'RF Trust <contact@rf-trust.com>',
      to: ['contact@rf-trust.com'],
      subject: `New Contact Form Submission from ${body.firstName} ${body.lastName}`,
      text: `
New contact form submission:

Name: ${body.firstName} ${body.lastName}
Company: ${body.companyName}
Job Title: ${body.jobTitle || 'Not provided'}
Email: ${body.email}
Phone: ${body.phone || 'Not provided'}
Location: ${body.city}, ${body.country}

Message:
${body.message || 'No message provided'}

This message was sent from the RF Trust contact form.
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
        <p><strong>Company:</strong> ${body.companyName}</p>
        <p><strong>Job Title:</strong> ${body.jobTitle || 'Not provided'}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone || 'Not provided'}</p>
        <p><strong>Location:</strong> ${body.city}, ${body.country}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message || 'No message provided'}</p>
        <hr>
        <p><em>This message was sent from the RF Trust contact form.</em></p>
      `,
      replyTo: body.email // This allows you to reply directly to the person who submitted the form
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { message: 'Unable to send email at this time. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { message: 'Unable to process your request at this time. Please try again later.' },
      { status: 500 }
    );
  }
} 