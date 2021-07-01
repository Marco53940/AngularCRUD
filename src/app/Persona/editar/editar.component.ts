import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  persona:Persona = new Persona();

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getPersonaId(+id)
    .subscribe(data=>{
      this.persona=data;
    });
}

Actualizar(persona:Persona){
  this.service.updatePersona(persona)
  .subscribe(data=>{
    this.persona=data;
    alert("Se Actualizo con Exito...!!!");
<<<<<<< HEAD
    localStorage.setItem("id2", this.persona.idPersona.toString());
    this.router.navigate(["listar-uno"]);
=======
    this.router.navigate(["listar"]);
>>>>>>> fb35f6ba0a12a4d538bc05bcd43593b4d6244ecb
  });
}
}
