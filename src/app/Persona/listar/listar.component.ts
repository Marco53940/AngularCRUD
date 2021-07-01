import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService} from "../../Service/service.service";
<<<<<<< HEAD


=======
>>>>>>> fb35f6ba0a12a4d538bc05bcd43593b4d6244ecb
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  personas:Persona[];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getPersonas().subscribe(data=>{this.personas=data});
  }

  Editar(persona:Persona){
    localStorage.setItem("id", persona.idPersona.toString());
    this.router.navigate(["editar"]);
  }
}
