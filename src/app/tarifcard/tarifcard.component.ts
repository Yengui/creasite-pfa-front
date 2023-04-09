import { Component, Input } from '@angular/core';

type TarifCardType = {
  type: string;
  price: number;
  description1: string;
  description2: string;
  description3: string;
  colortext: string;
  colorbg: string;
};

@Component({
  selector: 'app-tarifcard',
  templateUrl: './tarifcard.component.html',
  styleUrls: ['./tarifcard.component.css'],
})
export class TarifcardComponent {
  @Input() card: TarifCardType = {
    type: '',
    price: 0,
    description1: '',
    description2: '',
    description3: '',
    colortext: '',
    colorbg: '',
  };
  @Input() class1: string = '';
  @Input() class2: string = '';
}
