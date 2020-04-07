import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {CardDeck} from '../models/card-deck';


@Component({
  selector: 'app-card-decks',
  templateUrl: './card-decks.page.html',
  styleUrls: ['./card-decks.page.scss'],
})
export class CardDecksPage implements OnInit {

  readonly mockupFile: string  = './assets/carddecks.json';

  cardDecks: CardDeck [];
  selectedCDs: string[] = [];


  constructor(private toast: ToastController) {}
  async ngOnInit() {
    const toast = await this.toast.create({
      message: 'Bienvenido a la app',
      duration: 2000,
      position: 'middle'
    });
    await toast.present();

    this.getData();
  }

  public getData() {
    fetch(this.mockupFile).then(res => res.json())
        .then(json => {
          this.cardDecks = json;
        });
  }

  select(name: string) {
    const indexCD = this.selectedCDs.indexOf(name);

    if (indexCD !== -1) {
        this.selectedCDs.splice(indexCD, 1);
    } else {
      this.selectedCDs.push(name);
    }

  }
}
