import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  unitCode: String;
  unitSynopsis: String = "Synopsis......";

  categories = [
    "All", "Assignment 1", "Assignment 2"
  ];

  sorts = [
    "Date (Newest First)", "Date (Oldest First)", "Rating (Highest First)", "Rating (Lowest First)"
  ];

  selectedCategory: String;
  selectedSort: String;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.unitCode = this._activatedRoute.snapshot.paramMap.get("unitCode");
    this.selectedCategory = this.categories[0];
    this.selectedSort = this.sorts[0];
  }
}
