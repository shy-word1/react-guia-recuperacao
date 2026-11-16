export default function CardConceito({ conteudo, revisado, onToggle }) {
  return (
    <article className={`concept-card ${revisado ? 'is-done' : ''}`}>
      <div className="card-topline">
        <span className="card-number">{conteudo.numero}</span>
        {revisado && <span className="done-label">✓ Revisado</span>}
      </div>
      <h3>{conteudo.titulo}</h3>
      <p className="card-summary">{conteudo.resumo}</p>

      <div className="example-box">
        <span className="mini-label">NA PRÁTICA</span>
        <p>{conteudo.exemplo}</p>
      </div>

      <div className="terms">
        {conteudo.termos.map((termo) => <span key={termo}>{termo}</span>)}
      </div>

      {conteudo.erro && (
        <details className="error-details">
          <summary>Erro comum e como corrigir</summary>
          <div className="error-content">
            <p><strong>Erro:</strong> {conteudo.erro}</p>
            <p><strong>Correção:</strong> {conteudo.correcao}</p>
          </div>
        </details>
      )}

      <button
        className={`review-button ${revisado ? 'reviewed' : ''}`}
        type="button"
        onClick={() => onToggle(conteudo.id)}
      >
        {revisado ? '✓ Conteúdo revisado' : 'Marcar como revisado'}
      </button>
    </article>
  )
}