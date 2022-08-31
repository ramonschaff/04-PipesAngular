import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor( private PrimeNgConfig:PrimeNGConfig) { }


  ngOnInit(): void {
    this.PrimeNgConfig.ripple=true;
  }
  
  nombre:string = 'RaMon gonzalez ';
  valor:number=1000;
  obj={
    nombre:'Fernando'
  }

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  
  }

}
