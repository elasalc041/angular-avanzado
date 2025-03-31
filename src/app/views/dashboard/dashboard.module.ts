import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { EditarEntradaComponent } from '../editar-entrada/editar-entrada.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DashboardComponent, EditarEntradaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DashboardComponent},
      { path: 'editar-entrada/:id', component: EditarEntradaComponent}
    ]),
    ReactiveFormsModule   
  ]
})
export class DashboardModule { }
