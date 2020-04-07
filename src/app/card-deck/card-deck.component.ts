import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CardDeck} from '../models/card-deck';


@Component({
  selector: 'app-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.scss'],
})
export class CardDeckComponent implements OnInit {

  @Input() mycardDeck: CardDeck;

  @Output() clicked = new EventEmitter<string>();

  clickeado = false;

  constructor() { }

  ngOnInit() {}

  click() {
    this.clickeado = !this.clickeado;
    this.clicked.emit(this.mycardDeck.name);
  }
}
