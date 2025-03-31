import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entrada } from 'src/app/shared/interfaces/entrada';
import { EntradaService } from 'src/app/shared/services/entrada.service';

@Component({
  selector: 'app-detalles-entrada',
  templateUrl: './detalles-entrada.component.html',
  styleUrls: ['./detalles-entrada.component.css']
})
export class DetallesEntradaComponent implements OnInit {

  public entrada: any;

  public id: number = 1;

  constructor(private activatedRoute: ActivatedRoute,
    private entradaService: EntradaService
  ) {
    this.activatedRoute.params.subscribe( paramUrl =>{
      this.id = +paramUrl.id;
    });
   }

  ngOnInit(): void {
    this.recuperarEntrada();
  }

  private recuperarEntrada(): void{
    this.entradaService.recuperarEntrada(this.id)
      .subscribe((data: any) => {
        this.entrada = data;
      });
  }

}
