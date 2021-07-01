import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Persona/add/add.component';
import { EditarComponent } from './Persona/editar/editar.component';
import { ListarComponent } from './Persona/listar/listar.component';
import {BuscarComponent} from './Persona/buscar/buscar.component';
import {ListarUnoComponent} from './Persona/listar-uno/listar-uno.component';

const routes: Routes = [
  {path:'listar',component:ListarComponent},
  {path:'add',component:AddComponent},
  {path:'editar',component:EditarComponent},
  {path:'buscar',component:BuscarComponent},
  {path:'listar-uno',component:ListarUnoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
