import { useState } from 'react'
import './estilos/principal.css'
import data from './data/apis.json'
import Carta from './bloques/Carta.jsx'

function Marco() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="d-flex flex-column">
        <header className="header">Header</header>
        <main className="main-content d-flex justify-content-center align-items-center flex-wrap gap-3">

          {data.map(el => <Carta nombre={el.nombre} descripcion={el.descripcion} img="" />)}


        </main>
        <footer className="footer">Footer</footer>
      </div>
    </>
  )
}
export default Marco
