import React from 'react'
import Image from 'next/image'

export default function NotFound() {
  return (
    <>
        <h1>OOPS! 404!</h1>
        <div>
          <figure>
            <Image src="https://http.cat/images/404.jpg" alt='Gato no jornal' width={750} height={600} />
          </figure>
        </div>
        <p>Página não encontrada!</p>
    </>
  )
}
