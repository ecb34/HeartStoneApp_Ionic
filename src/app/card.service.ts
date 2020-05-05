import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import {CardDeck } from './card/shared/card.model';
import {Card} from './card-listing/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private readonly HS_API_URL = 'https://omgvamp-hearthstone-v1.p.rapidapi.com';
  private readonly API_KEY = '912e0df4c3msh6f2e5f7b682072ep1a9189jsnbdc70fae7d9e';

  private headers: HttpHeaders = new HttpHeaders({
    'X-RapidAPI-Key': this.API_KEY
  });

  constructor(private http: HttpClient) { }

  public getAllCardDecks(): Observable<CardDeck[]> {
    return this.http.get<CardDeck[]>(
        this.HS_API_URL + '/info' , {headers: this.headers}
    );
  }

  public getCardByDeck(cardDeckGroup: string, cardDeck: string): Observable<Card[]> {
    return this.http.get<Card[]>(
        this.HS_API_URL + '/cards/' + cardDeckGroup + '/' + cardDeck,
        {headers: this.headers}
        );
  }
}
