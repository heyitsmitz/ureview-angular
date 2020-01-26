import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnitsListService {

  constructor() { }

  getUnits() {
    return [
      { 'unitCode': 'FIT1045' },
      { 'unitCode': 'FIT1047' },
      { 'unitCode': 'FIT1008' },
      { 'unitCode': 'FIT2004' },
      { 'unitCode': 'FIT2099' }
    ];
  }

}
