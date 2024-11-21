export const createEmail = (to: string, subject: string, htmlContent: string): string => {
  const email = [
    'Content-Type: text/html; charset="UTF-8"\n',
    'MIME-Version: 1.0\n',
    'Content-Transfer-Encoding: 7bit\n',
    'to: ', to, '\n',
    'subject: ', subject, '\n\n',
    htmlContent
  ].join('');

  // Convert the email to base64url format
  const encodedEmail = btoa(email)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  return encodedEmail;
}; 