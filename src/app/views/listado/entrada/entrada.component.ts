import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Entrada } from 'src/app/shared/interfaces/entrada';


@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  // Atributos
  @Input()
  public entrada: any;

  @Output()
  public doEvent: EventEmitter<number> = new EventEmitter<number>();
  

  constructor() {
  }

  ngOnInit(): void {
  }

  //lanzamos el eventEmitter para que vaya al padre
  public lanzarTitulo(): void{
    this.doEvent.emit(this.entrada.id);
  }

  public modificarClase(): any{
    return{
      'claro': this.entrada.id % 2 == 0,
      'oscuro': this.entrada.id % 2 != 0
    }
  }


}
