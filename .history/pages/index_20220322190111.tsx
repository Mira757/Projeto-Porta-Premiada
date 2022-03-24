import styles from "../styles/Formulario.module.css"
import Cartao from "../components/Cartao"
import Link from "next/link"
import EntradaNumerica from "../components/EntradaNumerica"

export default function Formulario () {
  return (
    <div className={styles.formulario}>
    <div>
      <Cartao bgcolor="#c0392c"><h1>Monty Hall</h1></Cartao>
      <Cartao>
        <EntradaNumerica />
      </Cartao>
    </div>
    <div>
      <Cartao></Cartao>
      <Cartao bgcolor="#28a025">
        <Link href={`/jogo/4/2`}>
          <h2 className={styles.link}>Iniciar</h2>
        </Link>
      </Cartao>
    </div>
    </div>
  )
}
