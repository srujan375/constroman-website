const CLIENT_ID = import.meta.env.VITE_GMAIL_CLIENT_ID;
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest';
const SCOPES = 'https://www.googleapis.com/auth/gmail.send';

let tokenClient: any;
let gapiInited = false;
let gisInited = false;

export const initializeGmail = () => {
  const script1 = document.createElement('script');
  script1.src = 'https://apis.google.com/js/api.js';
  script1.onload = gapiLoaded;
  
  const script2 = document.createElement('script');
  script2.src = 'https://accounts.google.com/gsi/client';
  script2.onload = gisLoaded;
  
  document.head.appendChild(script1);
  document.head.appendChild(script2);
};

function gapiLoaded() {
  window.gapi.load('client', initializeGapiClient);
}

async function initializeGapiClient() {
  await window.gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: [DISCOVERY_DOC],
  });
  gapiInited = true;
}

function gisLoaded() {
  tokenClient = window.google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPES,
    callback: '', // Will be set later
  });
  gisInited = true;
}

const createEmail = (to: string, subject: string, htmlContent: string) => {
  const emailLines = [
    `To: ${to}`,
    'From: "ConstroMan Demo" <constromanai@gmail.com>',
    'Content-Type: text/html; charset=utf-8',
    'MIME-Version: 1.0',
    `Subject: ${subject}`,
    '',
    htmlContent
  ].join('\n');

  return btoa(emailLines)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
};

export const sendEmail = async (to: string, subject: string, htmlContent: string) => {
  if (!gapiInited || !gisInited) {
    throw new Error('Gmail API not initialized');
  }

  return new Promise((resolve, reject) => {
    tokenClient.callback = async (response: any) => {
      if (response.error !== undefined) {
        reject(response);
        return;
      }

      try {
        await window.gapi.client.gmail.users.messages.send({
          userId: 'me',
          resource: {
            raw: createEmail(to, subject, htmlContent)
          }
        });
        resolve(true);
      } catch (error) {
        reject(error);
      }
    };

    tokenClient.requestAccessToken();
  });
}; 