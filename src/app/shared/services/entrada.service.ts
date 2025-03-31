import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Entradas } from '../interfaces/entrada';

@Injectable({
  providedIn: 'root'
})
export class EntradaService {

  constructor(private httpClient: HttpClient) { }

  public recuperarEntradas(): Observable<any> {

    return this.httpClient.get<any>('assets/json/entradas.json');
  }

  public recuperarEntrada(id: number): Observable<any> {
    return this.httpClient.get<any>('assets/json/entradas.json').pipe(
      map((entradas: any) => {
        
        let entrada ={
          id: 0,
          titulo: '',
          cuerpo: ''
        };

        entradas.foreach ((entradaListado: any) => {
          if (entradaListado.id == id) {
            entrada = entradaListado;
          }
        });

        return entrada;
      })
    );
  }


  public editarEntrada(entrada: Entradas){
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.post<any>("falsopost", entrada, { headers });

  }


}
