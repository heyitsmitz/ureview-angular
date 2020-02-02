import { Component, OnInit } from '@angular/core';
import { UnitsListService } from 'src/app/services/units-list.service';
import { Offering } from 'src/app/interfaces/offering';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {

  private _k: number = 2;      // Number of unit cards in a row
  offerings: Array<Offering>;
  reordered_offerings: Array<Array<Offering>>;
  
  constructor(private unitsListService: UnitsListService) { }

  ngOnInit() {
    this.offerings = this.unitsListService.getUnits();
    this._reorder();
  }

  private _reorder() {
    this.reordered_offerings = [];
    for (let i = 0; i < this.offerings.length; i += this._k) {
      this.reordered_offerings.push(this.offerings.slice(i, i + this._k));
    }
  }
}
