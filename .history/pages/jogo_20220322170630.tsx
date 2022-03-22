import styles from "../styles/Jogo.module.css"
import { useState } from "react";
import Porta from "../components/Porta";
import { atualizarPortas, criarPortas } from "../functions/portas";
import Link from "next/link"

export default function jogo () {
  const [portas,setPortas] = useState(criarPortas(4,2))

  function renderizarPortas() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta} onChange={novaporta => setPortas(atualizarPortas(portas, novaporta))}/>
    })
  }
  
  return (
    <div id={styles.jogo}>
      <div>
        {renderizarPortas()}
      </div>
      <div className={styles.botoes}>

      </div>
    </div>
  )
}
