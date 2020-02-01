import { Component, OnInit, Input } from '@angular/core';
import { Offering } from 'src/app/interfaces/offering';

@Component({
  selector: 'app-unit-card',
  templateUrl: './unit-card.component.html',
  styleUrls: ['./unit-card.component.css']
})
export class UnitCardComponent implements OnInit {

  @Input() offering: Offering;

  constructor() { }

  ngOnInit() {
  }

}
