import { useState } from 'react'
import Header from './components/Header.jsx'
import CardConceito from './components/CardConceito.jsx'
import ListaDuvidas from './components/ListaDuvidas.jsx'
import { conteudos } from './data/conteudos.js'

export default function App() {
  const [revisados, setRevisados] = useState([])

  function alternarRevisao(id) {
    setRevisados((atuais) =>
      atuais.includes(id)
        ? atuais.filter((itemId) => itemId !== id)
        : [...atuais, id]
    )
  }

  const totalRevisados = revisados.length
  const progresso = (totalRevisados / conteudos.length) * 100

  return (
    <>
      <Header total={conteudos.length} revisados={totalRevisados} />

      <main id="inicio">
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow"><span className="eyebrow-line" /> GUIA DE REVISÃO • DESENVOLVIMENTO WEB</span>
            <h1>React em Prática<span>.</span><br /><em>Guia Interativo</em></h1>
            <p>Uma revisão direta ao ponto dos fundamentos que ajudam a transformar código em aplicações web.</p>
            <a className="primary-link" href="#guia">Começar a revisar <span>↘</span></a>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="code-window">
              <div className="window-dots"><i /><i /><i /><span>App.jsx</span></div>
              <div className="code-lines">
                <p><b>01</b> <span className="code-purple">function</span> <span className="code-blue">App</span>() {'{'}</p>
                <p><b>02</b> &nbsp;<span className="code-purple">return</span> (</p>
                <p><b>03</b> &nbsp;&nbsp;<span className="code-green">{'<Guia />'}</span></p>
                <p><b>04</b> &nbsp;)</p>
                <p><b>05</b> {'}'}</p>
              </div>
              <div className="code-footer"><span>●</span> pronto para aprender</div>
            </div>
            <div className="floating-chip chip-react">⚛ React</div>
            <div className="floating-chip chip-js">JSX</div>
          </div>
          <div className="hero-index">01 — 08</div>
        </section>

        <section className="progress-section" aria-live="polite">
          <div className="progress-info">
            <div><span className="eyebrow">SEU PROGRESSO</span><strong>{totalRevisados}<small>/{conteudos.length}</small></strong></div>
            <p>{totalRevisados === conteudos.length ? 'Mandou bem! Todos os conteúdos foram revisados.' : 'Cada card revisado é mais um passo na preparação.'}</p>
          </div>
          <div className="progress-track"><div className="progress-fill" style={{ width: `${progresso}%` }} /></div>
          <div className="progress-caption"><span>INÍCIO</span><span>{Math.round(progresso)}% CONCLUÍDO</span><span>FINAL</span></div>
        </section>

        <section className="guide-section" id="guia">
          <div className="section-heading">
            <div>
              <span className="eyebrow">FUNDAMENTOS • 8 TÓPICOS</span>
              <h2>Hora de revisar<span>.</span></h2>
              <p>Leia a explicação, confira o exemplo e marque quando terminar.</p>
            </div>
            <span className="section-side-note">01 / CONTEÚDOS</span>
          </div>

          <div className="cards-grid">
            {conteudos.map((conteudo) => (
              <CardConceito
                key={conteudo.id}
                conteudo={conteudo}
                revisado={revisados.includes(conteudo.id)}
                onToggle={alternarRevisao}
              />
            ))}
          </div>
        </section>

        <ListaDuvidas />
      </main>

      <footer className="footer">
        <a className="brand" href="#inicio"><span className="brand-mark">R</span><span>react<span className="brand-light">.em prática</span></span></a>
        <p>Feito para aprender, praticar e evoluir no desenvolvimento web.</p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </>
  )
}