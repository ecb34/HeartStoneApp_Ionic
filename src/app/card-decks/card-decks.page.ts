import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-card-decks',
  templateUrl: './card-decks.page.html',
  styleUrls: ['./card-decks.page.scss'],
})
export class CardDecksPage implements OnInit {

  readonly cardDecks: string[] = ['Druid', 'Mage', 'Warrior', 'Rogue', 'Shaman'];


  constructor(private toast: ToastController) {
  }
  async ngOnInit() {
    const toast = await this.toast.create({
      message: 'Bienvenido a la app',
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

}
