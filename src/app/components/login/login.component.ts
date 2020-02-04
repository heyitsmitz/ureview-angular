import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GooglesigninService } from '../../services/googlesignin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( 
    private authService: GooglesigninService) { }

  ngOnInit() {    

  }  

  signIn(): void {
    this.authService.signInWithGoogle();
  }







}
