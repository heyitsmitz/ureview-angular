import { Component, OnInit } from '@angular/core';
import { ToggleSidebarService } from 'src/app/services/toggle-sidebar.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public sidebarService: ToggleSidebarService) { }

  ngOnInit() {
    
  }

}
