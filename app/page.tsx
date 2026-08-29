import Image from 'next/image';

const APP_URL = 'https://app.parperpir.es';

const pillars = [
  { number: '01', title: 'Analizar', text: 'Tesis, métricas, segmentos y valoración.' },
  { number: '02', title: 'Valorar', text: 'Escenarios, múltiplos y potencial esperado.' },
  { number: '03', title: 'Seguir', text: 'Riesgos, catalizadores y evolución de cada compañía.' },
];

function Brand() {
  return (
    <span className="brand" aria-label="PARPERPIR">
      <Image src="/simbolo-parperpir.svg" alt="" width={28} height={24} priority />
      <span className="brand-copy">
        <strong>PARPERPIR</strong>
        <small>Nuestro Universo de Inversión</small>
      </span>
    </span>
  );
}

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand-link" href="#inicio" aria-label="PARPERPIR, ir al inicio"><Brand /></a>
          <a className="header-access" href={APP_URL}>Acceder <Arrow /></a>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-orbit" aria-hidden="true"><span /><i /></div>
          <div className="hero-content reveal">
            <p className="eyebrow">PARPERPIR</p>
            <h1 id="hero-title">Nuestro Universo<br />de Inversión</h1>
            <p className="hero-intro">Una plataforma privada para centralizar análisis, valoración y seguimiento de compañías.</p>
            <a className="primary-link" href={APP_URL}>Acceder a PARPERPIR <Arrow /></a>
          </div>
          <p className="hero-footnote reveal reveal-delay">Análisis fundamental <span>·</span> Valoración <span>·</span> Seguimiento</p>
        </section>

        <section className="philosophy" aria-labelledby="philosophy-title">
          <div className="section-heading reveal">
            <p className="eyebrow">Nuestra filosofía</p>
            <h2 id="philosophy-title">Una forma estructurada de invertir</h2>
            <p>PARPERPIR nace para reunir en un único lugar las compañías que seguimos, nuestras valoraciones, tesis de inversión, riesgos, catalizadores y principales métricas.</p>
          </div>
          <div className="pillars reveal reveal-delay">
            {pillars.map((pillar) => (
              <article key={pillar.number}>
                <span>{pillar.number}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="closing" aria-labelledby="closing-title">
          <div className="closing-inner reveal">
            <p className="eyebrow">PARPERPIR</p>
            <h2 id="closing-title">Nuestro universo.<br />Nuestras decisiones.</h2>
            <a className="primary-link" href={APP_URL}>Entrar en la aplicación <Arrow /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <p>© 2026 PARPERPIR <span>·</span> Nuestro Universo de Inversión</p>
          <a href={APP_URL}>Acceder a la aplicación</a>
        </div>
      </footer>
    </div>
  );
}
