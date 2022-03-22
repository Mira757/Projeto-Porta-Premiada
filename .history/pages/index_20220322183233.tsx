import styles from "../styles/Formulario.module.css"
import Cartao from "../components/Cartao"

export default function Formulario () {
  return (
    <div>
    <div className={styles.formulario}>
      <Cartao></Cartao>
      <Cartao></Cartao>
    </div>
    <div>
      <Cartao></Cartao>
      <Cartao></Cartao>
    </div>
    </div>
  )
}
