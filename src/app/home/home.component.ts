import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { CardComponent } from '../shared/components/card/card.component';
import { HomeService } from './home.service';
import { Concert } from '../shared/models/concert.mode';
import { NgClass, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Genre } from './home.model';
import { HighlightDirective } from '../shared/directives/highlight.directive';

@Component({
    selector: 'home',
    standalone: true,
    imports: [HeaderComponent, MatInputModule, HighlightDirective, NgSwitchCase, NgSwitchDefault, NgSwitch, FooterComponent, NgClass, NgFor, NgIf, FormsModule, MatSelectModule, MatFormFieldModule, CardComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})

export class HomeComponent implements OnInit {

    concerts: Concert[] = []
    genres: Genre[] = []

    numeroDeConciertos = ""

    ngOnInit(): void {
        this.homeService.getData().subscribe((response) => {
            this.concerts = response.concerts
            this.genres = response.genres
            this.numeroDeConciertos = this.concerts.length.toString()
        });
    }

    homeService = inject(HomeService)
    //inyeccion  de dependencias
    //prueba = inject(PruebaService);

    testClick() {

        //console.log(this.prueba.miNumero)
        //this.getData();
    }

    //fetch api
    async getData() {
        const url = "https://rickandmortyapi.com/api/character"
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error('Response status: ${response.status}')
            }

            const json = await response.json()
            console.log(json)
        } catch (error) {
            console.error(error)
        }
    }
}