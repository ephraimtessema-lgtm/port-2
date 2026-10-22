// functions/api/chat.js
// Cloudflare Pages Function for /api/chat

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();
    const rawMessage = (body.message || '').trim();

    if (!rawMessage) {
      return new Response(JSON.stringify({ success: false, error: 'Message cannot be empty.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (rawMessage.length > 500) {
      return new Response(JSON.stringify({ success: false, error: 'Message exceeds maximum length of 500 characters.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const apiKey = env.AI_API_KEY;
    const _provider = (env.AI_PROVIDER || 'groq').toLowerCase();
    const model = env.AI_MODEL || 'llama-3.3-70b-versatile';
    const baseUrl = env.AI_BASE_URL || 'https://api.groq.com/openai/v1/chat/completions';

    if (!apiKey || apiKey === 'your_api_key_here' || apiKey === 'gsk_your_groq_api_key_here') {
      return new Response(JSON.stringify({
        success: false,
        configured: false,
        fallback: true,
        message: 'Groq API key not yet set in Cloudflare environment variables. Falling back to verified local knowledge engine.'
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const PORTFOLIO_SYSTEM_PROMPT = `You are the official AI portfolio guide for Ephraim Tessema.
ABOUT EPHRAIM:
- Role: Computer Science and Engineering (CSE) student at ASTU (Adama Science and Technology University) in Ethiopia, and an aspiring Software Engineer.
- Philosophy: "Curious mind. Builder's mindset. Engineer in progress."
- Education: Studying Computer Science & Engineering at Adama Science and Technology University (ASTU), Ethiopia.
- Location: Ethiopia (open to remote & global opportunities).
- Verified Stack: HTML5 & CSS3, JavaScript (ES6+), React, Tailwind CSS, React Native, Expo, Flutter & Dart, Node.js, SQL, Firebase, Supabase, Git, GitHub, Amharic OCR. (Never claim Python or unspecified APIs).
- Projects: Study-Flow (featured study planner + AI chat), Mama-Care (maternal healthcare web app), CS-Toolkit (CS utilities & algorithms), BethVerse (mobile poetry vault + Amharic OCR), Yididya (private choir app), Johanan (private literature team app).
- Contact: ephraimtessema@gmail.com, Telegram @ephion_dev, Instagram @epha_tess, GitHub ephraimtessema-lgtm.
- Keep responses concise (2-4 sentences) and grounded strictly in the facts above.`;

    const res = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: 'system', content: PORTFOLIO_SYSTEM_PROMPT },
          { role: 'user', content: rawMessage }
        ],
        max_tokens: 350,
        temperature: 0.3
      })
    });

    if (!res.ok) {
      throw new Error(`AI API error status: ${res.status}`);
    }

    const data = await res.json();
    const replyText = data.choices?.[0]?.message?.content || '';

    return new Response(JSON.stringify({
      success: true,
      reply: replyText.trim(),
      modelUsed: model
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({
      success: false,
      fallback: true,
      error: err.message,
      message: 'AI service temporarily unavailable. Using verified local portfolio knowledge.'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
