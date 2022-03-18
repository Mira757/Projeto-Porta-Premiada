import { useState } from "react";
import Porta from "../components/Porta";
import { criarPortas } from "../functions/portas";
import PortaModel from "../model/porta";

export default function Home() {
  const [p1,setP1] = useState(new PortaModel(1))

  const [portas,setPortas] = useState(criarPortas(3,2))

  function renderizarPortas() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={p1} onChange={novaPorta => setP1(novaPorta)}/>
    })
  }
  
  return (
    <div style={{display: "flex"}}>
      <Porta value={p1} onChange={novaPorta => setP1(novaPorta)}/>
    </div>
  )
}
