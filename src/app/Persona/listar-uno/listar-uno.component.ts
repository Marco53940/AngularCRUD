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
    this.Cargar();
    this.persona = JSON.parse(localStorage.getItem('persona'));
  }

Cargar(){
 // let id=localStorage.getItem("id");
 // this.service.getPersonaId(+id)
 // .subscribe(data=>{
 //   this.persona=data;
 // });
}

Editar(persona:Persona){
  localStorage.setItem("id", persona.idPersona.toString());
  this.router.navigate(["editar"]);
}
}
