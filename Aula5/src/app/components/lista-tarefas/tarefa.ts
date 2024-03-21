export class Tarefa {
  id: number;
  titulo:string
  descricao: string;
  concluida: boolean;

  constructor(id: number, titulo:string, descricao: string, concluida: boolean) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.concluida = concluida;
  }
}
