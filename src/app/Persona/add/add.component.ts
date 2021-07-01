import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  persona:Persona=new Persona();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  Guardar(){
    this.service.createPersona(this.persona).subscribe(data=>{
      alert("Se Agrego con Exito..!!");
      //localStorage.setItem("id2", this.persona.idPersona.toString());
      //this.router.navigate(["listar-uno"]);
    });
    this.service.buscarPersona(this.persona)
    .subscribe(data=>{
      this.persona=data;
      console.log("data persona recibida");
      console.log(data);
      localStorage.setItem("id2", this.persona.idPersona.toString());
      this.router.navigate(["listar-uno"]);
    },error => {
      alert("No se encuentran datos");
  });
  }

}
