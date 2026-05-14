import { useState, useEffect } from 'react'
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
          <a href="#producto" onClick={close}>
            Producto
          </a>
          <a href="#beneficios" onClick={close}>
            Beneficios
          </a>
          <a href="#planes" onClick={close}>
            Planes
          </a>
          <a href="#preguntas" onClick={close}>
            Preguntas
          </a>
          <a href="#contacto" onClick={close}>
            Contacto
          </a>
          <a href="https://cal.com/javierllorente/40min" target="_blank" rel="noopener noreferrer" className="btn btn-header nav-demo" onClick={close}>
            Solicitar demo
          </a>
        </nav>
        <a href="https://cal.com/javierllorente/40min" target="_blank" rel="noopener noreferrer" className="btn btn-header header-demo-desktop">
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

const IMPACTO_REVIEWS = [
  {
    id: 'impacto-review-1',
    quote:
      'Ahora entiendo la caja del negocio sin revisar tres planillas distintas.',
    citeLine: 'Mariana R. · Dueña de comercio',
  },
  {
    id: 'impacto-review-2',
    quote:
      'Me ayudó a ordenar cobros, pagos y reportes en un solo lugar.',
    citeLine: 'Diego M. · Servicios profesionales',
  },
  {
    id: 'impacto-review-3',
    quote:
      'La IA hace más fácil detectar problemas antes de fin de mes.',
    citeLine: 'Sofía L. · PyME en crecimiento',
  },
  {
    id: 'impacto-review-4',
    quote:
      'Pasamos de reportes manuales a una visión clara de ingresos y gastos.',
    citeLine: 'Pablo G. · Distribuidora familiar',
  },
  {
    id: 'impacto-review-5',
    quote:
      'Me permite anticipar pagos y tomar decisiones con más tranquilidad.',
    citeLine: 'Lucía T. · Agencia de marketing',
  },
  {
    id: 'impacto-review-6',
    quote:
      'El tablero es simple, claro y muy útil para revisar el negocio.',
    citeLine: 'Andrés V. · Empresa de servicios',
  },
]

function PressOutletMark({ id }) {
  switch (id) {
    case 'infobae':
      return (
        <span
          className="press-mentions__mark press-mentions__mark--infobae"
          aria-label="Infobae"
        >
          <span className="press-mentions__inf-a">Info</span>
          <span className="press-mentions__inf-b">bae</span>
        </span>
      )
    case 'iproup':
      return (
        <span
          className="press-mentions__mark press-mentions__mark--iproup"
          aria-label="iProUP"
        >
          <span className="press-mentions__ipr-i">i</span>
          <span className="press-mentions__ipr-pro">Pro</span>
          <span className="press-mentions__ipr-up">UP</span>
        </span>
      )
    case 'apertura':
      return (
        <span
          className="press-mentions__mark press-mentions__mark--apertura"
          aria-label="Apertura"
        >
          Apertura
        </span>
      )
    case 'americaeconomia':
      return (
        <span
          className="press-mentions__mark press-mentions__mark--america"
          aria-label="AméricaEconomía"
        >
          <span className="press-mentions__am-l1">América</span>
          <span className="press-mentions__am-l2">Economía</span>
        </span>
      )
    case 'contxto':
      return (
        <span
          className="press-mentions__mark press-mentions__mark--contxto"
          aria-label="Contxto"
        >
          <span className="press-mentions__cx-pre">cont</span>
          <span className="press-mentions__cx-x">x</span>
          <span className="press-mentions__cx-post">to</span>
        </span>
      )
    case 'bloomberglinea':
      return (
        <span
          className="press-mentions__mark press-mentions__mark--bloomlinea"
          aria-label="Bloomberg Línea"
        >
          <span className="press-mentions__bl-top">Bloomberg</span>
          <span className="press-mentions__bl-bot">Línea</span>
        </span>
      )
    default:
      return null
  }
}

const PRESS_OUTLET_IDS = [
  'infobae',
  'iproup',
  'apertura',
  'americaeconomia',
  'contxto',
  'bloomberglinea',
]

function readSlidesPerView() {
  if (typeof window === 'undefined') return 2
  /* Mobile: 1 · Tablet/desktop: 2 (sin tercera card recortada; ancho real vía .impacto-carousel__cq + cqw) */
  if (window.matchMedia('(max-width: 720px)').matches) return 1
  return 2
}

function ImpactoSection() {
  const metrics = [
    { value: '+120', title: 'PyMEs gestionadas' },
    { value: '35%', title: 'Menos tiempo en reportes' },
    { value: '4.8/5', title: 'Satisfacción promedio' },
    { value: '24/7', title: 'Visibilidad del negocio' },
  ]

  const [slidesPerView, setSlidesPerView] = useState(readSlidesPerView)
  const [start, setStart] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const onResize = () => setSlidesPerView(readSlidesPerView())
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const maxStart = Math.max(0, IMPACTO_REVIEWS.length - slidesPerView)
    setStart((s) => Math.min(s, maxStart))
  }, [slidesPerView])

  useEffect(() => {
    if (isPaused) return undefined
    const id = window.setInterval(() => {
      setStart((s) => {
        const mx = Math.max(0, IMPACTO_REVIEWS.length - slidesPerView)
        return s >= mx ? 0 : s + 1
      })
    }, 4500)
    return () => clearInterval(id)
  }, [isPaused, slidesPerView])

  const maxStart = Math.max(0, IMPACTO_REVIEWS.length - slidesPerView)

  return (
    <section
      className="section impacto-section"
      id="impacto"
      aria-labelledby="impacto-heading"
    >
      <div className="container">
        <div className="impacto-inner">
          <header className="impacto-header">
            <h2 className="section-title" id="impacto-heading">
              Impacto de Quipu
            </h2>
          </header>
          <div className="impacto-grid">
            {metrics.map((item) => (
              <article key={item.title} className="impacto-card">
                <p className="impacto-card__value">{item.value}</p>
                <h3 className="impacto-card__title">{item.title}</h3>
              </article>
            ))}
          </div>
          <h3 className="impacto-reviews-heading" id="impacto-reviews-heading">
            Lo que dicen nuestros clientes
          </h3>
          <div
            className="impacto-carousel"
            role="region"
            aria-roledescription="carrusel"
            aria-labelledby="impacto-reviews-heading"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="impacto-carousel__viewport"
              style={{
                '--impacto-spv': slidesPerView,
                '--impacto-n': IMPACTO_REVIEWS.length,
              }}
            >
              <div className="impacto-carousel__cq">
                <ul
                  className="impacto-carousel__track"
                  style={{
                    transform: `translateX(calc(-1 * ${start} * (var(--slide) + var(--gap))))`,
                  }}
                >
                  {IMPACTO_REVIEWS.map((r) => (
                    <li
                      key={r.id}
                      className="impacto-review impacto-carousel__slide"
                    >
                      <p className="impacto-review__stars" aria-hidden="true">
                        ★★★★★
                      </p>
                      <blockquote className="impacto-review__quote">
                        <p>{r.quote}</p>
                      </blockquote>
                      <cite className="impacto-review__cite">{r.citeLine}</cite>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="impacto-carousel__dots" aria-label="Posición en reseñas">
              {Array.from({ length: maxStart + 1 }, (_, i) => (
                <button
                  key={`impacto-dot-${i}`}
                  type="button"
                  aria-label={`Mostrar reseñas desde la posición ${i + 1}`}
                  aria-current={start === i ? 'true' : undefined}
                  className={`impacto-carousel__dot${start === i ? ' impacto-carousel__dot--active' : ''}`}
                  onClick={() => setStart(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
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
    <section className="section cards-section">
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

function HowSection() {
  const steps = [
    {
      title: 'Conectá tu información',
      text: 'Centralizá ingresos, gastos y movimientos.',
    },
    {
      title: 'Entendé tus números con IA',
      text: 'Visualizá caja, rentabilidad y evolución.',
    },
    {
      title: 'Tomá mejores decisiones',
      text: 'Anticipá problemas y planificá con control.',
    },
  ]

  return (
    <section
      className="section how-section"
      id="como-funciona"
      aria-labelledby="how-heading"
    >
      <div className="container">
        <header className="how-header">
          <h2 className="section-title" id="how-heading">
            ¿Cómo funciona Quipu?
          </h2>
          <p className="section-sub how-sub">
            Tres pasos para ordenar tus finanzas y decidir mejor.
          </p>
        </header>
        <ol className="how-steps">
          {steps.map((step, index) => (
            <li key={step.title} className="how-step">
              <div className="how-step__surface">
                <div className="how-step__head">
                  <span className="how-step__num" aria-hidden>
                    {index + 1}
                  </span>
                </div>
                <h3 className="how-step__title">{step.title}</h3>
                <p className="how-step__text">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function PlanesSection() {
  const planesDemoHref = 'https://cal.com/javierllorente/seleccion-de-plan-quipu'

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
        </header>
        <div className="planes-grid">
          <article className="plan-card">
            <h3 className="plan-card__name">Básico</h3>
            <p className="plan-card__desc">
              Para ordenar tus finanzas diarias.
            </p>
            <div className="plan-card__price">
              <span className="plan-card__amount">$29.000</span>
              <span className="plan-card__period">/ mes</span>
            </div>
            <ul className="plan-card__features">
              <li>Gestión de caja</li>
              <li>Cobros y pagos</li>
              <li>Reportes básicos</li>
              <li>Hasta 5 GB de almacenamiento</li>
              <li>Soporte por email</li>
            </ul>
            <div className="plan-card__cta-wrap">
              <a
                href={planesDemoHref}
                className="plan-card__cta plan-card__cta--outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar demo
              </a>
            </div>
          </article>
          <article className="plan-card plan-card--featured">
            <span className="plan-card__badge">Más elegido</span>
            <h3 className="plan-card__name">Profesional</h3>
            <p className="plan-card__desc">
              Para automatizar y decidir con más control.
            </p>
            <div className="plan-card__price">
              <span className="plan-card__amount">$59.000</span>
              <span className="plan-card__period">/ mes</span>
            </div>
            <ul className="plan-card__features">
              <li>Todo lo del plan Básico</li>
              <li>Reportes avanzados con IA</li>
              <li>Presupuestos y proyecciones</li>
              <li>Integraciones contables</li>
              <li>Hasta 50 GB de almacenamiento</li>
              <li>Soporte prioritario</li>
            </ul>
            <div className="plan-card__cta-wrap plan-card__cta-wrap--featured">
              <a
                href={planesDemoHref}
                className="plan-card__cta plan-card__cta--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar demo
              </a>
            </div>
          </article>
          <article className="plan-card">
            <h3 className="plan-card__name">Empresarial</h3>
            <p className="plan-card__desc">
              Para escalar con soporte avanzado.
            </p>
            <div className="plan-card__price">
              <span className="plan-card__amount">$99.000</span>
              <span className="plan-card__period">/ mes</span>
            </div>
            <ul className="plan-card__features">
              <li>Todo lo del plan Profesional</li>
              <li>IA personalizada</li>
              <li>Múltiples empresas y usuarios</li>
              <li>Almacenamiento ilimitado</li>
              <li>API y exportaciones avanzadas</li>
              <li>Atención al cliente 24/7</li>
            </ul>
            <div className="plan-card__cta-wrap">
              <a
                href={planesDemoHref}
                className="plan-card__cta plan-card__cta--outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar demo
              </a>
            </div>
          </article>
        </div>
        <p className="planes-footnote">
          * En la demo analizamos tu operación, te orientamos sobre el plan más adecuado y te mostramos cómo Quipu puede ayudarte a ordenar tu gestión financiera. Sin permanencia.
        </p>
      </div>
    </section>
  )
}

function FaqSection() {
  const items = [
    {
      q: '¿Cuánto tiempo lleva empezar a usar Quipu?',
      a: 'No necesitás una implementación larga. En una demo podemos entender tu operación, revisar tus necesidades y mostrarte cómo Quipu puede ayudarte a ordenar ingresos, gastos, cobros y pagos.',
    },
    {
      q: '¿Tengo que cambiar mi forma de trabajar?',
      a: 'No necesariamente. Quipu está pensado para adaptarse a procesos simples de PyMEs y ayudarte a centralizar la información sin sumar complejidad.',
    },
    {
      q: '¿Qué pasa si hoy manejo todo con Excel o planillas?',
      a: 'Quipu te ayuda a pasar de información dispersa a una visión más clara y ordenada de tu negocio, reduciendo tareas manuales y errores frecuentes.',
    },
    {
      q: '¿Qué valor aporta Quipu frente a mi contador?',
      a: 'Quipu no reemplaza a tu contador: lo potencia. La plataforma centraliza la información financiera, ordena ingresos, gastos, cobros y pagos, y permite apoyarse en IA para analizar datos, detectar desvíos y preparar mejores reportes. Así vos y tu contador pueden trabajar con más contexto y menos tareas manuales.',
    },
    {
      q: '¿Mis datos financieros están seguros?',
      a: 'Sí. La información financiera debe manejarse con buenas prácticas de seguridad, acceso controlado y protección de datos.',
    },
    {
      q: '¿Qué incluye la demo?',
      a: 'Revisamos tu caso, te mostramos cómo funciona la plataforma y vemos qué plan se adapta mejor a tu operación.',
    },
  ]

  return (
    <section
      className="section faq-section"
      id="preguntas"
      aria-labelledby="preguntas-heading"
    >
      <div className="container">
        <div className="faq-panel">
          <header className="faq-panel__head">
            <h2 className="section-title faq-title" id="preguntas-heading">
              Preguntas frecuentes
            </h2>
            <p className="section-sub faq-sub">
              Antes de agendar una demo, conocé cómo Quipu se adapta a tu forma de trabajar.
            </p>
          </header>
          <div className="faq-list">
            {items.map((item) => (
              <details key={item.q} className="faq-item">
                <summary className="faq-summary">{item.q}</summary>
                <div className="faq-body">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PressMentionsSection() {
  return (
    <section
      className="press-mentions-section"
      id="medios"
      aria-labelledby="press-mentions-heading"
    >
      <div className="container press-mentions">
        <header className="press-mentions__header">
          <h2 className="press-mentions__title" id="press-mentions-heading">
            Medios donde nos mencionan
          </h2>
          <p className="press-mentions__sub">
            Quipu aparece en medios y comunidades de negocios, tecnología y PyMEs
            de Latinoamérica.
          </p>
        </header>
        <ul className="press-mentions__logos">
          {PRESS_OUTLET_IDS.map((id) => (
            <li key={id} className="press-mentions__logo-item">
              <PressOutletMark id={id} />
            </li>
          ))}
        </ul>
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
              <a href="https://cal.com/javierllorente/40min" target="_blank" rel="noopener noreferrer" className="btn btn-primary-light">
                Solicitar demo
              </a>
              <a href="#como-funciona" className="btn btn-hero-secondary">
                Ver cómo funciona
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

      <PressMentionsSection />

      <section className="section platform-section platform-section--product" id="producto">
        <div className="container platform-grid">
          <div className="platform-copy">
            <h2 className="section-title platform-copy__title">Todo en una sola plataforma</h2>
            <p className="section-sub platform-copy__lead">
              Unificá tus procesos financieros en un solo lugar.
              <br />
              Menos tareas manuales, más control y mejor toma de decisiones.
            </p>
            <ul className="checklist checklist--platform">
              <li>Información actualizada en tiempo real</li>
              <li>Menos errores y tareas repetitivas</li>
              <li>Decisiones más rápidas y seguras</li>
            </ul>
          </div>
          <PlatformMockups />
        </div>
      </section>

      <FeatureCards />

      <section className="section ia-section" id="ia">
        <div className="container ia-grid">
          <IACopilotMock />
          <div className="ia-copy">
            <h2 className="section-title ia-copy__title">Copiloto financiero con IA</h2>
            <p className="section-sub ia-copy__lead">
              Hacé preguntas y obtené respuestas al instante usando los datos reales
              de tu empresa.
            </p>
            <ul className="checklist checklist--compact checklist--ia">
              <li>Responde con datos de tu negocio</li>
              <li>Recomendaciones accionables</li>
              <li>Ahorra tiempo, gana claridad</li>
            </ul>
          </div>
        </div>
      </section>

      <HowSection />

      <ImpactoSection />

      <PlanesSection />

      <FaqSection />

      <section className="cta-band" id="contacto">
        <div className="container">
          <div className="cta-panel">
            <h2 className="cta-panel__title">
              Llevá el control financiero de tu PyME al siguiente nivel
            </h2>
            <div className="cta-panel__actions">
              <a href="https://cal.com/javierllorente/40min" target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn--primary">
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
