'use client'
import Link from "next/link";
import { useState } from "react";

export default function Cabecalho() {

  const userLogado = JSON.parse(sessionStorage.getItem("user-obj"))

  const [usuario, setUsuario] = useState(userLogado)

  const handleLogout = ()=>{
    sessionStorage.removeItem("token-user")
    sessionStorage.removeItem("user-obj")
    window.location.href = "/"
  }

  if(sessionStorage.getItem("token-user")){
  return (
    <header className="cabecalho">
      <div>
        <p>Email:{usuario.email != null ? usuario.email: ""}</p>
      </div>
      <div>
        <h2>MEUS PRODUTOS</h2>
        <ul>
          <li className="inline">
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/login">LOGIN</Link>
          </li>
          <li>
            <Link href="/" onClick={handleLogout}>LOGOUT</Link>
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
  );
  }else{
    return(
    <header className="cabecalho">
      <div>
        <h2>MEUS PRODUTOS</h2>
        <ul>
          <li className="inline">
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/login">LOGIN</Link>
          </li>
        </ul>
      </div>
    </header>)
  }
}
