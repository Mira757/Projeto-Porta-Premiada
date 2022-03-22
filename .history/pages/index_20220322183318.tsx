import styles from "../styles/Formulario.module.css"
import Cartao from "../components/Cartao"

export default function Formulario () {
  return (
    <div className={styles.formulario}>
    <div>
      <Cartao bgcolor="#c0392c"></Cartao>
      <Cartao></Cartao>
    </div>
    <div>
      <Cartao></Cartao>
      <Cartao bgcolor=""></Cartao>
    </div>
    </div>
  )
}
