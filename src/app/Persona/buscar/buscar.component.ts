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
    //alert("buscar");
  }

  Buscar(persona){
    console.log(persona);
  this.service.buscarPersona(persona)
  .subscribe(data=>{
    this.persona=data;
    console.log("data persona recibida");
    console.log(data);
    localStorage.setItem("id2", this.persona.idPersona.toString());
    this.router.navigate(["listar-uno"]);
  },error => {
    alert("No se encuentran datos");
});
  //alert("Buscando Persona");
  
  
  }

}
