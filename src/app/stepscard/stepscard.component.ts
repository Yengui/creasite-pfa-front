import { Component, Input } from '@angular/core';

type CardType = {
  title: string;
  description1: string;
  description2: string;
  description3: string;
  number: number;
};

@Component({
  selector: 'app-stepscard',
  templateUrl: './stepscard.component.html',
  styleUrls: ['./stepscard.component.css'],
})
export class StepscardComponent {
  @Input() card: CardType = {
    title: '',
    description1: '',
    description2: '',
    description3: '',
    number: 1,
  };
}
