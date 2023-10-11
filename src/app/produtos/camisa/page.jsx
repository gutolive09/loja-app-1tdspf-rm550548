import React from "react";
import Link from "next/link";
import Image from 'next/image'

export default function camisa() {
  return (
    <div>
      <h1>Camisa</h1>
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          tempore vel obcaecati molestias cumque corrupti repudiandae fugit quia
          ipsa. Deserunt placeat, modi sed impedit natus nihil voluptas
          accusantium maiores quas?
        </p>
        <p>
          <Link href="/">Voltar...</Link>
        </p>
        <Image src="/img/casa.avif" width={300} height={300} alt='Imagem Home'/>
      </div>
    </div>
  );
}
