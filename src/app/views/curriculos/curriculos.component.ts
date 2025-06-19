import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculoService } from '../../services/curriculos.service';

@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.component.html',
  styleUrls: ['./curriculos.component.scss']
})
export class CurriculosComponent implements OnInit {
  
  // Vetor para armazenar os currículos do backend
  public curriculos: Curriculo[] = [];

  // Construtor conecta com o CurriculoService
  constructor(private _curriculoService: CurriculoService) {}

  // Método para listar currículos
  listarCurriculos() {
    this._curriculoService.getCurriculos().subscribe(
      (response: any[]) => {
        this.curriculos = response.map(
          (atributo) => new Curriculo(
            atributo.id,
            atributo.nome,
            atributo.email,
            atributo.telefone,
            atributo.endereco,
            atributo.formacao,
            atributo.experiencia,
            atributo.habilidades,
            atributo.foto
          )
        );
      },
      (erro: any) => {
        console.error('Erro ao buscar currículos:', erro);
      }
    );
  }

  // Executa ao iniciar o componente
  ngOnInit(): void {
    this.listarCurriculos();
  }
}
