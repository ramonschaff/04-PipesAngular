import { Component, OnInit } from '@angular/core';
import { Heroe, Color }from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html'
})
export class OrdenarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enMayusculas:boolean=true;
  heroes: Heroe[]=[
    {
      nombre:'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre:'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre:'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre:'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre:'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
    {
      nombre:'Flash',
      vuela: true,
      color: Color.rojo
    }
  ]

  ordenarPor:string='';
  
  cambiar(){
    this.enMayusculas=!this.enMayusculas;
  }
}
