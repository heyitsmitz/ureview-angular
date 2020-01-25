import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleSidebarService {

  opened = true;

  constructor() { }

  toggle() {
    this.opened = !this.opened;
    console.log("Button pressed", this.opened)
  }
}
