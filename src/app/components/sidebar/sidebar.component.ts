import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { GooglesigninService } from '../../services/googlesignin.service';

declare var gapi : any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private authService: GooglesigninService) { }

  ngOnInit() {
  }

  signOut() {
    let choice = confirm("Do you really want to signout of UReview?");
    if (choice) {
      this.authService.signOut();
    }
    
  }

}
