import { Component, OnInit } from '@angular/core';
import { UnitsListService } from 'src/app/services/units-list.service';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {

  private _k: number = 2;      // Number of unit cards in a row
  units;
  reordered_units;
  
  constructor(private unitsListService: UnitsListService) { }

  ngOnInit() {
    this.units = this.unitsListService.getUnits();
    this._reorder();
  }

  private _reorder() {
    this.reordered_units = [];
    for (let i = 0; i < this.units.length; i += this._k) {
      this.reordered_units.push({ units: this.units.slice(i, i + this._k) });
    }
  }

}
