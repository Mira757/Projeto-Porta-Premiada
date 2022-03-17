import Porta from "../components/Porta";
import PortaModel from "../model/porta";

export default function Home() {
  const p1 = new PortaModel(1)
  const p2 = new PortaModel(2)
  return (
    <div style={{display: "flex"}}>
      <Porta selecionada/>
      <Porta/>
      <Porta selecionada/>
      <Porta/>
    </div>
  )
}
