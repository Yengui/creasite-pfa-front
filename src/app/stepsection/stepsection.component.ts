import { Component } from '@angular/core';

type CardType = {
  title: string;
  description1: string;
  description2: string;
  description3: string;
  number: number;
};

@Component({
  selector: 'app-stepsection',
  templateUrl: './stepsection.component.html',
  styleUrls: ['./stepsection.component.css'],
})
export class StepsectionComponent {
  card1: CardType = {
    title: 'Créer votre compte',
    description1: 'Créer un compte en cliquant sur le bouton ',
    description2: "S'inscrire",
    description3: '',
    number: 1,
  };
  card2: CardType = {
    title: 'Choisir le modèle',
    description1: 'Cliquer sur ',
    description2: 'Créer un site',
    description3: ' puis choisir le modèle',
    number: 2,
  };
  card3: CardType = {
    title: 'Personnaliser votre site',
    description1: 'Remplir les champs nécessaires de votre site',
    description2: '',
    description3: '',
    number: 3,
  };
  card4: CardType = {
    title: 'Partager votre site',
    description1: 'Cliquer sur ',
    description2: 'Partager',
    description3: ' pour avoir le lien de votre site',
    number: 4,
  };
}
