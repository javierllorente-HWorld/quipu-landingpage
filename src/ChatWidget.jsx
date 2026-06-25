import { useEffect, useRef, useState } from 'react'
import './ChatWidget.css'

const INITIAL_MESSAGE = {
  role: 'assistant',
  content: '¡Hola! Soy el asistente virtual de Quipu. ¿En qué te puedo ayudar?',
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function formatAssistantMessage(text) {
  return escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br/>')
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden focusable="false" className="chat-widget-fab-icon">
      <path
        d="M4 4.75h16a1 1 0 011 1v10.5a1 1 0 01-1 1H9.5L5.2 21V17.25H4a1 1 0 01-1-1V5.75a1 1 0 011-1z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden focusable="false" className="chat-widget-close-icon">
      <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden focusable="false" className="chat-widget-send-icon">
      <path
        d="M3.5 12L20.5 4L13.5 20.5L11 13L3.5 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([INITIAL_MESSAGE])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isLoading, isOpen])

  const sendMessage = async (event) => {
    event.preventDefault()
    const text = input.trim()
    if (!text || isLoading) return

    const nextMessages = [...messages, { role: 'user', content: text }]
    setMessages(nextMessages)
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      })

      if (!response.ok) {
        throw new Error(`El asistente respondió con estado ${response.status}`)
      }

      const data = await response.json()
      const reply = data.reply?.trim() || 'No pude generar una respuesta. ¿Podés reformular la pregunta?'

      setMessages((current) => [...current, { role: 'assistant', content: reply }])
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          content:
            'Hubo un problema al conectar con el asistente. Probá de nuevo en unos minutos o escribinos por WhatsApp.',
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-widget-panel" role="dialog" aria-label="Asistente Quipu">
          <div className="chat-widget-header">
            <span>Asistente Quipu</span>
            <button
              type="button"
              className="chat-widget-close"
              aria-label="Cerrar chat"
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>

          <div className="chat-widget-messages">
            {messages.map((message, index) => (
              <div key={index} className={`chat-widget-bubble chat-widget-bubble--${message.role}`}>
                {message.role === 'assistant' ? (
                  <span dangerouslySetInnerHTML={{ __html: formatAssistantMessage(message.content) }} />
                ) : (
                  message.content
                )}
              </div>
            ))}
            {isLoading && (
              <div className="chat-widget-bubble chat-widget-bubble--assistant chat-widget-typing">
                <span />
                <span />
                <span />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="chat-widget-input-row" onSubmit={sendMessage}>
            <input
              type="text"
              className="chat-widget-input"
              placeholder="Escribí tu pregunta..."
              value={input}
              onChange={(event) => setInput(event.target.value)}
              disabled={isLoading}
              aria-label="Mensaje para el asistente"
            />
            <button
              type="submit"
              className="chat-widget-send"
              aria-label="Enviar mensaje"
              disabled={isLoading || !input.trim()}
            >
              <SendIcon />
            </button>
          </form>
        </div>
      )}

      {!isOpen && (
        <button
          type="button"
          className="chat-widget-fab"
          aria-label="Abrir chat"
          onClick={() => setIsOpen(true)}
        >
          <ChatIcon />
          <span>Hablar con Quipu</span>
        </button>
      )}
    </div>
  )
}

export default ChatWidget
