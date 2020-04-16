import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {HttpClientModule} from '@angular/common/http';
import { CardDecksPageRoutingModule } from './card-decks-routing.module';
import {CardListComponent} from '../card-list/card-list.component';
import { CardDecksPage } from './card-decks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardDecksPageRoutingModule,
    HttpClientModule
  ],
  declarations: [CardDecksPage, CardListComponent]
})
export class CardDecksPageModule {}
