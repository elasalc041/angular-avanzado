import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Entrada } from 'src/app/shared/interfaces/entrada';
import { EntradaService } from 'src/app/shared/services/entrada.service';

@Component({
  selector: 'app-editar-entrada',
  templateUrl: './editar-entrada.component.html',
  styleUrls: ['./editar-entrada.component.css']
})
export class EditarEntradaComponent implements OnInit {

  public id: number = 0;
  public entrada: Entrada | undefined;
  public formEntrada: FormGroup;

  constructor(private formbuilder: FormBuilder, 
    private activatedRoute: ActivatedRoute,
    private entradaService: EntradaService,
  private router: Router) { 
    
    this.formEntrada = this.formbuilder.group({
      titulo: ['', Validators.required],
      resumen: ['', [Validators.required, Validators.minLength(10)]],
    });

    this.activatedRoute.params.subscribe(paramUrl => {
      this.id = +paramUrl;
    });

  }

  ngOnInit(): void {
    this.recuperarEntrada();
  }

  private recuperarEntrada(): void {
    this.entradaService.recuperarEntrada(this.id).subscribe((data: Entrada)=>{
      this.entrada = data;

      this.formEntrada.get('titulo')?.setValue(this.entrada.titulo);
      this.formEntrada.get('resumen')?.setValue(this.entrada.resumen);
    });
  }

  public editarEntrada(){
    this.entradaService.editarEntrada(this.formEntrada.value).subscribe(
      (data) => {
        console.log("Entrada editada: ", data);

        this.router.navigate(["dashboard"]);
      },
      (error) => {
        console.log("Error al editar la entrada", error);
      }
    )
  }



}
