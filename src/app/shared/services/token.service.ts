import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  //crear atributo donde se va a guardar el valor
  private token: BehaviorSubject<number> = new BehaviorSubject<number>(0);

 //crear el observable
 public token$: Observable<number> = this.token.asObservable();



  constructor() { }

//metodo asignar un nuevo valor
  public setToken(token: number): void{
    //debe instanciarse un nuevo objeto para asignar nuevo valor
    this.token.next(token);
  }
}
