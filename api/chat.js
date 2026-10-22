// api/chat.js
// Serverless function endpoint for Vercel / Netlify deployment
import { handleChatRequest } from '../server/chatHandler.js';

export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed. Use POST.' });
  }

  const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '127.0.0.1';
  
  // Support both parsed JSON body and raw body stream
  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ success: false, error: 'Malformed JSON payload.' });
    }
  }

  const result = await handleChatRequest(body, clientIp);
  return res.status(result.status).json(result.data);
}
