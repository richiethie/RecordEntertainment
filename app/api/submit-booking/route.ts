import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Honeybook placement ID
    const honeybookPid = '5ddd379ab8a407001bb8c4d0';
    
    // TODO: To complete the Honeybook integration, you need to:
    // 1. Get your Honeybook webhook URL from your Honeybook dashboard
    // 2. Add it as an environment variable: HONEYBOOK_WEBHOOK_URL
    // 3. Uncomment the code below to forward submissions to Honeybook
    
    // Option 1: Forward to Honeybook webhook (RECOMMENDED)
    const webhookUrl = process.env.HONEYBOOK_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            pid: honeybookPid,
            source: 'website_booking_form',
            timestamp: new Date().toISOString(),
          }),
        });
        
        if (response.ok) {
          return NextResponse.json({ 
            success: true, 
            message: 'Booking request submitted to Honeybook successfully',
          });
        }
      } catch (webhookError) {
        console.error('Error forwarding to Honeybook webhook:', webhookError);
        // Fall through to logging method
      }
    }
    
    // Option 2: Log the submission (for now, until webhook is configured)
    // In production, this should forward to Honeybook's webhook or API
    console.log('Booking submission received:', {
      ...formData,
      pid: honeybookPid,
      timestamp: new Date().toISOString(),
    });
    
    // Note: The tracking pixel is sent from the client side
    // This helps Honeybook track the lead even if webhook isn't configured
    
    return NextResponse.json({ 
      success: true, 
      message: 'Booking request received successfully',
      note: webhookUrl 
        ? 'Submitted to Honeybook webhook' 
        : 'Webhook not configured - check server logs for submission data. Add HONEYBOOK_WEBHOOK_URL to .env to enable automatic forwarding.',
    });
  } catch (error) {
    console.error('Error processing booking:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process booking request' },
      { status: 500 }
    );
  }
}
