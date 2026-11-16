export default function Header({ total, revisados }) {
  return (
    <header className="topbar">
      <a className="brand" href="#inicio" aria-label="React em Prática - início">
        <span className="brand-mark">R</span>
        <span>react<span className="brand-light">.em prática</span></span>
      </a>
      <nav>
        <a href="#guia">Guia de estudos</a>
        <a href="#duvidas">Minhas dúvidas</a>
      </nav>
      <div className="top-progress" aria-label={`${revisados} de ${total} conteúdos revisados`}>
        <span className="status-dot" />
        {revisados}/{total} revisados
      </div>
    </header>
  )
}