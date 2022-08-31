import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent  {

  //i18nSelect
  nombre:string= 'Ramon';
  genero:string= 'masculino';
  invitacionMapa={
    'masculino':'invitarlo',
    'femenino':'invitarla',
  }

//i18nPlural
clientes:string[]=['Maria','Pedro','Juan'];

}
