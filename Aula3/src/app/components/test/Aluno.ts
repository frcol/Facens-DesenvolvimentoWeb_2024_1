// nome, idade, matricula
// construtor(nome, idade, matricula)
// get e set
// imprimir()

export class Aluno {
  private _matricula: string;
  private _nome: string;
  private _idade: number;
  private _teste: string;

  constructor(nome: string, idade: number, matricula: string) {
    this._matricula = matricula;
    this._nome = nome;
    this._idade = idade;
    this._teste = "teste";
  }

  get matricula(): string {
    return this._matricula;
  }

  set matricula(matricula: string) {
    this._matricula = matricula;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(nome: string) {
    this._nome = nome;
  }

  get idade(): number {
    return this._idade;
  }

  set idade(idade: number) {
    this._idade = idade;
  }

  print(): string {
    return "Seu nome é " + this._nome + " e sua idade é " + this._idade + " e sua matrícula é " + this._matricula;
  }
}


