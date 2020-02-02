import { Injectable } from '@angular/core';
import { Offering } from 'src/app/interfaces/offering'

@Injectable({
  providedIn: 'root'
})
export class UnitsListService {

  constructor() { }

  getUnits(): Array<Offering> {
    return [
      { 'unitCode': 'FIT1045', 'facultyName': 'Information Technology', 'year': 2020, 'semester': 1 },
      { 'unitCode': 'FIT1047', 'facultyName': 'Information Technology', 'year': 2020, 'semester': 1 },
      { 'unitCode': 'FIT1008', 'facultyName': 'Information Technology', 'year': 2020, 'semester': 1 },
      { 'unitCode': 'FIT2004', 'facultyName': 'Information Technology', 'year': 2020, 'semester': 1 },
      { 'unitCode': 'FIT2099', 'facultyName': 'Information Technology', 'year': 2020, 'semester': 1 }
    ];
  }

}
