class ClasseBase {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  print() {
    return "Seu nom é "+this.nome;
  }
}
