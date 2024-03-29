import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Persona } from '../Modelo/Persona';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  persona:Persona;
  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/demo/personas';

  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }

  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url,persona);
  }

  buscarPersona(persona:Persona){
    return this.http.post<Persona>(this.Url+"/buscar",persona);
  }
  
  getPersonaId(id:number){
    return this.http.get<Persona>(this.Url+"/"+id);
  }

  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.Url+"/"+persona.idPersona,persona);
  }

}
