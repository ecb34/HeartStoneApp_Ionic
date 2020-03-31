import { Component } from '@angular/core';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  subscribe: any;
  constructor(public platform: Platform) {
    this.subscribe = this.platform.backButton.subscribeWithPriority(5555, () => {
      if(window.confirm('Seguro quieres salir de la aplicación?')){
        navigator['app'].exitApp();
      }
    })
  }

    salir() {
      if(window.confirm('Seguro quieres salir de la aplicación?')){
        navigator['app'].exitApp();
      }
    }
}
