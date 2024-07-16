import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { CardComponent } from '../shared/components/card/card.component';

@Component({
    selector: 'home',
    standalone: true,
    imports: [HeaderComponent, MatInputModule, FooterComponent, FormsModule, MatSelectModule, MatFormFieldModule, CardComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})

export class HomeComponent {
}