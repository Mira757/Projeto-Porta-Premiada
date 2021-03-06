import { useState } from "react";
import Porta from "../components/Porta";
import { atualizarPortas, criarPortas } from "../functions/portas";

export default function Home() {

  const [portas,setPortas] = useState(criarPortas(4,2))

  function renderizarPortas() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta} onChange={novaporta => setPortas(atualizarPortas(portas, novaporta))}/>
    })
  }
  
  return (
    <div style={{display: "flex"}}>
      {renderizarPortas()}
    </div>
  )
}
