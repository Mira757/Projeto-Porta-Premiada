export default class Porta {
  #numero: number
  #temPresente: boolean
  #selecionada: boolean
  #aberta: boolean

  constructor(numero: number,temPresente = false,selecionada = false, aberta = false) {
  this.#numero = numero
  this.#temPresente = temPresente
  this.#selecionada = selecionada
  this.#aberta = aberta
  }

  get numero() {
    return this.#numero
  }

  get temPresente() {
    return this.#temPresente
  }

  get selecionada() {
    return this.#selecionada
  }

  get aberta() {
    return this.#aberta
  }

  desmarcar() {
    const selecionada = false
    return new Porta(this.numero,this.temPresente,selecionada,this.aberta)
  }

  alterarSelecao() {
    const selecionada = !this.selecionada
    return new Porta(this.numero,this.temPresente,selecionada,this.aberta)
  }

  abrir() {
    const aberta = true
    return new Porta(this.numero,this.temPresente,this.selecionada,aberta)
  }

}