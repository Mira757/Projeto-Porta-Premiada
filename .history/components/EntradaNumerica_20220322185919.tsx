import styles from "../styles/EntradaNumerica.module.css"

interface EntradaNumericaProps {
  value: number
  onChange: (newValue: number) => void
}

export default function EntradaNumerica(props: EntradaNumericaProps) {
  return (
    <div className={styles.entradaNumerica}>

    </div>
  )
}