export default class Porta {
  #numero
  #temPresente
  #selecionada
  #aberta

  constructor(numero,temPresente = false,selecionada = false, aberta = false) {
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

  alterarSelecao() {
    const selecionada = !this.selecionada
    return new Porta(numero,this.temPresente,selecionada,this.aberta)
  }

  alterarSelecao() {
    const aberta = !this.aberta
    return new Porta(numero,this.temPresente,this.selecionada,aberta)
  }

}