class ClasseHerdeira extends ClasseBase {
  private idade: number;

  constructor(nome: string, idade: number) {
    super(nome);
    this.idade = idade;
  }

  get getIdade(): number {
    return this.idade;
  }

  set setIdade(idade: number) {
    this.idade = idade;
  }

  override print(): string {
    return super.print() + " e sua idade é " + this.idade;
  }
}
