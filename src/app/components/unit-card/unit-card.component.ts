import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-unit-card',
  templateUrl: './unit-card.component.html',
  styleUrls: ['./unit-card.component.css']
})
export class UnitCardComponent implements OnInit {

  @Input() unitCode: String;

  constructor() { }

  ngOnInit() {
  }

}
