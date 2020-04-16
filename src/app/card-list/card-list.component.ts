import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {

  @Input() items: string[];
  @Input() listName: string;
  constructor() { }

  ngOnInit() {}

}
