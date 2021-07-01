import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar-uno',
  templateUrl: './listar-uno.component.html',
  styleUrls: ['./listar-uno.component.css']
})
export class ListarUnoComponent implements OnInit {
  persona:Persona;

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
   // alert("listar");
    this.Cargar();
    
  }

Cargar(){
  let id=localStorage.getItem("id2");
  this.service.getPersonaId(+id)
  .subscribe(data=>{
    this.persona=data;
    //alert("data  id recibida");
    console.log("data  id recibida");
  });
}

Editar(persona:Persona){
  localStorage.setItem("id2", persona.idPersona.toString());
  this.router.navigate(["editar"]);
}
}
