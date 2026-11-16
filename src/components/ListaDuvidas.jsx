import { useState } from 'react'

export default function ListaDuvidas() {
  const [texto, setTexto] = useState('')
  const [duvidas, setDuvidas] = useState([])

  function adicionarDuvida(event) {
    event.preventDefault()
    const textoLimpo = texto.trim()

    if (!textoLimpo) return

    const novaDuvida = {
      id: crypto.randomUUID(),
      texto: textoLimpo,
    }

    setDuvidas((atuais) => [...atuais, novaDuvida])
    setTexto('')
  }

  function removerDuvida(id) {
    setDuvidas((atuais) => atuais.filter((duvida) => duvida.id !== id))
  }

  return (
    <section className="questions-section" id="duvidas">
      <div className="section-heading">
        <div>
          <span className="eyebrow">ANOTE E REVISE DEPOIS</span>
          <h2>Minhas dúvidas<span>.</span></h2>
          <p>Guarde aqui os pontos que ainda precisam de uma explicação.</p>
        </div>
        <span className="question-count">{duvidas.length} {duvidas.length === 1 ? 'dúvida' : 'dúvidas'}</span>
      </div>

      <form className="question-form" onSubmit={adicionarDuvida}>
        <label className="sr-only" htmlFor="nova-duvida">Escreva sua dúvida</label>
        <input
          id="nova-duvida"
          type="text"
          value={texto}
          onChange={(event) => setTexto(event.target.value)}
          placeholder="Ex.: Como funcionam props?"
          maxLength={180}
        />
        <button type="submit">Adicionar <span aria-hidden="true">＋</span></button>
      </form>

      {duvidas.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">?</span>
          <p>Nenhuma dúvida por enquanto.</p>
          <small>Quando surgir uma, escreva acima para salvar nesta sessão.</small>
        </div>
      ) : (
        <ul className="question-list">
          {duvidas.map((duvida) => (
            <li key={duvida.id}>
              <span className="question-bullet">?</span>
              <span>{duvida.texto}</span>
              <button type="button" onClick={() => removerDuvida(duvida.id)} aria-label={`Remover dúvida: ${duvida.texto}`}>×</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}