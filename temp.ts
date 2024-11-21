import { DemoRequest } from './supabase';
import { getGmailAuthorization } from './gmailInit';
import { createEmail } from './emailUtils';

export const sendDemoRequestEmails = async (data: DemoRequest) => {
  try {
    // First ensure we have authorization
    await getGmailAuthorization();

    // Send user confirmation email
    const userEmailResponse = await window.gapi.client.gmail.users.messages.send({
      userId: 'me',
      resource: {
        raw: createEmail(
          data.email,
          'Demo Request Confirmation - ConstroMan',
          `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #2C5282;">Demo Request Confirmed</h2>
              <div style="background: #F7FAFC; padding: 20px; border-radius: 8px;">
                <p>Thank you for requesting a demo of ConstroMan!</p>
                <p>We have received your request for:</p>
                <p><strong>Date:</strong> ${new Date(data.date).toLocaleDateString()}</p>
                <p><strong>Time:</strong> ${data.time}</p>
                <p>We'll be in touch shortly to confirm your demo session.</p>
                <hr style="border: 0; border-top: 1px solid #E2E8F0; margin: 20px 0;" />
                <p style="color: #718096; font-size: 14px;">
                  If you need to make any changes to your booking, please contact us at support@constroman.com
                </p>
              </div>
            </div>
          `
        )
      }
    });

    console.log('User confirmation email sent:', userEmailResponse);

    // Send internal notification email
    const internalEmailResponse = await window.gapi.client.gmail.users.messages.send({
      userId: 'me',
      resource: {
        raw: createEmail(
          import.meta.env.VITE_NOTIFICATION_EMAIL || 'notifications@constroman.com',
          'New Demo Request - ConstroMan',
          `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #2C5282;">New Demo Request Received</h2>
              <div style="background: #F7FAFC; padding: 20px; border-radius: 8px;">
                <h3>Request Details:</h3>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Company:</strong> ${data.company}</p>
                <p><strong>Date:</strong> ${new Date(data.date).toLocaleDateString()}</p>
                <p><strong>Time:</strong> ${data.time}</p>
                ${data.message ? `<p><strong>Additional Message:</strong> ${data.message}</p>` : ''}
                <hr style="border: 0; border-top: 1px solid #E2E8F0; margin: 20px 0;" />
                <p style="color: #718096; font-size: 14px;">
                  Please review and confirm this demo request.
                </p>
              </div>
            </div>
          `
        )
      }
    });

    console.log('Internal notification email sent:', internalEmailResponse);
    return true;
  } catch (error) {
    console.error('Error sending demo request emails:', error);
    throw new Error('Failed to send demo request emails. Please try again later.');
  }
}; 