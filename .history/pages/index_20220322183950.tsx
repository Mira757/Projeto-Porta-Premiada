import styles from "../styles/Formulario.module.css"
import Cartao from "../components/Cartao"
import Link from "next/link"

export default function Formulario () {
  return (
    <div className={styles.formulario}>
    <div>
      <Cartao bgcolor="#c0392c"><h1>Monty Hall</h1></Cartao>
      <Cartao></Cartao>
    </div>
    <div>
      <Cartao></Cartao>
      <Cartao bgcolor="#28a025"></Cartao>
    </div>
    </div>
  )
}
