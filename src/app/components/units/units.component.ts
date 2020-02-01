import { Component, OnInit } from '@angular/core';
import { UnitsListService } from 'src/app/services/units-list.service';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {

  units;
  
  constructor(private unitsListService: UnitsListService) { }

  ngOnInit() {
    this.units = this.unitsListService.getUnits();
  }

}
