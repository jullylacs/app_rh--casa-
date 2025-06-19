export class Curriculo {
  // Atributos
  constructor(
    public id: number,
    public nome: string,
    public email: string,
    public telefone: string,
    public endereco: string,
    public formacao: string,
    public experiencia: string,
    public habilidades: string,
    public foto: string
  ) {}

  // Conversão OBJ → Banco de Dados
  toMap(): { [key: string]: any } {
    return {
      id: this.id,
      nome: this.nome,
      email: this.email,
      telefone: this.telefone,
      endereco: this.endereco,
      formacao: this.formacao,
      experiencia: this.experiencia,
      habilidades: this.habilidades,
      foto: this.foto,
    };
  }

  // Conversão Banco de Dados → OBJ
  static fromMap(map: any): Curriculo {
    return new Curriculo(
      map.id,
      map.nome,
      map.email,
      map.telefone,
      map.endereco,
      map.formacao,
      map.experiencia,
      map.habilidades,
      map.foto
    );
  }
}
