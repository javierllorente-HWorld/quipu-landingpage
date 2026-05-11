import { useState } from 'react'
import './App.css'

function Logo() {
  return (
    <a href="#top" className="brand" aria-label="Quipu inicio">
      <img
        className="brand-img"
        src="/quipu-logo-transparent.png"
        alt="Quipu"
        decoding="async"
      />
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav
          className={`nav${open ? ' nav--open' : ''}`}
          aria-label="Principal"
        >
          <a href="#beneficios" onClick={close}>
            Beneficios
          </a>
          <a href="#producto" onClick={close}>
            Producto
          </a>
          <a href="#ia" onClick={close}>
            IA
          </a>
          <a href="#planes" onClick={close}>
            Planes
          </a>
          <a href="#contacto" onClick={close}>
            Contacto
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=javierllorentee@gmail.com&su=Consulta%20sobre%20demo&body=Hola%20equipo%20de%20Quipu%2C%0A%0AMe%20encantar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20su%20producto%2C%20si%C3%A9ntanse%20libres%20de%20contactarme%20a%20este%20mismo%20correo%20para%20coordinar%20una%20demo.%0A%0AMuchas%20gracias" className="btn btn-header nav-demo" onClick={close}>
            Solicitar demo
          </a>
        </nav>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=javierllorentee@gmail.com&su=Consulta%20sobre%20demo&body=Hola%20equipo%20de%20Quipu%2C%0A%0AMe%20encantar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20su%20producto%2C%20si%C3%A9ntanse%20libres%20de%20contactarme%20a%20este%20mismo%20correo%20para%20coordinar%20una%20demo.%0A%0AMuchas%20gracias" className="btn btn-header header-demo-desktop">
          Solicitar demo
        </a>
        <button
          type="button"
          className={`nav-toggle${open ? ' nav-toggle--open' : ''}`}
          aria-expanded={open}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

function FeatureCards() {
  const items = [
    {
      title: 'Caja',
      text: 'Visibilidad en tiempo real de tu posición de caja.',
      icon: (
        <svg
          className="feature-card-svg"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
        >
          <rect
            x="2.25"
            y="6.25"
            width="19.5"
            height="13.5"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M2.25 11.25h19.5"
            stroke="currentColor"
            strokeWidth="1.75"
          />
          <circle cx="17.25" cy="14.25" r="1.35" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: 'Cobros',
      text: 'Controlá tus cuentas por cobrar y reducí la mora.',
      icon: (
        <svg
          className="feature-card-svg"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
        >
          <circle
            cx="9"
            cy="7.25"
            r="3.25"
            stroke="currentColor"
            strokeWidth="1.75"
          />
          <path
            d="M3 20.25v-.9a5 5 0 015-5h2a5 5 0 015 5v.9"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="17"
            cy="8"
            r="2.75"
            stroke="currentColor"
            strokeWidth="1.75"
          />
          <path
            d="M20.25 20.25v-.65a3.25 3.25 0 00-3.25-3.25h-.65"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: 'Pagos',
      text: 'Programá pagos, aprobá y evitá vencimientos.',
      icon: (
        <svg
          className="feature-card-svg"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
        >
          <rect
            x="2.25"
            y="5.25"
            width="19.5"
            height="13.5"
            rx="2.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path d="M2.25 10.25h19.5" stroke="currentColor" strokeWidth="1.75" />
          <rect
            x="5.25"
            y="13.75"
            width="6.5"
            height="3.25"
            rx="0.6"
            stroke="currentColor"
            strokeWidth="1.75"
          />
        </svg>
      ),
    },
    {
      title: 'Reportes + IA',
      text: 'Reportes confiables y respuestas al instante con IA.',
      icon: (
        <svg
          className="feature-card-svg"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
        >
          <path
            d="M5 19.25V4.75"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path
            d="M5 19.25h14"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path
            d="M8.25 19.25v-6M12 19.25V10M15.75 19.25v-9"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ]

  return (
    <section className="cards-section">
      <div className="container">
        <div className="cards-grid" id="beneficios">
          {items.map((item) => (
            <article key={item.title} className="feature-card">
              <div className="feature-card-icon" aria-hidden>
                {item.icon}
              </div>
              <div className="feature-card-body">
                <h3 className="feature-card-title">{item.title}</h3>
                <p className="feature-card-desc">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function PlatformMockups() {
  return (
    <div className="platform-visual">
      <img
        className="platform-visual-img"
        src="/PC_COBROS.png"
        alt="Vista de Quipu en desktop y mobile"
        decoding="async"
        loading="lazy"
      />
    </div>
  )
}

function IACopilotMock() {
  return (
    <div className="ia-panel" aria-hidden>
      <div className="ia-panel-header">
        <span className="ia-dot" />
        Copiloto financiero
      </div>
      <div className="ia-chat">
        <div className="ia-bubble ia-bubble--user">
          ¿Cómo me va el flujo de caja en los próximos 60 días?
        </div>
        <div className="ia-bubble ia-bubble--bot">
          Con cobros actuales y pagos programados, proyectás un saldo mínimo de{' '}
          <strong>$312k</strong> el 14 del próximo mes. Te sugiero adelantar el cobro
          de 2 facturas clave.
        </div>
        <div className="ia-bubble ia-bubble--user">¿Cuáles?</div>
        <div className="ia-bubble ia-bubble--bot typing">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="ia-input-fake">
        <span>Preguntá por tus números…</span>
        <span className="ia-send">→</span>
      </div>
    </div>
  )
}

function PlanesSection() {
  const planesWhatsappHref =
    'https://api.whatsapp.com/send/?phone=5492216161594&text=Hola%2C+necesito+ayuda+con+Quipu&type=phone_number&app_absent=0'

  return (
    <section
      className="section planes-section"
      id="planes"
      aria-labelledby="planes-heading"
    >
      <div className="container">
        <header className="planes-header">
          <h2 className="section-title planes-title" id="planes-heading">
            Elegí el plan ideal para tu PyME
          </h2>
          <p className="section-sub planes-sub">
            Todos los planes incluyen acceso a la plataforma, reportes con IA y
            actualizaciones en tiempo real.
          </p>
        </header>
        <div className="planes-grid">
          <article className="plan-card">
            <h3 className="plan-card__name">Básico</h3>
            <p className="plan-card__desc">
              Ideal para PyMEs que quieren ordenar sus finanzas.
            </p>
            <div className="plan-card__price">
              <span className="plan-card__amount">$29.000</span>
              <span className="plan-card__period">por mes</span>
            </div>
            <ul className="plan-card__features">
              <li>Gestión de caja</li>
              <li>Cobros y pagos</li>
              <li>Reportes básicos</li>
              <li>Hasta 5 GB de almacenamiento</li>
              <li>Soporte por email</li>
            </ul>
            <a
              href={planesWhatsappHref}
              className="plan-card__cta plan-card__cta--outline"
              target="_blank"
              rel="noreferrer"
            >
              Comenzar ahora
            </a>
          </article>
          <article className="plan-card plan-card--featured">
            <span className="plan-card__badge">Más elegido</span>
            <h3 className="plan-card__name">Profesional</h3>
            <p className="plan-card__desc">
              Para PyMEs que buscan más control y automatización.
            </p>
            <div className="plan-card__price">
              <span className="plan-card__amount">$59.000</span>
              <span className="plan-card__period">por mes</span>
            </div>
            <ul className="plan-card__features">
              <li>Todo lo del plan Básico</li>
              <li>Reportes avanzados con IA</li>
              <li>Presupuestos y proyecciones</li>
              <li>Integraciones contables</li>
              <li>Hasta 50 GB de almacenamiento</li>
              <li>Soporte prioritario</li>
            </ul>
            <a
              href={planesWhatsappHref}
              className="plan-card__cta plan-card__cta--primary"
              target="_blank"
              rel="noreferrer"
            >
              Comenzar ahora
            </a>
          </article>
          <article className="plan-card">
            <h3 className="plan-card__name">Empresarial</h3>
            <p className="plan-card__desc">
              Para empresas que necesitan escalabilidad y acompañamiento.
            </p>
            <div className="plan-card__price">
              <span className="plan-card__amount">$99.000</span>
              <span className="plan-card__period">por mes</span>
            </div>
            <ul className="plan-card__features">
              <li>Todo lo del plan Profesional</li>
              <li>IA personalizada</li>
              <li>Múltiples empresas y usuarios</li>
              <li>Almacenamiento ilimitado</li>
              <li>API y exportaciones avanzadas</li>
              <li>Atención al cliente 24/7</li>
            </ul>
            <a
              href={planesWhatsappHref}
              className="plan-card__cta plan-card__cta--outline"
              target="_blank"
              rel="noreferrer"
            >
              Comenzar ahora
            </a>
          </article>
        </div>
        <p className="planes-footnote">Cancelá cuando quieras. Sin permanencia.</p>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="quipu" id="top">
      <Header />

      <section className="hero">
        <div className="hero-bg" aria-hidden />
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1 className="hero-title">
              Finanzas claras para PyMEs que necesitan{' '}
              <span className="hero-highlight">decidir mejor</span>
            </h1>
            <p className="hero-lead">
              Ordena tu flujo de caja, cobros, pagos y reportes. Todo en una sola
              plataforma, con IA que te ayuda a decidir con datos reales de tu empresa.
            </p>
            <div className="hero-actions">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=javierllorentee@gmail.com&su=Consulta%20sobre%20demo&body=Hola%20equipo%20de%20Quipu%2C%0A%0AMe%20encantar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20su%20producto%2C%20si%C3%A9ntanse%20libres%20de%20contactarme%20a%20este%20mismo%20correo%20para%20coordinar%20una%20demo.%0A%0AMuchas%20gracias" className="btn btn-primary-light">
                Solicitar demo
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <img
              className="hero-visual-img"
              src="/pc-imagen-inicio-quipu.png"
              alt="Vista principal de Quipu"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <FeatureCards />

      <section className="section platform-section" id="producto">
        <div className="container platform-grid">
          <div className="platform-copy">
            <h2 className="section-title">Todo en una sola plataforma</h2>
            <p className="section-sub">
              Unificá tus procesos financieros en un solo lugar.
              <br />
              Menos tareas manuales, más control y mejor toma de decisiones.
            </p>
            <ul className="checklist">
              <li>Información actualizada en tiempo real</li>
              <li>Menos errores y tareas repetitivas</li>
              <li>Decisiones más rápidas y seguras</li>
            </ul>
          </div>
          <PlatformMockups />
        </div>
      </section>

      <section className="section ia-section" id="ia">
        <div className="container ia-grid">
          <IACopilotMock />
          <div className="ia-copy">
            <h2 className="section-title">Copiloto financiero con IA</h2>
            <p className="section-sub">
              Hacé preguntas y obtené respuestas al instante usando los datos reales
              de tu empresa.
            </p>
            <ul className="checklist checklist--compact">
              <li>Responde con datos de tu negocio</li>
              <li>Recomendaciones accionables</li>
              <li>Ahorra tiempo, gana claridad</li>
            </ul>
          </div>
        </div>
      </section>

      <PlanesSection />

      <section className="cta-band" id="contacto">
        <div className="container">
          <div className="cta-panel">
            <h2 className="cta-panel__title">
              Llevá el control financiero de tu PyME al siguiente nivel
            </h2>
            <div className="cta-panel__actions">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=javierllorentee@gmail.com&su=Consulta%20sobre%20demo&body=Hola%20equipo%20de%20Quipu%2C%0A%0AMe%20encantar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20su%20producto%2C%20si%C3%A9ntanse%20libres%20de%20contactarme%20a%20este%20mismo%20correo%20para%20coordinar%20una%20demo.%0A%0AMuchas%20gracias" className="cta-btn cta-btn--primary">
                Solicitar demo
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=5492216161594&text=Hola%2C+necesito+ayuda+con+Quipu&type=phone_number&app_absent=0"
                className="cta-btn cta-btn--secondary"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="cta-btn__wa-icon"
                  viewBox="0 0 24 24"
                  aria-hidden
                  focusable="false"
                >
                  <path
                    fill="currentColor"
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                  />
                </svg>
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-col footer-col--brand">
            <Logo />
          </div>
          <div className="footer-col footer-col--center">
            <p className="footer-tagline">Finanzas claras. Decisiones mejores.</p>
            <p className="footer-copy">
              © 2026 Quipu. Todos los derechos reservados.
            </p>
          </div>
          <div className="footer-col footer-col--social">
            <a href="https://www.linkedin.com/in/javier-llorente-/" className="footer-linkedin">
              <svg
                className="footer-linkedin-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>Conectemos en LinkedIn</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
