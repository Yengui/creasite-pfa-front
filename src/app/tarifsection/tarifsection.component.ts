import { Component } from '@angular/core';

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
  selector: 'app-tarifsection',
  templateUrl: './tarifsection.component.html',
  styleUrls: ['./tarifsection.component.css'],
})
export class TarifsectionComponent {
  card1: TarifCardType = {
    type: 'Gratuit',
    price: 0,
    description1: '1 site professionnel',
    description2: 'Liberté de choix parmis trois modèles',
    description3: 'Plus que 5 sections par site',
    colortext: 'text-themegray-50',
    colorbg: 'bg-themegray-50',
  };
  card2: TarifCardType = {
    type: 'Basique',
    price: 25,
    description1: '5 sites professionnels',
    description2: 'liberté de choix parmis dix modèles',
    description3: 'Plus que 8 sections par site',
    colortext: 'text-themegray-50',
    colorbg: 'bg-themegray-50',
  };
  card3: TarifCardType = {
    type: 'Professionnel',
    price: 100,
    description1: '10 sites professionnels',
    description2: 'liberté de choix parmis tous les modèles',
    description3: 'Nombre illimité de sections par site',
    colortext: 'text-themegray-50',
    colorbg: 'bg-themegray-50',
  };
}
