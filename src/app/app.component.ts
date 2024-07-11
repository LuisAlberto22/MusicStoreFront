import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root', //Esto nos indica como va a ser llamado
  standalone: true, //No se nesecitan los modulos antiguos de angular
  imports: [HomeComponent], //Es obligatorio cuando es standalone
  //template: '<h1>Hola</h1>', 
  templateUrl: './app.component.html', // este es la ruta del html
  styleUrl: './app.component.css' // ruta de los estilos del html
})
export class AppComponent {
  title = 'musical-events';
}
