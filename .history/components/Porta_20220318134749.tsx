import styles from "../styles/Porta.module.css"
import PortaModel from '../model/porta'

interface PortaProps {
  value: PortaModel
  onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {

  const  porta  = props.value
  const selecionada = porta.selecionada ? styles.selecionada : ''

  const alterarSelecao = e => props.onChange(porta.alterarSelecao())

  function renderizarPorta() {
    return (
      <div className={`${styles.estrutura} ${selecionada}`}>
        <div className={styles.porta}>
          <div className={styles.numero}>{porta.numero}</div>
          <div className={styles.macaneta}></div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.area} onClick={alterarSelecao}>
      
      <div className={styles.chao}></div>
    </div>
  )
}