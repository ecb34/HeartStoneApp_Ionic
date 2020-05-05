import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Card} from './card';
import {CardService} from '../card.service';

@Component({
  selector: 'app-card-listing',
  templateUrl: './card-listing.page.html',
  styleUrls: ['./card-listing.page.scss'],
})
export class CardListingPage {

  public cards: Card[] = [];
  cardDeckGroup: string;
  cardDeck: string;

  constructor(public route: ActivatedRoute, private cardService: CardService) { }

  ionViewWillEnter(){
    this.cardDeckGroup = this.route.snapshot.paramMap.get('cardDeckGroup');
    this.cardDeck = this.route.snapshot.paramMap.get('cardDeck');
    this.cardService.getCardByDeck(this.cardDeckGroup, this.cardDeck).subscribe(
        (cards: Card[]) => {
          this.cards = cards;
        });
  }

}
