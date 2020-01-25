import { Component, OnInit } from '@angular/core';
import { ToggleSidebarService } from 'src/app/services/toggle-sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sidebarService: ToggleSidebarService) { }

  ngOnInit() {
  }

  _toggle() {
    this.sidebarService.toggle();
  }
}
