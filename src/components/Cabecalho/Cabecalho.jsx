import Link from 'next/link'

export default function Cabecalho() {
  return (
    <header className="cabecalho">
          <div>
            <h2>MEUS PRODUTOS</h2>
            <ul>
              <li className="inline">
                <Link href="/">Home</Link>
              </li>
              <li className="inline">
                <Link href="/usuarios-git">Usuários GITHUB</Link>
              </li>
              <li className="inline">
                <Link href="/consumo/eletro-view">ELETRONICOS</Link>
              </li>
              <li className="inline">
                <Link href="/produtos/tenis">Tênis</Link>
              </li>
              <li className="inline">
                <Link href="/produtos/meia">Meia</Link>
              </li>
              <li className="inline">
                <Link href="/produtos/camisa">Camisa</Link>
              </li>
              <li className="inline">
                <Link href="/produtos/calca">Calça</Link>
              </li>
            </ul>
          </div>
        </header>

  )
}
