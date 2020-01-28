import { Component, OnInit } from '@angular/core';
import { UnitsListService } from 'src/app/services/units-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  units;

  constructor(private unitsListService: UnitsListService) { }

  ngOnInit() {
    this.units = this.unitsListService.getUnits();
  }

}
