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

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.unitCode = this._activatedRoute.snapshot.paramMap.get("unitCode");
  }

}
