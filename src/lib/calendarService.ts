import { DemoRequest } from './supabase';

const CALENDAR_DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
const CALENDAR_SCOPES = 'https://www.googleapis.com/auth/calendar.events';

export const initializeCalendar = async () => {
  try {
    if (!window.gapi.client) {
      throw new Error('Google API client not initialized');
    }
    await window.gapi.client.load(CALENDAR_DISCOVERY_DOC);
    return true;
  } catch (error) {
    console.error('Error initializing Calendar:', error);
    throw new Error('Failed to initialize Calendar service');
  }
};

export const createCalendarEvent = async (data: DemoRequest) => {
  try {
    // Validate input data
    if (!data.date || !data.time) {
      throw new Error('Invalid date or time provided');
    }

    const startDateTime = new Date(data.date);
    const [hours, minutes] = data.time.split(':');
    startDateTime.setHours(parseInt(hours), parseInt(minutes));
    
    const endDateTime = new Date(startDateTime);
    endDateTime.setHours(endDateTime.getHours() + 1);

    // Validate calendar API is available
    if (!window.gapi.client.calendar) {
      await initializeCalendar();
    }

    const event = {
      summary: `ConstroMan Demo - ${data.company}`,
      description: `Demo session with ${data.name} from ${data.company}\n\nAdditional Notes: ${data.message || 'None'}`,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
      },
      attendees: [
        { email: data.email },
        { email: 'constromanai@gmail.com' }
      ],
      conferenceData: {
        createRequest: {
          requestId: `demo-${Date.now()}`,
          conferenceSolutionKey: { type: 'hangoutsMeet' }
        }
      },
      reminders: {
        useDefault: true
      }
    };

    console.log('Creating calendar event with data:', { ...event, attendees: '[redacted]' });

    const response = await window.gapi.client.calendar.events.insert({
      calendarId: 'primary',
      conferenceDataVersion: 1,
      sendUpdates: 'all',
      resource: event
    });

    if (!response.result || !response.result.hangoutLink) {
      throw new Error('Invalid calendar event response');
    }

    console.log('Calendar event created successfully:', response.result.id);

    return {
      eventId: response.result.id,
      meetLink: response.result.hangoutLink,
      startTime: startDateTime,
      endTime: endDateTime
    };
  } catch (error) {
    console.error('Error creating calendar event:', error);
    throw new Error('Failed to schedule meeting: ' + (error instanceof Error ? error.message : 'Unknown error'));
  }
}; 