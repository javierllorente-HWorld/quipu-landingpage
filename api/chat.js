const SYSTEM_PROMPT =
  'Sos el asistente virtual de Quipu, una plataforma financiera para PyMEs latinoamericanas. Ayudás a responder preguntas sobre la plataforma, sus planes (Básico $29.000/mes, Profesional $59.000/mes, Empresarial $99.000/mes), funcionalidades (caja, cobros, pagos, reportes con IA, copiloto financiero) y el proceso de onboarding. Respondé siempre en español, de forma clara y concisa. Si te preguntan algo que no tiene que ver con Quipu, redirigí amablemente la conversación al producto.'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'OPENAI_API_KEY no está configurada en el servidor' })
  }

  const { messages } = req.body ?? {}
  if (!Array.isArray(messages)) {
    return res.status(400).json({ error: 'Falta el array "messages" en el body' })
  }

  try {
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      }),
    })

    if (!openaiResponse.ok) {
      const detail = await openaiResponse.text()
      return res.status(openaiResponse.status).json({ error: 'Error de OpenAI', detail })
    }

    const data = await openaiResponse.json()
    const reply = data.choices?.[0]?.message?.content?.trim() ?? ''
    return res.status(200).json({ reply })
  } catch {
    return res.status(500).json({ error: 'No se pudo contactar a OpenAI' })
  }
}
