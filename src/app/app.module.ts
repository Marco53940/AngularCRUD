import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditarComponent } from './Persona/editar/editar.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BuscarComponent } from './Persona/buscar/buscar.component';
<<<<<<< HEAD
import { ListarUnoComponent } from './Persona/listar-uno/listar-uno.component';
=======
>>>>>>> fb35f6ba0a12a4d538bc05bcd43593b4d6244ecb

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditarComponent,
<<<<<<< HEAD
    BuscarComponent,
    ListarUnoComponent
=======
    BuscarComponent
>>>>>>> fb35f6ba0a12a4d538bc05bcd43593b4d6244ecb
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
