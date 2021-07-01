import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Persona/add/add.component';
import { EditarComponent } from './Persona/editar/editar.component';
import { ListarComponent } from './Persona/listar/listar.component';
<<<<<<< HEAD
import {BuscarComponent} from './Persona/buscar/buscar.component';
import {ListarUnoComponent} from './Persona/listar-uno/listar-uno.component';
=======
import {BuscarComponent} from './Persona/buscar/buscar.component'
>>>>>>> fb35f6ba0a12a4d538bc05bcd43593b4d6244ecb

const routes: Routes = [
  {path:'listar',component:ListarComponent},
  {path:'add',component:AddComponent},
  {path:'editar',component:EditarComponent},
<<<<<<< HEAD
  {path:'buscar',component:BuscarComponent},
  {path:'listar-uno',component:ListarUnoComponent}
=======
  {path:'buscar',component:BuscarComponent}
>>>>>>> fb35f6ba0a12a4d538bc05bcd43593b4d6244ecb
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
