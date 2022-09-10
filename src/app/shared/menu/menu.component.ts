import { isNgContainer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { last } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[]=[];

  constructor() { }

  ngOnInit(): void {
    this.items= [
    {
      label:'Pipes de Angular',
      icon:'pi pi-desktop',
      items:[
        {
          label:'Textos y Fechas',
          icon:'pi pi-align-left',
          routerLink:'/'
        },
        {
          label:'Numeros',
          icon:'pi pi-dollar',
          routerLink:'numeros'
        },
        {
          label:'No Comunes',
          icon:'pi pi-glove',
          routerLink:'no-comunes'
        }
      ]
    },
    {
      label:'Pipes Personalisados',
      icon:'pi pi-cog',
      routerLink:'ordenar'

    }
  ];
  }

}
