import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud';

  constructor (private router:Router){}
  
  Listar(){
<<<<<<< HEAD
  this.router.navigate(["listar"]);
=======
this.router.navigate(["listar"]);
>>>>>>> fb35f6ba0a12a4d538bc05bcd43593b4d6244ecb
  }
  Nuevo(){
    this.router.navigate(["add"]);
  }
  Buscar(){
    this.router.navigate(["buscar"]);
  }
}
