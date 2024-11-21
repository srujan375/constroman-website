import { DemoRequest } from './supabase';
import { getGmailAuthorization } from './gmailInit';
import { createEmail } from './emailUtils';
import { createCalendarEvent } from './calendarService';

export const sendDemoRequestEmails = async (data: DemoRequest) => {
  try {
    console.log('Starting demo request email process for:', data.email);

    // First ensure we have authorization
    await getGmailAuthorization();
    console.log('Gmail authorization successful');

    // Create calendar event with Meet
    const calendarEvent = await createCalendarEvent(data);
    console.log('Calendar event created with meet link:', calendarEvent.meetLink);

    // Prepare email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2C5282;">Demo Request Confirmed</h2>
        <div style="background: #F7FAFC; padding: 20px; border-radius: 8px;">
          <p>Thank you for requesting a demo of ConstroMan!</p>
          <p>Your demo has been scheduled for:</p>
          <p><strong>Date:</strong> ${new Date(data.date).toLocaleDateString()}</p>
          <p><strong>Time:</strong> ${data.time}</p>
          <p><strong>Google Meet Link:</strong> <a href="${calendarEvent.meetLink}">${calendarEvent.meetLink}</a></p>
          <p>A calendar invitation has been sent to your email address. Please accept it to add the meeting to your calendar.</p>
          <hr style="border: 0; border-top: 1px solid #E2E8F0; margin: 20px 0;" />
          <p style="color: #718096; font-size: 14px;">
            If you need to make any changes to your booking, please contact us at support@constroman.com
          </p>
        </div>
      </div>
    `;

    // Send user confirmation email
    const userEmailResponse = await window.gapi.client.gmail.users.messages.send({
      userId: 'me',
      resource: {
        raw: createEmail(data.email, 'Demo Request Confirmation - ConstroMan', emailContent)
      }
    });

    console.log('User confirmation email sent:', userEmailResponse.result.id);

    // Send internal notification
    const internalEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2C5282;">New Demo Request Received</h2>
        <div style="background: #F7FAFC; padding: 20px; border-radius: 8px;">
          <h3>Request Details:</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Company:</strong> ${data.company}</p>
          <p><strong>Date:</strong> ${new Date(data.date).toLocaleDateString()}</p>
          <p><strong>Time:</strong> ${data.time}</p>
          <p><strong>Meet Link:</strong> <a href="${calendarEvent.meetLink}">${calendarEvent.meetLink}</a></p>
          ${data.message ? `<p><strong>Additional Message:</strong> ${data.message}</p>` : ''}
        </div>
      </div>
    `;

    const internalEmailResponse = await window.gapi.client.gmail.users.messages.send({
      userId: 'me',
      resource: {
        raw: createEmail(
          import.meta.env.VITE_NOTIFICATION_EMAIL || 'notifications@constroman.com',
          'New Demo Request - ConstroMan',
          internalEmailContent
        )
      }
    });

    console.log('Internal notification email sent:', internalEmailResponse.result.id);
    return true;
  } catch (error) {
    console.error('Error sending demo request emails:', error);
    throw new Error('Failed to send demo request emails: ' + (error instanceof Error ? error.message : 'Unknown error'));
  }
}; 