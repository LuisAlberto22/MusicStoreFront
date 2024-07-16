import { Component } from '@angular/core';
import { FooterComponent } from "../shared/components/footer/footer.component";
import { SimpleHeaderComponent } from '../shared/components/simple-header/simple-header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FooterComponent, SimpleHeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
