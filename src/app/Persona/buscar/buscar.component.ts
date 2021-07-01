import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  persona:Persona = new Persona();

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  Buscar(persona){

  this.service.buscarPersona(persona)
  .subscribe(data=>{
    this.persona=data;
    alert("Se Encontro con id="+persona.idPersona.toString());
    localStorage.setItem('persona', JSON.stringify(this.persona));
    
  });
  this.router.navigate(["listar-uno"]);
  
  }

}
