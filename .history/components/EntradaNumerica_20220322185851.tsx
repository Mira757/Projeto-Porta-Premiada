import styles from "../styles/EntradaNumerica.module.css"

interface EntradaNumerica {
  value: number
  onChange: (newValue: number) => void
}

export default function EntradaNumerica(props) {
  return (
    <div className={styles.entradaNumerica}>

    </div>
  )
}