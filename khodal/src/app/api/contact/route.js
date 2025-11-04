import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, service, message } = body;
    
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Insert into database (server-side client bypasses RLS when service role is set)
    const { data, error } = await supabaseAdmin
      .from('contact_submissions')
      .insert([
        {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: body.phone?.trim() || null,
          service: service,
          message: message.trim(),
          status: 'new'
        }
      ])
      .select();

    if (error) {
      console.error('Database error:', error);
      // Common cause: missing SUPABASE_SERVICE_ROLE_KEY (RLS blocks insert)
      if (error.code === '42501') {
        return NextResponse.json(
          { error: 'Permission denied by RLS. Ensure SUPABASE_SERVICE_ROLE_KEY is set on the server or add an INSERT policy to the contact_submissions table.' },
          { status: 500 }
        );
      }
      return NextResponse.json(
        { error: 'Failed to submit form' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for contacting us! We will get back to you soon.',
        data: data[0]
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  return NextResponse.json(
    { message: 'Contact API endpoint. Use POST to submit contact form.' },
    { status: 200 }
  );
}
