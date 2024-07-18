import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Concert, emptyConcert } from '../../models/concert.mode';
import { TextLimiterPipe } from '../../pipes/text-limiter/text-limiter.pipe';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, TextLimiterPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input({ required: true }) data: Concert = emptyConcert

}
