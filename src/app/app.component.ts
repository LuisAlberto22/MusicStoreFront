import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from "./login/login.component";
import { FormsModule } from '@angular/forms';
import { JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root', //Esto nos indica como va a ser llamado
  standalone: true, //No se nesecitan los modulos antiguos de angular
  imports: [RouterOutlet, FormsModule, UpperCasePipe, LowerCasePipe, JsonPipe], //Es obligatorio cuando es standalone
  //template: '<h1>Hola</h1>', 
  templateUrl: './app.component.html', // este es la ruta del html
  styleUrl: './app.component.css' // ruta de los estilos del html
})
export class AppComponent {

  objetoGlobal = {
    class: 'seleccionado',
    title: 'musical-events',
    age: 18,
    mayor: true
  };


  test() {
    console.log("test")
    return "Test"
  }
}
