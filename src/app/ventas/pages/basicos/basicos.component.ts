import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

nombreLower: string= 'ramon';
nombreUpper: string = 'RAMON';
nombreCompleto: string = 'raMOn gONzaLeZ';

fecha : Date = new Date();

}
