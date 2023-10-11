import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>HOME</h1>

      <div>
        <h2>MEUS PRODUTOS</h2>
        <ul>
          <li><Link href="/produtos/tenis">Tênis</Link></li>
          <li><Link href="/produtos/meia">Meia</Link></li>
          <li><Link href="/produtos/camisa">Camisa</Link></li>
          <li><Link href="/produtos/calca">Calça</Link></li>
        </ul>
      </div>

      <figure>
        <Image
          src="/img/casa.avif"
          width={300}
          height={300}
          alt='Imagem Home'
        />
      </figure>

      
      
        
     
    </>
  )
}
