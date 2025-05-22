// Simple contact form API route that logs the message

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    
    // Validate the input
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and message are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Log the form submission (this would be sent to your email in production)
    console.log('Contact form submission:');
    console.log('From:', name, '(', email, ')');
    console.log('Message:', message);
    
    // In a real production environment, you would send this data to your email
    // For now, we'll just return a success response
    
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Message received! Check the server logs to see the message content.'
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process message. Please try again later.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
