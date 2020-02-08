import { Component, OnInit } from '@angular/core';
import { UnitsListService } from 'src/app/services/units-list.service';
import { Offering } from 'src/app/interfaces/offering';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {

  offerings: Array<Offering>;
  filters = ["Information Technology", "Others"]
  sorts = ["Ratings", "Date Added", "Recently Updated", "Unit Level"]

  selectedFilter: String;
  selectedSort: String;
  
  constructor(private unitsListService: UnitsListService) { }

  ngOnInit() {
    this.offerings = this.unitsListService.getUnits();
    this.selectedFilter = this.filters[0];
    this.selectedSort = this.sorts[0];
  }
}
