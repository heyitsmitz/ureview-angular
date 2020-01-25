import { Component } from '@angular/core';
import { ToggleSidebarService } from './services/toggle-sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public sidebarService: ToggleSidebarService) {}

  ngOnInit() {}

}
