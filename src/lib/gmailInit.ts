const CLIENT_ID = import.meta.env.VITE_GMAIL_CLIENT_ID;
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest';
const SCOPES = 'https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/calendar.events';

declare global {
  interface Window {
    gapi: any;
    google: any;
    tokenClient: any;
    gapiInited: boolean;
    gisInited: boolean;
  }
}

export async function initializeGmail() {
  try {
    // Load the Google API client library
    await loadGapiClient();
    
    // Initialize the client
    await window.gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: [DISCOVERY_DOC],
    });
    window.gapiInited = true;

    // Initialize the token client
    window.tokenClient = window.google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: '', // Will be set dynamically when needed
    });
    window.gisInited = true;

    return true;
  } catch (error) {
    console.error('Error initializing Gmail:', error);
    return false;
  }
}

function loadGapiClient(): Promise<void> {
  return new Promise((resolve) => {
    if (window.gapi) {
      window.gapi.load('client', resolve);
    } else {
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/api.js';
      script.onload = () => window.gapi.load('client', resolve);
      document.head.appendChild(script);
    }
  });
}

export async function getGmailAuthorization(): Promise<any> {
  if (!window.gapiInited || !window.gisInited) {
    throw new Error('Gmail API not initialized');
  }

  return new Promise((resolve, reject) => {
    try {
      window.tokenClient.callback = (response: any) => {
        if (response.error) {
          reject(response);
          return;
        }
        resolve(response);
      };
      window.tokenClient.requestAccessToken({ prompt: 'consent' });
    } catch (error) {
      reject(error);
    }
  });
} 