export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message, recipient } = body;
    
    // Validate the input
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and message are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Here you would typically integrate with an email service like Nodemailer, SendGrid, etc.
    // For example with EmailJS or similar service
    
    // For now, we'll log the data and return a success response
    console.log('Contact form submission:', {
      name,
      email,
      message,
      recipient: recipient || 'krushantw@gmail.com', // Default recipient
    });
    
    // In a real implementation, you would send the email here
    // Example: await sendEmail({ name, email, message, recipient });
    
    return new Response(
      JSON.stringify({ success: true, message: 'Message received' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    console.error('Contact API error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process request' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
