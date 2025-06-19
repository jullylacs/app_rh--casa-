import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Curriculo } from '../models/curriculo.model';

@Injectable({
  providedIn: 'root'
})
export class CurriculoService {
  
  // Endereço da API
  private apiUrl = "http://localhost:3011/curriculos";

  constructor(private http: HttpClient) { }

  // GET -> Obtem a lista de Currículos
  getCurriculos(): Observable<Curriculo[]> {
    return this.http.get<Curriculo[]>(this.apiUrl);
  }

  // POST -> Cadastra um Currículo na API
  postCurriculo(curriculo: Curriculo): Observable<Curriculo[]> {
    return this.http.post<Curriculo[]>(this.apiUrl, curriculo);
  }

  // PUT -> Atualiza um Currículo existente
  putCurriculo(id: any, curriculo: Curriculo): Observable<Curriculo[]> {
    const apiUrlFinal = `${this.apiUrl}/${id}`;
    return this.http.put<Curriculo[]>(apiUrlFinal, curriculo);
  }

  // DELETE -> Deleta um Currículo existente
  deleteCurriculo(id: any): Observable<Curriculo[]> {
    const apiUrlFinal = `${this.apiUrl}/${id}`;
    return this.http.delete<Curriculo[]>(apiUrlFinal);
  }
}
