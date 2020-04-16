import { Component } from '@angular/core';
import {CardService} from '../card.service';
import {CardDeck } from '../card/shared/card.model';



@Component({
  selector: 'app-card-decks',
  templateUrl: './card-decks.page.html',
  styleUrls: ['./card-decks.page.scss'],
})
export class CardDecksPage {

  private readonly ALLOWED_DECKS = ['classes', 'factions', 'qualities', 'types', 'races'];

  public cardDecks: CardDeck [] = [];

  constructor(private cardService: CardService) {
    this.getCardDecks();
  }


  private getCardDecks() {
    this.cardService.getAllCardDecks().subscribe(
        (cardDecks: CardDeck[]) => {
          this.extractAllowedDecks(cardDecks);
        }
    );
  }

  private extractAllowedDecks(cardDecks: CardDeck[]) {
    this.ALLOWED_DECKS.forEach((deckName: string) => {
      this.cardDecks.push({name: deckName, types: cardDecks[deckName]});
    });
  }
}

