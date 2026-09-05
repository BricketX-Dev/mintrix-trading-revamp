import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, product, quantity, destination, details } = body;

    const sender = 'Mintrix Trading <info@mintrixtrading.com>';
    
    // 1. Send notification to Admin
    const notifyAdmin = resend.emails.send({
      from: sender,
      to: 'bricketxosama@gmail.com', 
      replyTo: email,
      subject: `New Wholesale Quote: ${product} - ${name}`,
      html: `
        <div style="font-family: sans-serif; color: #14201a; padding: 20px;">
          <h2 style="color: #d6a93c;">New Quote Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${name}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Company:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${company || 'N/A'}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${email}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${phone || 'N/A'}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Product:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${product}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Est. Quantity:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${quantity || 'N/A'}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Destination:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${destination || 'N/A'}</td></tr>
          </table>
          <h3 style="margin-top: 20px;">Additional Details:</h3>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 8px;">${details || 'No additional details provided.'}</p>
        </div>
      `,
    });

    // 2. Send automated confirmation to the Customer
    const notifyCustomer = resend.emails.send({
      from: sender,
      to: email,
      subject: `We received your quote request - Mintrix Trading`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #14201a; padding: 30px; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #eee; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 25px;">
            <h1 style="color: #1a2820; margin: 0; font-size: 24px;">Mintrix Trading</h1>
            <div style="width: 40px; height: 3px; background-color: #d6a93c; margin: 15px auto;"></div>
          </div>
          
          <h2 style="color: #1a2820; font-size: 20px;">Hello ${name},</h2>
          
          <p style="font-size: 16px; line-height: 1.6; color: #4a5568;">
            Thank you for reaching out to Mintrix Trading. We have successfully received your quote request for <strong>${product}</strong>.
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #4a5568;">
            One of our dedicated trade managers is currently reviewing your specifications and will get back to you with a competitive wholesale quote within the next <strong>24 hours</strong>.
          </p>

          <p style="font-size: 16px; line-height: 1.6; color: #4a5568;">
            If you need immediate assistance, please feel free to reply directly to this email or contact us via phone.
          </p>
          
          <br/>
          
          <p style="font-size: 15px; line-height: 1.5; color: #1a2820; margin-bottom: 5px;">
            <strong>Best regards,</strong><br/>
            The Mintrix Trading Team
          </p>
          <p style="font-size: 14px; color: #718096; margin-top: 5px;">
            <a href="mailto:info@mintrixtrading.com" style="color: #d6a93c; text-decoration: none;">info@mintrixtrading.com</a> | +971 54 166 2352<br/>
            Dubai, United Arab Emirates
          </p>
        </div>
      `,
    });

    const [adminData, customerData] = await Promise.all([notifyAdmin, notifyCustomer]);

    if (adminData.error || customerData.error) {
      console.error("Resend Error (Admin):", adminData.error);
      console.error("Resend Error (Customer):", customerData.error);
      
      const errorMessage = adminData.error?.message || customerData.error?.message || "Failed to send emails.";
      return NextResponse.json({ error: { message: errorMessage } }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json({ error: { message: 'Internal Server Error' } }, { status: 500 });
  }
}